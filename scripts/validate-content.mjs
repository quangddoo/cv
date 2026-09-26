import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { questionsData } from '../src/data/questions.js';

const root = process.cwd();
const answersDir = path.join(root, 'src', 'data', 'answers');
const strictMissing = process.argv.includes('--strict-missing');
const failOnAbsolute = process.argv.includes('--fail-on-absolute');
const placeholderPattern = /\b(TBD|FIXME|lorem ipsum|coming soon|your[- ]name|<YOUR|\[insert)\b/i;
const absolutePattern = /\b(luôn|chắc chắn|duy nhất|tối thượng|bất khả thi|không bao giờ|100%|tuyệt đối|hoàn toàn)\b/gi;

const questions = questionsData.cards.flatMap((card) =>
  card.sections.flatMap((section) => section.questions.map((question) => ({
    ...question,
    cardId: card.id,
    sectionId: section.id,
    sectionTitle: section.title,
  }))),
);

const ids = questions.map((question) => question.id);
const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
const answerFiles = fs.readdirSync(answersDir).filter((name) => name.endsWith('.md'));
const answerIds = answerFiles.map((name) => name.slice(0, -3));
const missing = questions.filter((question) => !answerIds.includes(question.id));
const extra = answerIds.filter((id) => !ids.includes(id));
const malformed = [];
const placeholders = [];
const absoluteWarnings = [];

for (const fileName of answerFiles) {
  const filePath = path.join(answersDir, fileName);
  const content = fs.readFileSync(filePath, 'utf8');
  const fenceCount = (content.match(/^\s*```/gm) ?? []).length;
  if (fenceCount % 2 !== 0) malformed.push(`${fileName}: unbalanced Markdown code fence`);
  if (placeholderPattern.test(content)) placeholders.push(fileName);
  const absoluteCount = content.match(absolutePattern)?.length ?? 0;
  if (absoluteCount >= 8) absoluteWarnings.push(`${fileName}: ${absoluteCount} absolute-claim terms`);
}

const bySection = new Map();
for (const question of missing) {
  const current = bySection.get(question.sectionTitle) ?? [];
  current.push(question.id);
  bySection.set(question.sectionTitle, current);
}

console.log(`Questions: ${questions.length}`);
console.log(`Answer files: ${answerFiles.length}`);
console.log(`Missing answers: ${missing.length}`);
console.log(`Extra answer files: ${extra.length}`);
console.log(`Duplicate question IDs: ${duplicateIds.length}`);
console.log(`Malformed Markdown files: ${malformed.length}`);
console.log(`Placeholder files: ${placeholders.length}`);
console.log(`Absolute-claim warnings: ${absoluteWarnings.length}`);

if (missing.length) {
  console.log('\nMissing answers by section:');
  for (const [section, sectionIds] of bySection) console.log(`- ${section}: ${sectionIds.join(', ')}`);
}
if (malformed.length) console.log(`\nMalformed Markdown:\n${malformed.map((x) => `- ${x}`).join('\n')}`);
if (placeholders.length) console.log(`\nPlaceholder files:\n${placeholders.map((x) => `- ${x}`).join('\n')}`);
if (absoluteWarnings.length) console.log(`\nAbsolute-claim warnings:\n${absoluteWarnings.slice(0, 30).map((x) => `- ${x}`).join('\n')}`);

const errors = [];
if (duplicateIds.length) errors.push(`duplicate question IDs: ${duplicateIds.join(', ')}`);
if (extra.length) errors.push(`answer files without a question: ${extra.join(', ')}`);
if (malformed.length) errors.push(`${malformed.length} answer file(s) have unbalanced Markdown fences`);
if (placeholders.length) errors.push(`${placeholders.length} answer file(s) contain placeholders`);
if (strictMissing && missing.length) errors.push(`${missing.length} question(s) have no answer file`);
if (failOnAbsolute && absoluteWarnings.length) errors.push(`${absoluteWarnings.length} answer file(s) have many absolute-claim terms`);

if (errors.length) {
  console.error(`\nValidation failed:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}

if (missing.length) console.log('\nValidation passed with missing-answer warnings. Use --strict-missing to fail on coverage gaps.');
else console.log('\nValidation passed.');
