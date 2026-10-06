import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import DOMPurify from 'dompurify';

DOMPurify.addHook = () => {};
DOMPurify.sanitize = (s) => s;

const { default: mermaid } = await import('mermaid');
mermaid.initialize({ startOnLoad: false });

const root = process.cwd();
const answersDir = path.join(root, 'src', 'data', 'answers');
const answerFiles = fs.readdirSync(answersDir).filter((name) => name.endsWith('.md')).sort();

let totalDiagrams = 0;
let filesWithDiagrams = 0;
const errors = [];

for (const fileName of answerFiles) {
  const filePath = path.join(answersDir, fileName);
  const content = fs.readFileSync(filePath, 'utf8');
  const regex = /```mermaid([\s\S]*?)```/g;
  let match;
  let diagramIndex = 0;
  let fileHasDiagram = false;

  while ((match = regex.exec(content)) !== null) {
    fileHasDiagram = true;
    totalDiagrams++;
    diagramIndex++;
    const code = match[1].trim();

    try {
      await mermaid.parse(code);
    } catch (err) {
      const line = content.substring(0, match.index).split('\n').length;
      errors.push({
        file: fileName,
        line,
        diagramIndex,
        error: err.message.split('\n')[0],
      });
    }
  }

  if (fileHasDiagram) filesWithDiagrams++;
}

console.log(`Total answer files: ${answerFiles.length}`);
console.log(`Files with Mermaid diagrams: ${filesWithDiagrams}`);
console.log(`Total Mermaid diagrams: ${totalDiagrams}`);
console.log(`Diagram render/parse errors: ${errors.length}`);

if (errors.length > 0) {
  console.error('\nMermaid validation failed:');
  for (const err of errors) {
    console.error(`- ${err.file}:${err.line} (diagram #${err.diagramIndex}): ${err.error}`);
  }
  process.exit(1);
} else {
  console.log('\nAll Mermaid diagrams are valid!');
}
