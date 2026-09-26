/**
 * Questions data parsed from Question_bank.md
 * Auto-generated structure for the interview study app
 */

export const questionsData = {
  cards: [
    // ═══════════════════════════════════════════════════════════
    // THẺ 1 — Core Technical
    // ═══════════════════════════════════════════════════════════
    {
      id: 'card_1',
      title: 'Thẻ 1 — Core Technical',
      type: 'questions',
      sections: [
        {
          id: 'c1_s1', title: '1. Java Core', category: 'java_core',
          tags: ['java', 'core', 'fundamentals'],
          questions: [
            { id: 'c1_s1_q1', text: 'Giải thích sự khác nhau giữa == và equals().', index: 1 },
            { id: 'c1_s1_q2', text: 'Khi override equals(), vì sao phải override cả hashCode()?', index: 2 },
            { id: 'c1_s1_q3', text: 'String, StringBuilder, StringBuffer khác nhau thế nào?', index: 3 },
            { id: 'c1_s1_q4', text: 'Vì sao String trong Java là immutable?', index: 4 },
            { id: 'c1_s1_q5', text: 'final, finally, finalize() khác nhau thế nào?', index: 5 },
            { id: 'c1_s1_q6', text: 'Java pass-by-value hay pass-by-reference?', index: 6 },
            { id: 'c1_s1_q7', text: 'Autoboxing/unboxing là gì? Có rủi ro gì khi dùng?', index: 7 },
            { id: 'c1_s1_q8', text: 'Sự khác nhau giữa checked exception và unchecked exception.', index: 8 },
            { id: 'c1_s1_q9', text: 'Khi nào nên dùng custom exception?', index: 9 },
            { id: 'c1_s1_q10', text: 'try-with-resources hoạt động như thế nào?', index: 10 },
            { id: 'c1_s1_q11', text: 'Optional nên và không nên dùng trong trường hợp nào?', index: 11 },
            { id: 'c1_s1_q12', text: 'record trong Java dùng để làm gì?', index: 12 },
            { id: 'c1_s1_q13', text: 'Sealed class là gì? Khi nào nên dùng?', index: 13 },
            { id: 'c1_s1_q14', text: 'Pattern matching trong Java giúp ích gì?', index: 14 },
            { id: 'c1_s1_q15', text: 'So sánh interface và abstract class.', index: 15 },
            { id: 'c1_s1_q16', text: 'Default method trong interface giải quyết vấn đề gì?', index: 16 },
            { id: 'c1_s1_q17', text: 'Static method trong interface có use case gì?', index: 17 },
            { id: 'c1_s1_q18', text: 'Inner class, static nested class, anonymous class khác nhau thế nào?', index: 18 },
            { id: 'c1_s1_q19', text: 'Reflection là gì? Có nhược điểm gì?', index: 19 },
            { id: 'c1_s1_q20', text: 'Annotation hoạt động như thế nào?', index: 20 },
          ]
        },
        {
          id: 'c1_s2', title: '2. Collections & Generics', category: 'collections',
          tags: ['java', 'collections', 'generics', 'data-structures'],
          questions: [
            { id: 'c1_s2_q1', text: 'So sánh ArrayList và LinkedList.', index: 1 },
            { id: 'c1_s2_q2', text: 'So sánh HashMap, LinkedHashMap, TreeMap.', index: 2 },
            { id: 'c1_s2_q3', text: 'HashMap hoạt động nội bộ như thế nào?', index: 3 },
            { id: 'c1_s2_q4', text: 'Điều gì xảy ra khi có hash collision trong HashMap?', index: 4 },
            { id: 'c1_s2_q5', text: 'Vì sao key trong HashMap nên immutable?', index: 5 },
            { id: 'c1_s2_q6', text: 'ConcurrentHashMap khác gì HashMap + synchronized?', index: 6 },
            { id: 'c1_s2_q7', text: 'CopyOnWriteArrayList phù hợp trong trường hợp nào?', index: 7 },
            { id: 'c1_s2_q8', text: 'Set đảm bảo uniqueness như thế nào?', index: 8 },
            { id: 'c1_s2_q9', text: 'TreeSet cần điều kiện gì để hoạt động đúng?', index: 9 },
            { id: 'c1_s2_q10', text: 'Sự khác nhau giữa Comparable và Comparator.', index: 10 },
            { id: 'c1_s2_q11', text: 'Generics trong Java là gì?', index: 11 },
            { id: 'c1_s2_q12', text: 'Type erasure là gì?', index: 12 },
            { id: 'c1_s2_q13', text: 'List<?>, List<Object>, List<? extends Number>, List<? super Integer> khác nhau thế nào?', index: 13 },
            { id: 'c1_s2_q14', text: 'PECS principle là gì?', index: 14 },
            { id: 'c1_s2_q15', text: 'Vì sao không thể tạo new T[] trong Java?', index: 15 },
            { id: 'c1_s2_q16', text: 'Fail-fast iterator là gì?', index: 16 },
            { id: 'c1_s2_q17', text: 'Iterator và ListIterator khác nhau thế nào?', index: 17 },
            { id: 'c1_s2_q18', text: 'Big-O của các thao tác phổ biến trong HashMap, ArrayList, TreeMap.', index: 18 },
            { id: 'c1_s2_q19', text: 'Khi nào nên dùng Queue, Deque, PriorityQueue?', index: 19 },
            { id: 'c1_s2_q20', text: 'Làm sao implement LRU cache bằng Java collection?', index: 20 },
          ]
        },
        {
          id: 'c1_s3', title: '3. JVM, Memory & GC', category: 'jvm',
          tags: ['java', 'jvm', 'memory', 'gc', 'performance'],
          questions: [
            { id: 'c1_s3_q1', text: 'JVM gồm những thành phần chính nào?', index: 1 },
            { id: 'c1_s3_q2', text: 'Heap và stack khác nhau thế nào?', index: 2 },
            { id: 'c1_s3_q3', text: 'Metaspace là gì?', index: 3 },
            { id: 'c1_s3_q4', text: 'Class loading process gồm những bước nào?', index: 4 },
            { id: 'c1_s3_q5', text: 'ClassLoader hierarchy hoạt động ra sao?', index: 5 },
            { id: 'c1_s3_q6', text: 'Garbage Collection hoạt động ở mức khái niệm như thế nào?', index: 6 },
            { id: 'c1_s3_q7', text: 'Minor GC, Major GC, Full GC khác nhau thế nào?', index: 7 },
            { id: 'c1_s3_q8', text: 'Young generation, old generation là gì?', index: 8 },
            { id: 'c1_s3_q9', text: 'Stop-the-world là gì?', index: 9 },
            { id: 'c1_s3_q10', text: 'So sánh G1 GC, ZGC, Shenandoah ở mức high-level.', index: 10 },
            { id: 'c1_s3_q11', text: 'Memory leak trong Java có thể xảy ra không? Ví dụ?', index: 11 },
            { id: 'c1_s3_q12', text: 'Làm sao phân tích memory leak?', index: 12 },
            { id: 'c1_s3_q13', text: 'Thread dump và heap dump dùng để làm gì?', index: 13 },
            { id: 'c1_s3_q14', text: 'OutOfMemoryError có những loại phổ biến nào?', index: 14 },
            { id: 'c1_s3_q15', text: 'StackOverflowError xảy ra khi nào?', index: 15 },
            { id: 'c1_s3_q16', text: 'Escape analysis là gì?', index: 16 },
            { id: 'c1_s3_q17', text: 'JIT compiler là gì?', index: 17 },
            { id: 'c1_s3_q18', text: 'Warm-up trong JVM nghĩa là gì?', index: 18 },
            { id: 'c1_s3_q19', text: 'Tuning JVM cần quan tâm những tham số nào?', index: 19 },
            { id: 'c1_s3_q20', text: 'Làm sao debug CPU high trong Java service?', index: 20 },
          ]
        },
        {
          id: 'c1_s4', title: '4. Concurrency & Multithreading', category: 'concurrency',
          tags: ['java', 'concurrency', 'threading', 'synchronization'],
          questions: [
            { id: 'c1_s4_q1', text: 'Process và thread khác nhau thế nào?', index: 1 },
            { id: 'c1_s4_q2', text: 'synchronized hoạt động như thế nào?', index: 2 },
            { id: 'c1_s4_q3', text: 'Monitor lock là gì?', index: 3 },
            { id: 'c1_s4_q4', text: 'Volatile giải quyết vấn đề gì?', index: 4 },
            { id: 'c1_s4_q5', text: 'volatile có thay thế được lock không?', index: 5 },
            { id: 'c1_s4_q6', text: 'Race condition là gì? Ví dụ thực tế.', index: 6 },
            { id: 'c1_s4_q7', text: 'Deadlock là gì? Cách phòng tránh?', index: 7 },
            { id: 'c1_s4_q8', text: 'Livelock và starvation khác deadlock thế nào?', index: 8 },
            { id: 'c1_s4_q9', text: 'wait(), notify(), notifyAll() hoạt động ra sao?', index: 9 },
            { id: 'c1_s4_q10', text: 'sleep() và wait() khác nhau thế nào?', index: 10 },
            { id: 'c1_s4_q11', text: 'ReentrantLock khác gì synchronized?', index: 11 },
            { id: 'c1_s4_q12', text: 'ReadWriteLock phù hợp khi nào?', index: 12 },
            { id: 'c1_s4_q13', text: 'Semaphore, CountDownLatch, CyclicBarrier khác nhau thế nào?', index: 13 },
            { id: 'c1_s4_q14', text: 'AtomicInteger hoạt động dựa trên cơ chế gì?', index: 14 },
            { id: 'c1_s4_q15', text: 'CAS là gì?', index: 15 },
            { id: 'c1_s4_q16', text: 'Thread pool hoạt động như thế nào?', index: 16 },
            { id: 'c1_s4_q17', text: 'Các tham số quan trọng của ThreadPoolExecutor.', index: 17 },
            { id: 'c1_s4_q18', text: 'Vì sao không nên dùng unbounded queue tùy tiện?', index: 18 },
            { id: 'c1_s4_q19', text: 'CompletableFuture dùng để làm gì?', index: 19 },
            { id: 'c1_s4_q20', text: 'Cách xử lý exception trong CompletableFuture.', index: 20 },
            { id: 'c1_s4_q21', text: 'ForkJoinPool phù hợp với bài toán nào?', index: 21 },
            { id: 'c1_s4_q22', text: 'Virtual threads là gì? Phù hợp và không phù hợp khi nào?', index: 22 },
            { id: 'c1_s4_q23', text: 'ThreadLocal là gì? Có rủi ro gì trong thread pool?', index: 23 },
            { id: 'c1_s4_q24', text: 'Backpressure là gì?', index: 24 },
            { id: 'c1_s4_q25', text: 'Làm sao thiết kế service xử lý concurrent requests an toàn?', index: 25 },
          ]
        },
        {
          id: 'c1_s5', title: '5. Streams & Functional Programming', category: 'streams',
          tags: ['java', 'streams', 'functional', 'lambda'],
          questions: [
            { id: 'c1_s5_q1', text: 'Stream API là gì?', index: 1 },
            { id: 'c1_s5_q2', text: 'Intermediate operation và terminal operation khác nhau thế nào?', index: 2 },
            { id: 'c1_s5_q3', text: 'map() và flatMap() khác nhau thế nào?', index: 3 },
            { id: 'c1_s5_q4', text: 'filter(), reduce(), collect() dùng thế nào?', index: 4 },
            { id: 'c1_s5_q5', text: 'Lazy evaluation trong stream là gì?', index: 5 },
            { id: 'c1_s5_q6', text: 'Parallel stream hoạt động như thế nào?', index: 6 },
            { id: 'c1_s5_q7', text: 'Khi nào không nên dùng parallel stream?', index: 7 },
            { id: 'c1_s5_q8', text: 'Side effect trong stream nguy hiểm thế nào?', index: 8 },
            { id: 'c1_s5_q9', text: 'Functional interface là gì?', index: 9 },
            { id: 'c1_s5_q10', text: 'Lambda expression được compile như thế nào ở mức khái niệm?', index: 10 },
            { id: 'c1_s5_q11', text: 'Method reference là gì?', index: 11 },
            { id: 'c1_s5_q12', text: 'Predicate, Function, Consumer, Supplier dùng khi nào?', index: 12 },
            { id: 'c1_s5_q13', text: 'Làm sao group data bằng Collectors.groupingBy()?', index: 13 },
            { id: 'c1_s5_q14', text: 'Sự khác nhau giữa findFirst() và findAny().', index: 14 },
            { id: 'c1_s5_q15', text: 'Stream có tái sử dụng được không?', index: 15 },
            { id: 'c1_s5_q16', text: 'Optional kết hợp với stream như thế nào?', index: 16 },
            { id: 'c1_s5_q17', text: 'Cách xử lý checked exception trong lambda.', index: 17 },
            { id: 'c1_s5_q18', text: 'So sánh code imperative và functional style.', index: 18 },
            { id: 'c1_s5_q19', text: 'Stream có luôn tốt hơn loop không?', index: 19 },
            { id: 'c1_s5_q20', text: 'Debug stream pipeline như thế nào?', index: 20 },
          ]
        },
        {
          id: 'c1_s6', title: '6. Spring Boot & Spring Framework', category: 'spring',
          tags: ['spring', 'spring-boot', 'ioc', 'di', 'aop'],
          questions: [
            { id: 'c1_s6_q1', text: 'Spring IoC là gì?', index: 1 },
            { id: 'c1_s6_q2', text: 'Dependency Injection là gì?', index: 2 },
            { id: 'c1_s6_q3', text: 'Constructor injection, setter injection, field injection khác nhau thế nào?', index: 3 },
            { id: 'c1_s6_q4', text: 'Vì sao thường khuyến nghị constructor injection?', index: 4 },
            { id: 'c1_s6_q5', text: 'Bean lifecycle trong Spring.', index: 5 },
            { id: 'c1_s6_q6', text: 'Bean scope gồm những loại nào?', index: 6 },
            { id: 'c1_s6_q7', text: '@Component, @Service, @Repository, @Controller khác nhau thế nào?', index: 7 },
            { id: 'c1_s6_q8', text: '@Bean và @Component khác nhau thế nào?', index: 8 },
            { id: 'c1_s6_q9', text: '@Autowired hoạt động như thế nào?', index: 9 },
            { id: 'c1_s6_q10', text: 'Circular dependency là gì? Cách xử lý?', index: 10 },
            { id: 'c1_s6_q11', text: 'Spring Boot auto-configuration hoạt động ra sao?', index: 11 },
            { id: 'c1_s6_q12', text: '@SpringBootApplication gồm những annotation nào?', index: 12 },
            { id: 'c1_s6_q13', text: 'Profiles trong Spring Boot dùng để làm gì?', index: 13 },
            { id: 'c1_s6_q14', text: 'Externalized configuration là gì?', index: 14 },
            { id: 'c1_s6_q15', text: '@ConfigurationProperties khác gì @Value?', index: 15 },
            { id: 'c1_s6_q16', text: 'Spring AOP là gì?', index: 16 },
            { id: 'c1_s6_q17', text: 'Proxy-based AOP có hạn chế gì?', index: 17 },
            { id: 'c1_s6_q18', text: '@Transactional hoạt động như thế nào?', index: 18 },
            { id: 'c1_s6_q19', text: 'Vì sao gọi method @Transactional nội bộ trong cùng class có thể không hoạt động?', index: 19 },
            { id: 'c1_s6_q20', text: 'Transaction propagation gồm những loại nào?', index: 20 },
            { id: 'c1_s6_q21', text: 'Isolation level là gì?', index: 21 },
            { id: 'c1_s6_q22', text: 'Spring Security filter chain hoạt động thế nào?', index: 22 },
            { id: 'c1_s6_q23', text: 'Authentication và Authorization khác nhau thế nào?', index: 23 },
            { id: 'c1_s6_q24', text: 'JWT flow trong Spring Security.', index: 24 },
            { id: 'c1_s6_q25', text: 'CORS và CSRF là gì?', index: 25 },
            { id: 'c1_s6_q26', text: 'Actuator dùng để làm gì?', index: 26 },
            { id: 'c1_s6_q27', text: 'Cách implement graceful shutdown.', index: 27 },
            { id: 'c1_s6_q28', text: 'Cách validate request trong Spring Boot.', index: 28 },
            { id: 'c1_s6_q29', text: 'Exception handling bằng @ControllerAdvice.', index: 29 },
            { id: 'c1_s6_q30', text: 'Làm sao versioning REST API trong Spring?', index: 30 },
          ]
        },
        {
          id: 'c1_s7', title: '7. REST API & HTTP', category: 'rest_api',
          tags: ['rest', 'api', 'http', 'web'],
          questions: [
            { id: 'c1_s7_q1', text: 'REST là gì?', index: 1 },
            { id: 'c1_s7_q2', text: 'RESTful API cần tuân thủ những nguyên tắc nào?', index: 2 },
            { id: 'c1_s7_q3', text: 'HTTP method GET, POST, PUT, PATCH, DELETE khác nhau thế nào?', index: 3 },
            { id: 'c1_s7_q4', text: 'Idempotency là gì?', index: 4 },
            { id: 'c1_s7_q5', text: 'Status code 200, 201, 204, 400, 401, 403, 404, 409, 422, 500 dùng khi nào?', index: 5 },
            { id: 'c1_s7_q6', text: 'Query param và path param khác nhau thế nào?', index: 6 },
            { id: 'c1_s7_q7', text: 'Pagination nên thiết kế thế nào?', index: 7 },
            { id: 'c1_s7_q8', text: 'Offset pagination và cursor pagination khác nhau thế nào?', index: 8 },
            { id: 'c1_s7_q9', text: 'API filtering, sorting nên thiết kế ra sao?', index: 9 },
            { id: 'c1_s7_q10', text: 'API backward compatibility là gì?', index: 10 },
            { id: 'c1_s7_q11', text: 'REST API versioning có những cách nào?', index: 11 },
            { id: 'c1_s7_q12', text: 'HATEOAS là gì?', index: 12 },
            { id: 'c1_s7_q13', text: 'ETag dùng để làm gì?', index: 13 },
            { id: 'c1_s7_q14', text: 'Rate limiting là gì?', index: 14 },
            { id: 'c1_s7_q15', text: 'API gateway làm nhiệm vụ gì?', index: 15 },
            { id: 'c1_s7_q16', text: 'OpenAPI/Swagger dùng để làm gì?', index: 16 },
            { id: 'c1_s7_q17', text: 'Request timeout nên xử lý thế nào?', index: 17 },
            { id: 'c1_s7_q18', text: 'Retry API có rủi ro gì?', index: 18 },
            { id: 'c1_s7_q19', text: 'Correlation ID / Request ID dùng để làm gì?', index: 19 },
            { id: 'c1_s7_q20', text: 'Thiết kế error response chuẩn nên gồm những field nào?', index: 20 },
          ]
        },
        {
          id: 'c1_s8', title: '8. Database & SQL', category: 'database',
          tags: ['database', 'sql', 'index', 'transaction'],
          questions: [
            { id: 'c1_s8_q1', text: 'Index là gì?', index: 1 },
            { id: 'c1_s8_q2', text: 'B-tree index hoạt động thế nào ở mức khái niệm?', index: 2 },
            { id: 'c1_s8_q3', text: 'Composite index là gì?', index: 3 },
            { id: 'c1_s8_q4', text: 'Thứ tự column trong composite index quan trọng thế nào?', index: 4 },
            { id: 'c1_s8_q5', text: 'Covering index là gì?', index: 5 },
            { id: 'c1_s8_q6', text: 'Khi nào index làm chậm hệ thống?', index: 6 },
            { id: 'c1_s8_q7', text: 'Explain plan dùng để làm gì?', index: 7 },
            { id: 'c1_s8_q8', text: 'N+1 query problem là gì?', index: 8 },
            { id: 'c1_s8_q9', text: 'Transaction là gì?', index: 9 },
            { id: 'c1_s8_q10', text: 'ACID là gì?', index: 10 },
            { id: 'c1_s8_q11', text: 'Isolation level: Read Uncommitted, Read Committed, Repeatable Read, Serializable khác nhau thế nào?', index: 11 },
            { id: 'c1_s8_q12', text: 'Dirty read, non-repeatable read, phantom read là gì?', index: 12 },
            { id: 'c1_s8_q13', text: 'Optimistic locking và pessimistic locking khác nhau thế nào?', index: 13 },
            { id: 'c1_s8_q14', text: 'Deadlock trong database xảy ra khi nào?', index: 14 },
            { id: 'c1_s8_q15', text: 'Normalization và denormalization là gì?', index: 15 },
            { id: 'c1_s8_q16', text: 'Khi nào nên denormalize?', index: 16 },
            { id: 'c1_s8_q17', text: 'Partitioning và sharding khác nhau thế nào?', index: 17 },
            { id: 'c1_s8_q18', text: 'Replication là gì?', index: 18 },
            { id: 'c1_s8_q19', text: 'Read replica có vấn đề consistency gì?', index: 19 },
            { id: 'c1_s8_q20', text: 'Migration database nên quản lý thế nào?', index: 20 },
            { id: 'c1_s8_q21', text: 'Soft delete có ưu nhược điểm gì?', index: 21 },
            { id: 'c1_s8_q22', text: 'UUID làm primary key có vấn đề gì?', index: 22 },
            { id: 'c1_s8_q23', text: 'Connection pool hoạt động như thế nào?', index: 23 },
            { id: 'c1_s8_q24', text: 'HikariCP cần tuning những gì?', index: 24 },
            { id: 'c1_s8_q25', text: 'Làm sao debug slow query?', index: 25 },
          ]
        },
        {
          id: 'c1_s9', title: '9. JPA / Hibernate', category: 'jpa',
          tags: ['jpa', 'hibernate', 'orm', 'database'],
          questions: [
            { id: 'c1_s9_q1', text: 'JPA là gì? Hibernate là gì?', index: 1 },
            { id: 'c1_s9_q2', text: 'Entity lifecycle gồm những trạng thái nào?', index: 2 },
            { id: 'c1_s9_q3', text: 'Persistence context là gì?', index: 3 },
            { id: 'c1_s9_q4', text: 'First-level cache và second-level cache khác nhau thế nào?', index: 4 },
            { id: 'c1_s9_q5', text: 'Lazy loading và eager loading khác nhau thế nào?', index: 5 },
            { id: 'c1_s9_q6', text: 'N+1 query xảy ra như thế nào trong Hibernate?', index: 6 },
            { id: 'c1_s9_q7', text: 'Cách xử lý N+1 query.', index: 7 },
            { id: 'c1_s9_q8', text: '@OneToMany, @ManyToOne, @ManyToMany dùng thế nào?', index: 8 },
            { id: 'c1_s9_q9', text: 'Owning side trong relationship là gì?', index: 9 },
            { id: 'c1_s9_q10', text: 'Cascade type là gì?', index: 10 },
            { id: 'c1_s9_q11', text: 'Orphan removal là gì?', index: 11 },
            { id: 'c1_s9_q12', text: 'fetch join là gì?', index: 12 },
            { id: 'c1_s9_q13', text: 'DTO projection có lợi ích gì?', index: 13 },
            { id: 'c1_s9_q14', text: 'Dirty checking là gì?', index: 14 },
            { id: 'c1_s9_q15', text: 'flush() và commit() khác nhau thế nào?', index: 15 },
            { id: 'c1_s9_q16', text: 'merge() và persist() khác nhau thế nào?', index: 16 },
            { id: 'c1_s9_q17', text: 'Optimistic locking với @Version.', index: 17 },
            { id: 'c1_s9_q18', text: 'Pessimistic lock trong JPA.', index: 18 },
            { id: 'c1_s9_q19', text: 'Batch insert/update trong Hibernate.', index: 19 },
            { id: 'c1_s9_q20', text: 'Vì sao không nên expose Entity trực tiếp ra API?', index: 20 },
            { id: 'c1_s9_q21', text: 'Open Session in View là gì? Vì sao thường nên tránh?', index: 21 },
            { id: 'c1_s9_q22', text: 'Criteria API dùng khi nào?', index: 22 },
            { id: 'c1_s9_q23', text: 'Specification pattern là gì?', index: 23 },
            { id: 'c1_s9_q24', text: 'Làm sao mapping enum an toàn?', index: 24 },
            { id: 'c1_s9_q25', text: 'Vấn đề khi dùng Lombok @Data trên Entity.', index: 25 },
          ]
        },
        {
          id: 'c1_s10', title: '10. Microservices & Distributed Systems', category: 'microservices',
          tags: ['microservices', 'distributed', 'architecture'],
          questions: [
            { id: 'c1_s10_q1', text: 'Microservices giải quyết vấn đề gì?', index: 1 },
            { id: 'c1_s10_q2', text: 'Khi nào không nên dùng microservices?', index: 2 },
            { id: 'c1_s10_q3', text: 'Monolith modular và microservices khác nhau thế nào?', index: 3 },
            { id: 'c1_s10_q4', text: 'Service discovery là gì?', index: 4 },
            { id: 'c1_s10_q5', text: 'API Gateway có vai trò gì?', index: 5 },
            { id: 'c1_s10_q6', text: 'Synchronous communication và asynchronous communication khác nhau thế nào?', index: 6 },
            { id: 'c1_s10_q7', text: 'REST và gRPC khác nhau thế nào?', index: 7 },
            { id: 'c1_s10_q8', text: 'Message broker dùng để làm gì?', index: 8 },
            { id: 'c1_s10_q9', text: 'Kafka và RabbitMQ khác nhau ở mức high-level.', index: 9 },
            { id: 'c1_s10_q10', text: 'Event-driven architecture là gì?', index: 10 },
            { id: 'c1_s10_q11', text: 'Eventual consistency là gì?', index: 11 },
            { id: 'c1_s10_q12', text: 'Distributed transaction khó ở điểm nào?', index: 12 },
            { id: 'c1_s10_q13', text: 'Saga pattern là gì?', index: 13 },
            { id: 'c1_s10_q14', text: 'Choreography và orchestration trong Saga khác nhau thế nào?', index: 14 },
            { id: 'c1_s10_q15', text: 'Outbox pattern là gì?', index: 15 },
            { id: 'c1_s10_q16', text: 'Idempotent consumer là gì?', index: 16 },
            { id: 'c1_s10_q17', text: 'Duplicate message xử lý thế nào?', index: 17 },
            { id: 'c1_s10_q18', text: 'Ordering trong message queue có đảm bảo không?', index: 18 },
            { id: 'c1_s10_q19', text: 'Exactly-once delivery có thực sự tuyệt đối không?', index: 19 },
            { id: 'c1_s10_q20', text: 'Circuit breaker pattern là gì?', index: 20 },
            { id: 'c1_s10_q21', text: 'Retry, timeout, fallback nên thiết kế thế nào?', index: 21 },
            { id: 'c1_s10_q22', text: 'Bulkhead pattern là gì?', index: 22 },
            { id: 'c1_s10_q23', text: 'Service mesh là gì?', index: 23 },
            { id: 'c1_s10_q24', text: 'Distributed tracing là gì?', index: 24 },
            { id: 'c1_s10_q25', text: 'Correlation ID trong microservices.', index: 25 },
            { id: 'c1_s10_q26', text: 'Config management cho microservices.', index: 26 },
            { id: 'c1_s10_q27', text: 'Secret management nên làm thế nào?', index: 27 },
            { id: 'c1_s10_q28', text: 'Blue-green deployment và canary deployment khác nhau thế nào?', index: 28 },
            { id: 'c1_s10_q29', text: 'Backward compatibility giữa các service.', index: 29 },
            { id: 'c1_s10_q30', text: 'Làm sao debug production issue trong hệ microservices?', index: 30 },
          ]
        },
        {
          id: 'c1_s11', title: '11. Kafka / Messaging', category: 'kafka',
          tags: ['kafka', 'messaging', 'event-driven'],
          questions: [
            { id: 'c1_s11_q1', text: 'Kafka topic, partition, offset là gì?', index: 1 },
            { id: 'c1_s11_q2', text: 'Consumer group hoạt động thế nào?', index: 2 },
            { id: 'c1_s11_q3', text: 'Partition ảnh hưởng gì đến ordering?', index: 3 },
            { id: 'c1_s11_q4', text: 'Replication factor là gì?', index: 4 },
            { id: 'c1_s11_q5', text: 'Leader và follower replica là gì?', index: 5 },
            { id: 'c1_s11_q6', text: 'Producer acknowledgment acks=0/1/all khác nhau thế nào?', index: 6 },
            { id: 'c1_s11_q7', text: 'At-most-once, at-least-once, exactly-once semantics khác nhau thế nào?', index: 7 },
            { id: 'c1_s11_q8', text: 'Consumer offset commit hoạt động thế nào?', index: 8 },
            { id: 'c1_s11_q9', text: 'Auto commit và manual commit khác nhau thế nào?', index: 9 },
            { id: 'c1_s11_q10', text: 'Rebalancing là gì?', index: 10 },
            { id: 'c1_s11_q11', text: 'Làm sao giảm tác động của rebalancing?', index: 11 },
            { id: 'c1_s11_q12', text: 'Dead letter queue là gì?', index: 12 },
            { id: 'c1_s11_q13', text: 'Poison message là gì?', index: 13 },
            { id: 'c1_s11_q14', text: 'Retry message nên thiết kế ra sao?', index: 14 },
            { id: 'c1_s11_q15', text: 'Schema Registry dùng để làm gì?', index: 15 },
            { id: 'c1_s11_q16', text: 'Avro/Protobuf/JSON khác nhau thế nào?', index: 16 },
            { id: 'c1_s11_q17', text: 'Schema evolution là gì?', index: 17 },
            { id: 'c1_s11_q18', text: 'Compacted topic là gì?', index: 18 },
            { id: 'c1_s11_q19', text: 'Kafka retention hoạt động thế nào?', index: 19 },
            { id: 'c1_s11_q20', text: 'Làm sao đảm bảo idempotency khi consume message?', index: 20 },
            { id: 'c1_s11_q21', text: 'Kafka lag là gì?', index: 21 },
            { id: 'c1_s11_q22', text: 'Cách monitor Kafka consumer.', index: 22 },
            { id: 'c1_s11_q23', text: 'Khi nào Kafka không phù hợp?', index: 23 },
            { id: 'c1_s11_q24', text: 'So sánh Kafka với RabbitMQ.', index: 24 },
            { id: 'c1_s11_q25', text: 'Transactional outbox với Kafka.', index: 25 },
          ]
        },
        {
          id: 'c1_s12', title: '12. Caching', category: 'caching',
          tags: ['cache', 'redis', 'performance'],
          questions: [
            { id: 'c1_s12_q1', text: 'Cache dùng để giải quyết vấn đề gì?', index: 1 },
            { id: 'c1_s12_q2', text: 'Cache-aside pattern là gì?', index: 2 },
            { id: 'c1_s12_q3', text: 'Read-through, write-through, write-behind khác nhau thế nào?', index: 3 },
            { id: 'c1_s12_q4', text: 'Cache invalidation khó ở điểm nào?', index: 4 },
            { id: 'c1_s12_q5', text: 'TTL nên chọn như thế nào?', index: 5 },
            { id: 'c1_s12_q6', text: 'Cache penetration, cache breakdown, cache avalanche là gì?', index: 6 },
            { id: 'c1_s12_q7', text: 'Cách xử lý cache stampede.', index: 7 },
            { id: 'c1_s12_q8', text: 'Local cache và distributed cache khác nhau thế nào?', index: 8 },
            { id: 'c1_s12_q9', text: 'Redis thường dùng cho use case nào?', index: 9 },
            { id: 'c1_s12_q10', text: 'Redis data structures phổ biến.', index: 10 },
            { id: 'c1_s12_q11', text: 'Redis persistence RDB và AOF khác nhau thế nào?', index: 11 },
            { id: 'c1_s12_q12', text: 'Redis eviction policy là gì?', index: 12 },
            { id: 'c1_s12_q13', text: 'Distributed lock bằng Redis có rủi ro gì?', index: 13 },
            { id: 'c1_s12_q14', text: 'Redlock là gì?', index: 14 },
            { id: 'c1_s12_q15', text: 'Cache consistency với database xử lý thế nào?', index: 15 },
            { id: 'c1_s12_q16', text: 'Khi nào không nên cache?', index: 16 },
            { id: 'c1_s12_q17', text: 'Write-heavy system có nên dùng cache không?', index: 17 },
            { id: 'c1_s12_q18', text: 'Làm sao monitor cache hit ratio?', index: 18 },
            { id: 'c1_s12_q19', text: 'CDN và application cache khác nhau thế nào?', index: 19 },
            { id: 'c1_s12_q20', text: 'Thiết kế cache cho API có traffic cao.', index: 20 },
          ]
        },
        {
          id: 'c1_s13', title: '13. Security', category: 'security',
          tags: ['security', 'auth', 'encryption'],
          questions: [
            { id: 'c1_s13_q1', text: 'Authentication và authorization khác nhau thế nào?', index: 1 },
            { id: 'c1_s13_q2', text: 'OAuth2 là gì?', index: 2 },
            { id: 'c1_s13_q3', text: 'OpenID Connect khác OAuth2 thế nào?', index: 3 },
            { id: 'c1_s13_q4', text: 'JWT gồm những phần nào?', index: 4 },
            { id: 'c1_s13_q5', text: 'Access token và refresh token khác nhau thế nào?', index: 5 },
            { id: 'c1_s13_q6', text: 'Token expiration nên thiết kế ra sao?', index: 6 },
            { id: 'c1_s13_q7', text: 'JWT revoke khó ở điểm nào?', index: 7 },
            { id: 'c1_s13_q8', text: 'Session-based auth và token-based auth khác nhau thế nào?', index: 8 },
            { id: 'c1_s13_q9', text: 'CSRF là gì?', index: 9 },
            { id: 'c1_s13_q10', text: 'XSS là gì?', index: 10 },
            { id: 'c1_s13_q11', text: 'SQL injection là gì? Cách phòng tránh?', index: 11 },
            { id: 'c1_s13_q12', text: 'SSRF là gì?', index: 12 },
            { id: 'c1_s13_q13', text: 'CORS là gì?', index: 13 },
            { id: 'c1_s13_q14', text: 'Password nên hash như thế nào?', index: 14 },
            { id: 'c1_s13_q15', text: 'Salt là gì?', index: 15 },
            { id: 'c1_s13_q16', text: 'BCrypt, Argon2 dùng để làm gì?', index: 16 },
            { id: 'c1_s13_q17', text: 'HTTPS/TLS giải quyết vấn đề gì?', index: 17 },
            { id: 'c1_s13_q18', text: 'mTLS là gì?', index: 18 },
            { id: 'c1_s13_q19', text: 'Secret nên quản lý thế nào?', index: 19 },
            { id: 'c1_s13_q20', text: 'Principle of least privilege là gì?', index: 20 },
            { id: 'c1_s13_q21', text: 'Rate limiting giúp chống gì?', index: 21 },
            { id: 'c1_s13_q22', text: 'API key nên lưu và rotate thế nào?', index: 22 },
            { id: 'c1_s13_q23', text: 'Sensitive data trong log cần xử lý ra sao?', index: 23 },
            { id: 'c1_s13_q24', text: 'Security headers phổ biến.', index: 24 },
            { id: 'c1_s13_q25', text: 'Threat modeling là gì?', index: 25 },
          ]
        },
        {
          id: 'c1_s14', title: '14. Testing', category: 'testing',
          tags: ['testing', 'unit-test', 'integration-test', 'tdd'],
          questions: [
            { id: 'c1_s14_q1', text: 'Unit test, integration test, component test, end-to-end test khác nhau thế nào?', index: 1 },
            { id: 'c1_s14_q2', text: 'Test pyramid là gì?', index: 2 },
            { id: 'c1_s14_q3', text: 'Mock, stub, spy, fake khác nhau thế nào?', index: 3 },
            { id: 'c1_s14_q4', text: 'Mockito dùng thế nào?', index: 4 },
            { id: 'c1_s14_q5', text: 'Khi nào không nên mock?', index: 5 },
            { id: 'c1_s14_q6', text: 'Test database nên dùng H2 hay Testcontainers?', index: 6 },
            { id: 'c1_s14_q7', text: 'Testcontainers giải quyết vấn đề gì?', index: 7 },
            { id: 'c1_s14_q8', text: 'Contract testing là gì?', index: 8 },
            { id: 'c1_s14_q9', text: 'Consumer-driven contract test là gì?', index: 9 },
            { id: 'c1_s14_q10', text: 'Spring Boot test annotation phổ biến: @SpringBootTest, @WebMvcTest, @DataJpaTest.', index: 10 },
            { id: 'c1_s14_q11', text: 'Làm sao test transaction logic?', index: 11 },
            { id: 'c1_s14_q12', text: 'Làm sao test async code?', index: 12 },
            { id: 'c1_s14_q13', text: 'Làm sao test Kafka consumer/producer?', index: 13 },
            { id: 'c1_s14_q14', text: 'Code coverage có phản ánh chất lượng test không?', index: 14 },
            { id: 'c1_s14_q15', text: 'Mutation testing là gì?', index: 15 },
            { id: 'c1_s14_q16', text: 'Flaky test là gì? Cách xử lý.', index: 16 },
            { id: 'c1_s14_q17', text: 'Test naming convention nên như thế nào?', index: 17 },
            { id: 'c1_s14_q18', text: 'Given-When-Then là gì?', index: 18 },
            { id: 'c1_s14_q19', text: 'Làm sao test edge cases tốt?', index: 19 },
            { id: 'c1_s14_q20', text: 'Performance test khác load test thế nào?', index: 20 },
          ]
        },
        {
          id: 'c1_s15', title: '15. Observability & Production', category: 'observability',
          tags: ['observability', 'logging', 'metrics', 'tracing'],
          questions: [
            { id: 'c1_s15_q1', text: 'Logging, metrics, tracing khác nhau thế nào?', index: 1 },
            { id: 'c1_s15_q2', text: 'Structured logging là gì?', index: 2 },
            { id: 'c1_s15_q3', text: 'Log level: DEBUG, INFO, WARN, ERROR dùng khi nào?', index: 3 },
            { id: 'c1_s15_q4', text: 'Correlation ID dùng để làm gì?', index: 4 },
            { id: 'c1_s15_q5', text: 'Metrics quan trọng của backend service là gì?', index: 5 },
            { id: 'c1_s15_q6', text: 'RED metrics là gì?', index: 6 },
            { id: 'c1_s15_q7', text: 'USE metrics là gì?', index: 7 },
            { id: 'c1_s15_q8', text: 'Latency percentile p95, p99 có ý nghĩa gì?', index: 8 },
            { id: 'c1_s15_q9', text: 'SLA, SLO, SLI khác nhau thế nào?', index: 9 },
            { id: 'c1_s15_q10', text: 'Alert tốt cần đặc điểm gì?', index: 10 },
            { id: 'c1_s15_q11', text: 'Vì sao không nên alert theo CPU đơn thuần?', index: 11 },
            { id: 'c1_s15_q12', text: 'Distributed tracing giúp debug gì?', index: 12 },
            { id: 'c1_s15_q13', text: 'OpenTelemetry là gì?', index: 13 },
            { id: 'c1_s15_q14', text: 'Health check và readiness/liveness probe khác nhau thế nào?', index: 14 },
            { id: 'c1_s15_q15', text: 'Graceful shutdown cần xử lý gì?', index: 15 },
            { id: 'c1_s15_q16', text: 'Làm sao debug memory leak production?', index: 16 },
            { id: 'c1_s15_q17', text: 'Làm sao debug thread pool exhaustion?', index: 17 },
            { id: 'c1_s15_q18', text: 'Làm sao xử lý database connection pool exhausted?', index: 18 },
            { id: 'c1_s15_q19', text: 'Rollback strategy khi deploy lỗi.', index: 19 },
            { id: 'c1_s15_q20', text: 'Postmortem nên gồm những phần nào?', index: 20 },
          ]
        },
        {
          id: 'c1_s16', title: '16. System Design', category: 'system_design',
          tags: ['system-design', 'architecture', 'scalability'],
          questions: [
            { id: 'c1_s16_q1', text: 'Thiết kế URL shortener.', index: 1 },
            { id: 'c1_s16_q2', text: 'Thiết kế rate limiter.', index: 2 },
            { id: 'c1_s16_q3', text: 'Thiết kế notification system.', index: 3 },
            { id: 'c1_s16_q4', text: 'Thiết kế order management system.', index: 4 },
            { id: 'c1_s16_q5', text: 'Thiết kế payment processing system.', index: 5 },
            { id: 'c1_s16_q6', text: 'Thiết kế inventory management system.', index: 6 },
            { id: 'c1_s16_q7', text: 'Thiết kế booking system.', index: 7 },
            { id: 'c1_s16_q8', text: 'Thiết kế chat/messaging system.', index: 8 },
            { id: 'c1_s16_q9', text: 'Thiết kế news feed.', index: 9 },
            { id: 'c1_s16_q10', text: 'Thiết kế file upload service.', index: 10 },
            { id: 'c1_s16_q11', text: 'Thiết kế search autocomplete.', index: 11 },
            { id: 'c1_s16_q12', text: 'Thiết kế audit log system.', index: 12 },
            { id: 'c1_s16_q13', text: 'Thiết kế distributed scheduler.', index: 13 },
            { id: 'c1_s16_q14', text: 'Thiết kế feature flag system.', index: 14 },
            { id: 'c1_s16_q15', text: 'Thiết kế API gateway.', index: 15 },
            { id: 'c1_s16_q16', text: 'Thiết kế authentication service.', index: 16 },
            { id: 'c1_s16_q17', text: 'Thiết kế wallet/ledger system.', index: 17 },
            { id: 'c1_s16_q18', text: 'Thiết kế coupon/promotion system.', index: 18 },
            { id: 'c1_s16_q19', text: 'Thiết kế event-driven order pipeline.', index: 19 },
            { id: 'c1_s16_q20', text: 'Thiết kế multi-tenant SaaS backend.', index: 20 },
          ]
        },
        {
          id: 'c1_s17', title: '17. Coding / Algorithm', category: 'coding',
          tags: ['algorithm', 'coding', 'data-structures', 'leetcode'],
          questions: [
            { id: 'c1_s17_q1', text: 'Implement LRU cache.', index: 1 },
            { id: 'c1_s17_q2', text: 'Implement rate limiter: fixed window, sliding window, token bucket.', index: 2 },
            { id: 'c1_s17_q3', text: 'Merge intervals.', index: 3 },
            { id: 'c1_s17_q4', text: 'Top K frequent elements.', index: 4 },
            { id: 'c1_s17_q5', text: 'Detect cycle in linked list.', index: 5 },
            { id: 'c1_s17_q6', text: 'Serialize/deserialize binary tree.', index: 6 },
            { id: 'c1_s17_q7', text: 'Find median from data stream.', index: 7 },
            { id: 'c1_s17_q8', text: 'Design thread-safe blocking queue.', index: 8 },
            { id: 'c1_s17_q9', text: 'Implement producer-consumer.', index: 9 },
            { id: 'c1_s17_q10', text: 'Implement retry with exponential backoff.', index: 10 },
            { id: 'c1_s17_q11', text: 'Parse large log file and find top IPs.', index: 11 },
            { id: 'c1_s17_q12', text: 'Deduplicate events with TTL.', index: 12 },
            { id: 'c1_s17_q13', text: 'Implement consistent hashing.', index: 13 },
            { id: 'c1_s17_q14', text: 'Implement simple in-memory cache with TTL.', index: 14 },
            { id: 'c1_s17_q15', text: 'Design bounded priority queue.', index: 15 },
            { id: 'c1_s17_q16', text: 'Validate parentheses.', index: 16 },
            { id: 'c1_s17_q17', text: 'Longest substring without repeating characters.', index: 17 },
            { id: 'c1_s17_q18', text: 'Two sum / three sum.', index: 18 },
            { id: 'c1_s17_q19', text: 'Binary search variations.', index: 19 },
            { id: 'c1_s17_q20', text: 'Implement scheduler that runs tasks at specific time.', index: 20 },
          ]
        },
        {
          id: 'c1_s18', title: '18. Design Patterns & Clean Code', category: 'patterns',
          tags: ['design-patterns', 'solid', 'clean-code', 'ddd'],
          questions: [
            { id: 'c1_s18_q1', text: 'SOLID là gì?', index: 1 },
            { id: 'c1_s18_q2', text: 'Dependency inversion khác dependency injection thế nào?', index: 2 },
            { id: 'c1_s18_q3', text: 'Strategy pattern dùng khi nào?', index: 3 },
            { id: 'c1_s18_q4', text: 'Factory pattern và Abstract Factory khác nhau thế nào?', index: 4 },
            { id: 'c1_s18_q5', text: 'Builder pattern phù hợp khi nào?', index: 5 },
            { id: 'c1_s18_q6', text: 'Singleton có vấn đề gì?', index: 6 },
            { id: 'c1_s18_q7', text: 'Adapter pattern dùng để giải quyết gì?', index: 7 },
            { id: 'c1_s18_q8', text: 'Decorator pattern khác inheritance thế nào?', index: 8 },
            { id: 'c1_s18_q9', text: 'Observer pattern liên quan gì đến event-driven?', index: 9 },
            { id: 'c1_s18_q10', text: 'Template method pattern dùng khi nào?', index: 10 },
            { id: 'c1_s18_q11', text: 'Repository pattern là gì?', index: 11 },
            { id: 'c1_s18_q12', text: 'CQRS là gì?', index: 12 },
            { id: 'c1_s18_q13', text: 'Hexagonal architecture là gì?', index: 13 },
            { id: 'c1_s18_q14', text: 'Clean architecture là gì?', index: 14 },
            { id: 'c1_s18_q15', text: 'Domain-driven design là gì?', index: 15 },
            { id: 'c1_s18_q16', text: 'Entity, Value Object, Aggregate là gì?', index: 16 },
            { id: 'c1_s18_q17', text: 'Bounded context là gì?', index: 17 },
            { id: 'c1_s18_q18', text: 'Anti-corruption layer là gì?', index: 18 },
            { id: 'c1_s18_q19', text: 'Anemic domain model là gì?', index: 19 },
            { id: 'c1_s18_q20', text: 'Làm sao refactor legacy code an toàn?', index: 20 },
          ]
        },
        {
          id: 'c1_s19', title: '19. Behavioral / Seniority', category: 'behavioral',
          tags: ['behavioral', 'leadership', 'soft-skills'],
          questions: [
            { id: 'c1_s19_q1', text: 'Kể về một production incident bạn từng xử lý.', index: 1 },
            { id: 'c1_s19_q2', text: 'Bạn debug một issue khó như thế nào?', index: 2 },
            { id: 'c1_s19_q3', text: 'Bạn từng cải thiện performance hệ thống ra sao?', index: 3 },
            { id: 'c1_s19_q4', text: 'Bạn từng refactor một phần code lớn như thế nào?', index: 4 },
            { id: 'c1_s19_q5', text: 'Khi nào bạn chọn giải pháp đơn giản thay vì giải pháp "đúng chuẩn"?', index: 5 },
            { id: 'c1_s19_q6', text: 'Bạn xử lý disagreement với teammate như thế nào?', index: 6 },
            { id: 'c1_s19_q7', text: 'Bạn review code dựa trên tiêu chí nào?', index: 7 },
            { id: 'c1_s19_q8', text: 'Bạn mentor junior engineer như thế nào?', index: 8 },
            { id: 'c1_s19_q9', text: 'Bạn làm gì khi requirement chưa rõ?', index: 9 },
            { id: 'c1_s19_q10', text: 'Bạn cân bằng tech debt và delivery deadline ra sao?', index: 10 },
            { id: 'c1_s19_q11', text: 'Bạn từng thiết kế hệ thống nào từ đầu?', index: 11 },
            { id: 'c1_s19_q12', text: 'Bạn từng migrate hệ thống lớn chưa?', index: 12 },
            { id: 'c1_s19_q13', text: 'Bạn từng xử lý breaking change giữa các service thế nào?', index: 13 },
            { id: 'c1_s19_q14', text: 'Bạn từng giảm latency/cost/error rate như thế nào?', index: 14 },
            { id: 'c1_s19_q15', text: 'Bạn học công nghệ mới như thế nào?', index: 15 },
            { id: 'c1_s19_q16', text: 'Bạn đánh giá một pull request tốt ra sao?', index: 16 },
            { id: 'c1_s19_q17', text: 'Bạn xử lý conflict trong team thế nào?', index: 17 },
            { id: 'c1_s19_q18', text: 'Khi production lỗi, bạn ưu tiên gì trước?', index: 18 },
            { id: 'c1_s19_q19', text: 'Bạn communicate technical trade-off với non-technical stakeholders thế nào?', index: 19 },
            { id: 'c1_s19_q20', text: 'Vì sao bạn nghĩ mình ở level senior?', index: 20 },
          ]
        },
        {
          id: 'c1_s20', title: '20. Câu hỏi đào sâu', category: 'deep_dive',
          tags: ['deep-dive', 'follow-up', 'trade-off'],
          questions: [
            { id: 'c1_s20_q1', text: 'Vì sao bạn chọn cách đó?', index: 1 },
            { id: 'c1_s20_q2', text: 'Trade-off của giải pháp này là gì?', index: 2 },
            { id: 'c1_s20_q3', text: 'Nếu traffic tăng 10 lần thì sao?', index: 3 },
            { id: 'c1_s20_q4', text: 'Nếu database chậm thì hệ thống phản ứng thế nào?', index: 4 },
            { id: 'c1_s20_q5', text: 'Nếu message bị duplicate thì sao?', index: 5 },
            { id: 'c1_s20_q6', text: 'Nếu service downstream timeout thì sao?', index: 6 },
            { id: 'c1_s20_q7', text: 'Nếu deploy lỗi thì rollback thế nào?', index: 7 },
            { id: 'c1_s20_q8', text: 'Nếu schema thay đổi thì đảm bảo backward compatibility thế nào?', index: 8 },
            { id: 'c1_s20_q9', text: 'Nếu có race condition thì phát hiện và xử lý ra sao?', index: 9 },
            { id: 'c1_s20_q10', text: 'Nếu interviewer yêu cầu tối ưu thêm, bạn sẽ tối ưu ở đâu trước?', index: 10 },
          ]
        },
        // New: Docker & CI/CD
        {
          id: 'c1_s21', title: '21. Docker & CI/CD', category: 'docker_cicd',
          tags: ['docker', 'ci-cd', 'devops', 'containers'],
          questions: [
            { id: 'c1_s21_q1', text: 'Docker image và container khác nhau thế nào?', index: 1 },
            { id: 'c1_s21_q2', text: 'Dockerfile best practices cho Java service?', index: 2 },
            { id: 'c1_s21_q3', text: 'Multi-stage build là gì? Vì sao quan trọng?', index: 3 },
            { id: 'c1_s21_q4', text: 'Docker layer caching hoạt động thế nào?', index: 4 },
            { id: 'c1_s21_q5', text: 'Docker compose dùng khi nào?', index: 5 },
            { id: 'c1_s21_q6', text: 'Container port mapping và networking cơ bản.', index: 6 },
            { id: 'c1_s21_q7', text: 'Volume mount dùng để làm gì?', index: 7 },
            { id: 'c1_s21_q8', text: 'CI/CD pipeline cho Java backend nên gồm những stage nào?', index: 8 },
            { id: 'c1_s21_q9', text: 'Build → Test → Lint → Security scan → Deploy nên tổ chức ra sao?', index: 9 },
            { id: 'c1_s21_q10', text: 'GitOps là gì?', index: 10 },
            { id: 'c1_s21_q11', text: 'Infrastructure as Code là gì?', index: 11 },
            { id: 'c1_s21_q12', text: 'Artifact versioning nên làm thế nào?', index: 12 },
            { id: 'c1_s21_q13', text: 'Database migration trong CI/CD pipeline xử lý ra sao?', index: 13 },
            { id: 'c1_s21_q14', text: 'Làm sao đảm bảo CI/CD pipeline không deploy code lỗi?', index: 14 },
            { id: 'c1_s21_q15', text: 'Làm sao rollback khi CI/CD deploy sai?', index: 15 },
          ]
        },
        // New: NoSQL
        {
          id: 'c1_s22', title: '22. NoSQL', category: 'nosql',
          tags: ['nosql', 'mongodb', 'elasticsearch', 'dynamodb', 'cassandra'],
          questions: [
            { id: 'c1_s22_q1', text: 'SQL và NoSQL khác nhau thế nào?', index: 1 },
            { id: 'c1_s22_q2', text: 'Document database (MongoDB) phù hợp khi nào?', index: 2 },
            { id: 'c1_s22_q3', text: 'Key-value store (Redis, DynamoDB) phù hợp khi nào?', index: 3 },
            { id: 'c1_s22_q4', text: 'Wide-column store (Cassandra) phù hợp khi nào?', index: 4 },
            { id: 'c1_s22_q5', text: 'Elasticsearch phù hợp cho use case nào?', index: 5 },
            { id: 'c1_s22_q6', text: 'CAP theorem là gì?', index: 6 },
            { id: 'c1_s22_q7', text: 'BASE properties là gì?', index: 7 },
            { id: 'c1_s22_q8', text: 'Khi nào chọn NoSQL thay vì SQL?', index: 8 },
            { id: 'c1_s22_q9', text: 'Schema design trong NoSQL khác SQL thế nào?', index: 9 },
            { id: 'c1_s22_q10', text: 'Indexing trong MongoDB/Elasticsearch khác B-tree thế nào?', index: 10 },
          ]
        },
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // THẺ 2 — Production Scenarios
    // ═══════════════════════════════════════════════════════════
    {
      id: 'card_2',
      title: 'Thẻ 2 — Production Scenarios',
      type: 'questions',
      sections: [
        {
          id: 'c2_s1', title: '1. Service chậm / latency tăng cao', category: 'prod_latency',
          tags: ['production', 'latency', 'performance', 'debugging'],
          questions: [
            { id: 'c2_s1_q1', text: 'API bình thường mất 100ms, hôm nay tăng lên 2–5s. Bạn debug thế nào?', index: 1 },
            { id: 'c2_s1_q2', text: 'p50 latency bình thường nhưng p99 tăng rất cao, nguyên nhân có thể là gì?', index: 2 },
            { id: 'c2_s1_q3', text: 'Một endpoint chỉ chậm ở production, local/staging không reproduce được. Bạn xử lý thế nào?', index: 3 },
            { id: 'c2_s1_q4', text: 'Sau khi deploy version mới, latency toàn hệ thống tăng 3 lần. Bạn làm gì đầu tiên?', index: 4 },
            { id: 'c2_s1_q5', text: 'Một API lúc nhanh lúc chậm không ổn định, bạn nghi ngờ những thành phần nào?', index: 5 },
            { id: 'c2_s1_q6', text: 'Nếu database query nhanh nhưng API vẫn chậm, bạn kiểm tra gì tiếp?', index: 6 },
            { id: 'c2_s1_q7', text: 'Nếu downstream service chậm, service của bạn nên phản ứng thế nào?', index: 7 },
            { id: 'c2_s1_q8', text: 'Timeout nên đặt ở client, gateway, service hay database?', index: 8 },
            { id: 'c2_s1_q9', text: 'Retry có thể làm hệ thống chậm hơn như thế nào?', index: 9 },
            { id: 'c2_s1_q10', text: 'Làm sao phân biệt latency do app, DB, network, cache hay downstream?', index: 10 },
          ]
        },
        {
          id: 'c2_s2', title: '2. Service bị lỗi 5xx tăng đột biến', category: 'prod_5xx',
          tags: ['production', 'error', '5xx', 'incident'],
          questions: [
            { id: 'c2_s2_q1', text: 'Error rate tăng từ 0.1% lên 20%, bạn xử lý incident thế nào?', index: 1 },
            { id: 'c2_s2_q2', text: 'Sau deploy, chỉ một số user bị lỗi 500. Bạn điều tra thế nào?', index: 2 },
            { id: 'c2_s2_q3', text: 'API trả về lỗi 500 nhưng log không có stack trace. Bạn làm gì?', index: 3 },
            { id: 'c2_s2_q4', text: 'Một exception xảy ra rất nhiều nhưng không ảnh hưởng user. Có cần xử lý không?', index: 4 },
            { id: 'c2_s2_q5', text: 'Làm sao xác định lỗi đến từ version mới hay dependency bên ngoài?', index: 5 },
            { id: 'c2_s2_q6', text: 'Khi nào nên rollback, khi nào nên hotfix?', index: 6 },
            { id: 'c2_s2_q7', text: 'Nếu rollback không giải quyết được lỗi, bạn kiểm tra gì tiếp?', index: 7 },
            { id: 'c2_s2_q8', text: 'Làm sao thiết kế error handling để dễ debug production?', index: 8 },
            { id: 'c2_s2_q9', text: 'Có nên expose error detail ra client không?', index: 9 },
            { id: 'c2_s2_q10', text: 'Bạn sẽ alert theo số lượng lỗi, tỷ lệ lỗi hay impact business?', index: 10 },
          ]
        },
        {
          id: 'c2_s3', title: '3. Database chậm / quá tải', category: 'prod_db',
          tags: ['production', 'database', 'slow-query', 'connection-pool'],
          questions: [
            { id: 'c2_s3_q1', text: 'Production báo slow query, bạn debug thế nào?', index: 1 },
            { id: 'c2_s3_q2', text: 'Một query chạy nhanh ở staging nhưng chậm ở production. Vì sao?', index: 2 },
            { id: 'c2_s3_q3', text: 'Database CPU tăng 100%, service bắt đầu timeout. Bạn xử lý gì trước?', index: 3 },
            { id: 'c2_s3_q4', text: 'Connection pool bị exhausted. Nguyên nhân có thể là gì?', index: 4 },
            { id: 'c2_s3_q5', text: 'Một release mới gây tăng số lượng query lên rất nhiều. Bạn tìm nguyên nhân thế nào?', index: 5 },
            { id: 'c2_s3_q6', text: 'N+1 query lọt lên production, bạn phát hiện và xử lý ra sao?', index: 6 },
            { id: 'c2_s3_q7', text: 'Index được thêm vào nhưng query vẫn không nhanh hơn. Vì sao?', index: 7 },
            { id: 'c2_s3_q8', text: 'Một migration database làm lock table và ảnh hưởng production. Bạn xử lý thế nào?', index: 8 },
            { id: 'c2_s3_q9', text: 'Làm sao deploy schema change an toàn không downtime?', index: 9 },
            { id: 'c2_s3_q10', text: 'Read replica bị lag gây user thấy dữ liệu cũ. Bạn xử lý thế nào?', index: 10 },
            { id: 'c2_s3_q11', text: 'Transaction giữ lock quá lâu, bạn debug thế nào?', index: 11 },
            { id: 'c2_s3_q12', text: 'Deadlock trong database xảy ra thường xuyên. Bạn tìm và fix ra sao?', index: 12 },
            { id: 'c2_s3_q13', text: 'Một bảng tăng dữ liệu quá nhanh, query ngày càng chậm. Bạn đề xuất gì?', index: 13 },
            { id: 'c2_s3_q14', text: 'Khi nào nên partition, archive hoặc denormalize dữ liệu?', index: 14 },
            { id: 'c2_s3_q15', text: 'Làm sao tránh full table scan trong API có traffic cao?', index: 15 },
          ]
        },
        {
          id: 'c2_s4', title: '4. Memory leak / OOM', category: 'prod_memory',
          tags: ['production', 'memory', 'oom', 'gc', 'leak'],
          questions: Array.from({length: 12}, (_, i) => ({
            id: `c2_s4_q${i+1}`, index: i+1,
            text: [
              'Java service bị OutOfMemoryError, bạn xử lý thế nào?',
              'Heap usage tăng dần theo thời gian và không giảm sau GC. Bạn nghi ngờ gì?',
              'Memory tăng sau một deploy mới, bạn điều tra ra sao?',
              'Làm sao dùng heap dump để tìm memory leak?',
              'Cache local gây memory leak như thế nào?',
              'ThreadLocal có thể gây memory leak trong thread pool ra sao?',
              'List/Map static có thể gây leak như thế nào?',
              'Service bị OOM nhưng traffic không tăng. Nguyên nhân có thể là gì?',
              'GC chạy liên tục nhưng không giải phóng được nhiều memory. Bạn làm gì?',
              'Làm sao thiết kế cache có TTL, size limit và eviction?',
              'OOM nên auto restart service không?',
              'Cần log/metric gì để phát hiện memory leak sớm?',
            ][i]
          }))
        },
        {
          id: 'c2_s5', title: '5. CPU cao bất thường', category: 'prod_cpu',
          tags: ['production', 'cpu', 'performance', 'debugging'],
          questions: Array.from({length: 10}, (_, i) => ({
            id: `c2_s5_q${i+1}`, index: i+1,
            text: [
              'Java service CPU tăng 100%, bạn debug thế nào?',
              'Thread nào đang ăn CPU nhiều nhất thì tìm bằng cách nào?',
              'Infinite loop lọt production thì dấu hiệu là gì?',
              'Regex có thể gây CPU spike như thế nào?',
              'JSON serialization/deserialization có thể gây CPU cao không?',
              'GC có thể làm CPU cao như thế nào?',
              'Traffic không tăng nhưng CPU tăng, bạn kiểm tra gì?',
              'Một batch job làm ảnh hưởng API realtime. Bạn xử lý thế nào?',
              'Có nên scale out ngay khi CPU cao không?',
              'Làm sao phân biệt CPU cao do business logic, GC, logging hay encryption?',
            ][i]
          }))
        },
        {
          id: 'c2_s6', title: '6. Thread pool / concurrency issue', category: 'prod_thread',
          tags: ['production', 'thread', 'concurrency', 'deadlock'],
          questions: Array.from({length: 12}, (_, i) => ({
            id: `c2_s6_q${i+1}`, index: i+1,
            text: [
              'Thread pool bị exhausted, triệu chứng là gì?',
              'Request bị treo nhưng CPU thấp. Bạn nghi ngờ gì?',
              'Deadlock trong Java service phát hiện thế nào?',
              'Thread dump cho thấy nhiều thread ở trạng thái WAITING. Bạn phân tích ra sao?',
              'Thread pool queue tăng liên tục. Nguyên nhân có thể là gì?',
              'Task async bị mất exception. Bạn xử lý thế nào?',
              'CompletableFuture dùng sai có thể gây issue gì?',
              'Một shared object không thread-safe gây data corruption. Bạn debug thế nào?',
              'Race condition chỉ xảy ra vài lần mỗi ngày. Bạn xử lý thế nào?',
              'synchronized quá rộng gây giảm throughput như thế nào?',
              'Khi nào nên tách thread pool cho các loại workload khác nhau?',
              'Làm sao chọn size thread pool phù hợp?',
            ][i]
          }))
        },
        {
          id: 'c2_s7', title: '7. Kafka / MQ incident', category: 'prod_kafka',
          tags: ['production', 'kafka', 'messaging', 'consumer-lag'],
          questions: Array.from({length: 15}, (_, i) => ({
            id: `c2_s7_q${i+1}`, index: i+1,
            text: [
              'Kafka consumer lag tăng liên tục. Bạn debug thế nào?',
              'Consumer không consume message mới dù topic vẫn có data. Vì sao?',
              'Một message bị consume nhiều lần, hệ thống cần xử lý thế nào?',
              'Duplicate order được tạo do duplicate message. Bạn fix ra sao?',
              'Message sai format làm consumer crash liên tục. Bạn xử lý thế nào?',
              'Poison message là gì? Cách xử lý trong production?',
              'Khi nào đưa message vào DLQ?',
              'Retry message nên immediate retry hay delayed retry?',
              'Consumer rebalance liên tục. Nguyên nhân có thể là gì?',
              'Một partition bị lag nhiều hơn các partition khác. Vì sao?',
              'Ordering bị sai trong hệ thống event-driven. Bạn kiểm tra gì?',
              'Producer gửi message thành công nhưng consumer không thấy. Bạn điều tra thế nào?',
              'Schema thay đổi làm consumer cũ bị lỗi. Cách phòng tránh?',
              'Làm sao đảm bảo idempotency cho Kafka consumer?',
              'Nếu Kafka broker unavailable, service producer nên làm gì?',
            ][i]
          }))
        },
        {
          id: 'c2_s8', title: '8. Cache / Redis incident', category: 'prod_cache',
          tags: ['production', 'cache', 'redis', 'consistency'],
          questions: Array.from({length: 15}, (_, i) => ({
            id: `c2_s8_q${i+1}`, index: i+1,
            text: [
              'Redis down, service của bạn có tiếp tục hoạt động không?',
              'Cache miss tăng đột biến, nguyên nhân có thể là gì?',
              'Cache hit ratio giảm mạnh sau deploy. Bạn debug thế nào?',
              'Cache stampede xảy ra khi nào? Cách xử lý?',
              'Cache avalanche là gì?',
              'Cache penetration là gì?',
              'Dữ liệu trong cache cũ hơn database, bạn xử lý thế nào?',
              'User thấy data cũ sau khi update. Có thể do cache ở đâu?',
              'Redis memory đầy, eviction bắt đầu xảy ra. Bạn làm gì?',
              'Key không có TTL gây hậu quả gì?',
              'Distributed lock bằng Redis bị lỗi có thể gây vấn đề gì?',
              'Cache local trên nhiều instance gây inconsistency như thế nào?',
              'Khi nào nên bypass cache?',
              'Làm sao thiết kế fallback khi Redis chậm?',
              'Có nên retry Redis call không?',
            ][i]
          }))
        },
        {
          id: 'c2_s9', title: '9. Distributed systems incident', category: 'prod_distributed',
          tags: ['production', 'distributed', 'circuit-breaker', 'saga'],
          questions: Array.from({length: 15}, (_, i) => ({
            id: `c2_s9_q${i+1}`, index: i+1,
            text: [
              'Một downstream service timeout liên tục. Service của bạn nên xử lý thế nào?',
              'Circuit breaker mở liên tục. Bạn điều tra gì?',
              'Retry storm là gì?',
              'Một request đi qua 5 service, lỗi xảy ra ở service thứ 4. Bạn trace thế nào?',
              'Correlation ID bị mất giữa các service. Hậu quả là gì?',
              'Service A ghi DB thành công nhưng gửi event thất bại. Bạn xử lý thế nào?',
              'Outbox pattern giải quyết vấn đề gì trong production?',
              'Saga đang chạy dở thì một step fail. Bạn làm gì?',
              'Compensation action thất bại thì xử lý thế nào?',
              'Eventual consistency làm user thấy dữ liệu chưa cập nhật. Bạn giải thích và xử lý ra sao?',
              'Một service deploy version mới phá contract với service khác. Làm sao tránh?',
              'API backward compatibility trong microservices quan trọng thế nào?',
              'Service discovery trả về instance lỗi. Bạn xử lý thế nào?',
              'Load balancer vẫn route traffic vào instance unhealthy. Vì sao?',
              'Một service bị dependency cycle với service khác. Hậu quả là gì?',
            ][i]
          }))
        },
        {
          id: 'c2_s10', title: '10. Deployment / release incident', category: 'prod_deploy',
          tags: ['production', 'deployment', 'rollback', 'release'],
          questions: Array.from({length: 15}, (_, i) => ({
            id: `c2_s10_q${i+1}`, index: i+1,
            text: [
              'Sau deploy, error rate tăng. Quy trình xử lý của bạn là gì?',
              'Canary deployment phát hiện lỗi ở 5% traffic. Bạn làm gì?',
              'Blue-green deployment có thể fail ở điểm nào?',
              'Rollback code nhưng database schema đã migrate. Bạn xử lý thế nào?',
              'Feature flag giúp giảm rủi ro production như thế nào?',
              'Deploy thành công nhưng app không nhận config mới. Vì sao?',
              'Một config sai làm toàn bộ service không start được. Làm sao phòng tránh?',
              'Secret hết hạn sau deploy. Bạn xử lý thế nào?',
              'Dependency version mới gây lỗi runtime. Bạn debug thế nào?',
              'Làm sao thiết kế deployment không downtime?',
              'Liveness/readiness probe cấu hình sai gây restart loop. Bạn xử lý thế nào?',
              'Graceful shutdown không hoạt động làm mất request. Bạn fix ra sao?',
              'Khi nào nên freeze deployment?',
              'Làm sao rollback an toàn khi có message/event đã phát ra?',
              'Smoke test sau deploy nên kiểm tra gì?',
            ][i]
          }))
        },
        {
          id: 'c2_s11', title: '11. Data inconsistency', category: 'prod_data',
          tags: ['production', 'data', 'consistency', 'race-condition'],
          questions: Array.from({length: 15}, (_, i) => ({
            id: `c2_s11_q${i+1}`, index: i+1,
            text: [
              'User báo số dư/order/status hiển thị sai. Bạn điều tra thế nào?',
              'Dữ liệu trong DB đúng nhưng API trả sai. Nguyên nhân có thể là gì?',
              'Dữ liệu trong cache sai nhưng DB đúng. Bạn xử lý thế nào?',
              'Một job batch update nhầm dữ liệu production. Bạn làm gì?',
              'Có duplicate record trong bảng đáng lẽ unique. Vì sao?',
              'Transaction thiếu isolation gây sai dữ liệu như thế nào?',
              'Race condition tạo double booking. Bạn fix thế nào?',
              'Payment thành công nhưng order vẫn pending. Bạn xử lý ra sao?',
              'Event xử lý out-of-order làm trạng thái sai. Cách phòng tránh?',
              'Làm sao reconcile dữ liệu giữa nhiều system?',
              'Backfill dữ liệu production cần lưu ý gì?',
              'Làm sao thiết kế audit log để điều tra sai dữ liệu?',
              'Có nên sửa dữ liệu trực tiếp bằng SQL production không?',
              'Quy trình manual data correction an toàn nên như thế nào?',
              'Làm sao đảm bảo idempotency khi tạo transaction/order/payment?',
            ][i]
          }))
        },
        {
          id: 'c2_s12', title: '12. Authentication / security incident', category: 'prod_security',
          tags: ['production', 'security', 'auth', 'incident'],
          questions: Array.from({length: 15}, (_, i) => ({
            id: `c2_s12_q${i+1}`, index: i+1,
            text: [
              'User không login được sau deploy. Bạn debug thế nào?',
              'JWT hết hạn sớm hơn dự kiến. Nguyên nhân có thể là gì?',
              'Clock skew giữa server gây lỗi token. Bạn xử lý ra sao?',
              'Refresh token bị reuse. Có rủi ro gì?',
              'API bị brute force login. Bạn làm gì?',
              'Một endpoint thiếu authorization check. Bạn xử lý incident thế nào?',
              'User A thấy dữ liệu của User B. Bạn điều tra và khắc phục ra sao?',
              'Sensitive data bị log ra production. Bạn làm gì?',
              'API key bị leak. Quy trình rotate như thế nào?',
              'CORS config sai gây lỗi frontend. Bạn debug ra sao?',
              'CSRF/XSS/SQL injection phát hiện ở production. Bạn xử lý gì trước?',
              'Password hashing config yếu, bạn migrate thế nào?',
              'Rate limit bị bypass. Nguyên nhân có thể là gì?',
              'Permission cache stale làm user vẫn có quyền sau khi bị revoke. Xử lý thế nào?',
              'Làm sao audit access tới dữ liệu nhạy cảm?',
            ][i]
          }))
        },
        {
          id: 'c2_s13', title: '13. Observability / alerting issue', category: 'prod_observability',
          tags: ['production', 'observability', 'alerting', 'monitoring'],
          questions: Array.from({length: 15}, (_, i) => ({
            id: `c2_s13_q${i+1}`, index: i+1,
            text: [
              'Service lỗi nhưng không có alert. Bạn cải thiện thế nào?',
              'Alert quá nhiều gây alert fatigue. Bạn xử lý ra sao?',
              'Dashboard xanh nhưng user vẫn báo lỗi. Vì sao?',
              'Log quá nhiều làm tăng cost và khó debug. Bạn làm gì?',
              'Không có correlation ID nên không trace được request. Bạn cải thiện thế nào?',
              'Metric p95 tốt nhưng p99 rất xấu. Có đáng lo không?',
              'Health check OK nhưng business flow fail. Vì sao?',
              'Bạn chọn SLI/SLO cho backend service như thế nào?',
              'Alert nên dựa trên technical metrics hay business metrics?',
              'Làm sao phát hiện lỗi âm thầm trong async processing?',
              'Một job fail nhưng không ai biết. Bạn thêm monitoring gì?',
              'Log bị thiếu field quan trọng để debug. Bạn chuẩn hóa ra sao?',
              'Distributed tracing sampling quá thấp nên không thấy lỗi. Bạn xử lý thế nào?',
              'Làm sao monitor dependency như DB, Redis, Kafka, external API?',
              'Postmortem tốt cần trả lời những câu hỏi nào?',
            ][i]
          }))
        },
        {
          id: 'c2_s14', title: '14. External API / third-party', category: 'prod_external',
          tags: ['production', 'external-api', 'third-party', 'payment'],
          questions: Array.from({length: 15}, (_, i) => ({
            id: `c2_s14_q${i+1}`, index: i+1,
            text: [
              'Payment gateway timeout nhưng sau đó vẫn charge tiền. Bạn xử lý thế nào?',
              'External API trả response chậm bất thường. Service của bạn nên làm gì?',
              'External API trả lỗi 429 rate limit. Bạn xử lý ra sao?',
              'API provider thay đổi contract không báo trước. Bạn phòng tránh thế nào?',
              'Webhook từ third-party gửi duplicate event. Bạn xử lý thế nào?',
              'Webhook đến trễ hoặc out-of-order. Bạn thiết kế ra sao?',
              'Chữ ký webhook verify fail hàng loạt. Bạn debug thế nào?',
              'External API downtime, có nên fallback không?',
              'Làm sao thiết kế retry cho API thanh toán?',
              'Idempotency key trong payment dùng để làm gì?',
              'Timeout xảy ra sau khi gửi request tạo giao dịch. Làm sao biết giao dịch thành công hay thất bại?',
              'Circuit breaker với external API nên cấu hình thế nào?',
              'Làm sao giới hạn blast radius khi third-party lỗi?',
              'Có nên cache response từ external API không?',
              'Làm sao reconcile dữ liệu với external provider?',
            ][i]
          }))
        },
        {
          id: 'c2_s15', title: '15. File upload / storage', category: 'prod_file',
          tags: ['production', 'file-upload', 'storage', 's3'],
          questions: Array.from({length: 10}, (_, i) => ({
            id: `c2_s15_q${i+1}`, index: i+1,
            text: [
              'User upload file lớn làm service timeout. Bạn xử lý thế nào?',
              'Upload thành công nhưng file không đọc được. Nguyên nhân có thể là gì?',
              'Object storage chậm hoặc lỗi. Service nên fallback thế nào?',
              'Virus scan file upload nên đặt ở đâu trong flow?',
              'Upload nhiều file cùng lúc làm đầy disk tạm. Bạn xử lý ra sao?',
              'File metadata ghi DB thành công nhưng upload file thất bại. Làm sao đảm bảo consistency?',
              'Signed URL hết hạn quá sớm/quá muộn gây vấn đề gì?',
              'File private bị public access. Bạn xử lý incident thế nào?',
              'Cleanup file orphan như thế nào?',
              'Làm sao thiết kế upload không đi qua backend app quá nhiều?',
            ][i]
          }))
        },
        {
          id: 'c2_s16', title: '16. Batch job / scheduler', category: 'prod_batch',
          tags: ['production', 'batch', 'scheduler', 'cron'],
          questions: Array.from({length: 15}, (_, i) => ({
            id: `c2_s16_q${i+1}`, index: i+1,
            text: [
              'Cron job chạy trùng trên nhiều instance. Bạn xử lý thế nào?',
              'Batch job chạy quá lâu ảnh hưởng database production. Bạn làm gì?',
              'Job fail giữa chừng, chạy lại có an toàn không?',
              'Làm sao thiết kế batch job idempotent?',
              'Một job bị miss schedule. Bạn phát hiện và xử lý ra sao?',
              'Job retry liên tục gây quá tải hệ thống. Bạn xử lý thế nào?',
              'Job xử lý dữ liệu theo ngày nhưng timezone sai. Hậu quả là gì?',
              'Backfill hàng triệu records cần lưu ý gì?',
              'Làm sao chia batch size phù hợp?',
              'Khi nào nên dùng distributed scheduler?',
              'Lock cho scheduled job nên thiết kế thế nào?',
              'Job cần chạy đúng một lần có thực tế không?',
              'Làm sao monitor progress của batch job?',
              'Làm sao pause/resume một job đang chạy?',
              'Làm sao rollback kết quả của batch job sai?',
            ][i]
          }))
        },
        {
          id: 'c2_s17', title: '17. Timezone / date-time', category: 'prod_timezone',
          tags: ['production', 'timezone', 'datetime'],
          questions: Array.from({length: 10}, (_, i) => ({
            id: `c2_s17_q${i+1}`, index: i+1,
            text: [
              'User ở nhiều timezone thấy ngày giờ sai. Bạn debug thế nào?',
              'Server dùng UTC nhưng business dùng local timezone. Thiết kế thế nào?',
              'Daylight Saving Time có thể gây bug gì?',
              'Cron chạy sai giờ sau khi đổi timezone. Vì sao?',
              'Token expiration sai do clock lệch. Bạn xử lý ra sao?',
              'Event xảy ra lúc cuối ngày bị tính sang ngày khác. Nguyên nhân?',
              'Report theo ngày bị lệch dữ liệu. Bạn kiểm tra gì?',
              'Nên lưu LocalDateTime, OffsetDateTime, Instant thế nào?',
              'Database timezone khác application timezone gây lỗi gì?',
              'Làm sao test logic liên quan thời gian?',
            ][i]
          }))
        },
        {
          id: 'c2_s18', title: '18. Logging issue', category: 'prod_logging',
          tags: ['production', 'logging', 'pii', 'structured-log'],
          questions: Array.from({length: 10}, (_, i) => ({
            id: `c2_s18_q${i+1}`, index: i+1,
            text: [
              'Log chứa PII hoặc secret. Bạn xử lý thế nào?',
              'Log volume tăng đột biến sau deploy. Hậu quả là gì?',
              'Log thiếu request ID nên khó trace. Bạn cải thiện ra sao?',
              'Stack trace bị swallow, không thấy root cause. Bạn xử lý thế nào?',
              'Log async bị mất khi service shutdown. Vì sao?',
              'Log ở level ERROR quá nhiều nhưng không actionable. Bạn làm gì?',
              'Một exception được log nhiều lần ở nhiều layer. Có vấn đề gì?',
              'Logging request/response body có rủi ro gì?',
              'Làm sao mask sensitive fields trong log?',
              'Structured logging nên gồm những field nào?',
            ][i]
          }))
        },
        {
          id: 'c2_s19', title: '19. Performance degradation', category: 'prod_perf_degradation',
          tags: ['production', 'performance', 'degradation', 'leak'],
          questions: Array.from({length: 10}, (_, i) => ({
            id: `c2_s19_q${i+1}`, index: i+1,
            text: [
              'Service chạy vài ngày thì chậm dần. Bạn nghi ngờ gì?',
              'Memory tăng dần nhưng chưa OOM. Bạn xử lý thế nào?',
              'Thread count tăng dần theo thời gian. Nguyên nhân có thể là gì?',
              'DB connection không được release gây hậu quả gì?',
              'HTTP client connection leak là gì?',
              'Cache ngày càng lớn do key không expire. Bạn phát hiện thế nào?',
              'Scheduler tạo task mới nhưng không cleanup task cũ. Hậu quả?',
              'Metrics cardinality quá cao làm monitoring chậm. Vì sao?',
              'Log file/disk đầy làm service lỗi như thế nào?',
              'Temporary file không cleanup gây disk full. Bạn xử lý ra sao?',
            ][i]
          }))
        },
        {
          id: 'c2_s20', title: '20. Kubernetes / container', category: 'prod_k8s',
          tags: ['production', 'kubernetes', 'k8s', 'container', 'docker'],
          questions: Array.from({length: 15}, (_, i) => ({
            id: `c2_s20_q${i+1}`, index: i+1,
            text: [
              'Pod restart liên tục. Bạn debug thế nào?',
              'Pod bị OOMKilled. Khác gì Java OutOfMemoryError?',
              'Readiness probe fail làm service không nhận traffic. Bạn kiểm tra gì?',
              'Liveness probe quá aggressive gây restart không cần thiết. Hậu quả?',
              'CPU limit quá thấp ảnh hưởng Java service như thế nào?',
              'Memory limit thấp hơn JVM heap setting gây vấn đề gì?',
              'Rolling update làm mất request đang xử lý. Cách phòng tránh?',
              'Pod schedule không đều gây hot spot. Bạn xử lý thế nào?',
              'ConfigMap/Secret update nhưng app không nhận. Vì sao?',
              'Service DNS trong cluster lỗi gây connection fail. Bạn debug ra sao?',
              'Horizontal Pod Autoscaler scale chậm. Bạn xử lý thế nào?',
              'Startup time Java service quá lâu ảnh hưởng deployment. Bạn tối ưu gì?',
              'Container clock/timezone khác expectation gây bug gì?',
              'Resource request/limit nên đặt thế nào?',
              'Làm sao capture heap dump/thread dump trong container?',
            ][i]
          }))
        },
        {
          id: 'c2_s21', title: '21. Production incident leadership', category: 'prod_leadership',
          tags: ['production', 'leadership', 'incident-management'],
          questions: Array.from({length: 15}, (_, i) => ({
            id: `c2_s21_q${i+1}`, index: i+1,
            text: [
              'Khi incident xảy ra, senior engineer nên làm gì trong 5 phút đầu?',
              'Làm sao phân công người điều tra, người communicate, người fix?',
              'Khi chưa rõ nguyên nhân, bạn có nên rollback không?',
              'Làm sao communicate incident với stakeholder?',
              'Khi có nhiều giả thuyết root cause, bạn ưu tiên kiểm chứng cái nào?',
              'Làm sao tránh nhiều người cùng thay đổi production trong lúc incident?',
              'Khi fix tạm khác fix chuẩn, bạn ra quyết định thế nào?',
              'Sau incident, follow-up action nên gồm những gì?',
              'Postmortem blameless nghĩa là gì?',
              'Làm sao đo incident impact?',
              'Khi alert xảy ra ngoài giờ, bạn xử lý escalation thế nào?',
              'Khi incident do lỗi của bạn, bạn communicate ra sao?',
              'Khi áp lực từ business yêu cầu fix nhanh, bạn cân bằng rủi ro thế nào?',
              'Khi rollback gây mất một số feature mới, bạn quyết định thế nào?',
              'Làm sao biến incident thành improvement lâu dài?',
            ][i]
          }))
        },
        {
          id: 'c2_s22', title: '22. Case study', category: 'prod_case_study',
          tags: ['production', 'case-study', 'real-world'],
          questions: Array.from({length: 15}, (_, i) => ({
            id: `c2_s22_q${i+1}`, index: i+1,
            text: [
              'Order bị tạo 2 lần: nguyên nhân có thể là gì, fix ngắn hạn/dài hạn ra sao?',
              'Payment bị charge tiền nhưng order fail: thiết kế reconciliation thế nào?',
              'User không nhận được notification: trace từ API đến queue đến worker ra sao?',
              'Kafka lag tăng sau deploy: bạn rollback hay scale consumer?',
              'DB connection pool full: app leak connection hay DB chậm?',
              'Cache trả dữ liệu cũ: invalidate sai hay read replica lag?',
              'CPU spike mỗi ngày lúc 0h: batch job, cron, report hay cache expire cùng lúc?',
              'Memory tăng sau mỗi lần gọi API export: stream file sai hay giữ object lớn?',
              'API timeout nhưng backend vẫn xử lý thành công: client retry gây duplicate không?',
              'Một region bị lỗi, region khác bình thường: config, data, network hay dependency?',
              'Một nhóm user bị lỗi, nhóm khác không: feature flag, permission, data shape hay tenant config?',
              'Search result thiếu dữ liệu: index async lag hay pipeline fail?',
              'Report sai số liệu hôm qua: timezone, late event hay duplicate event?',
              'Deploy mới làm consumer xử lý lại toàn bộ message cũ: offset commit sai?',
              'Service restart liên tục nhưng log không rõ lỗi: startup probe, memory limit, config hay secret?',
            ][i]
          }))
        },
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // THẺ 3 — Study Strategy (Guides)
    // ═══════════════════════════════════════════════════════════
    {
      id: 'card_3',
      title: 'Thẻ 3 — Chiến lược ôn tập',
      type: 'guide',
      sections: [
        { id: 'c3_s1', title: '1. Story bank kinh nghiệm thật', category: 'guide_story', tags: ['guide', 'story', 'star'], questions: [
          { id: 'c3_s1_q1', text: 'Chuẩn bị 8-12 câu chuyện thực tế theo format: Context → Problem → Constraints → Options → Decision → Result → Lesson learned', index: 1 },
        ]},
        { id: 'c3_s2', title: '2. Deep dive approach', category: 'guide_deepdive', tags: ['guide', 'deep-dive'], questions: [
          { id: 'c3_s2_q1', text: 'Ôn theo "deep dive": không chỉ học định nghĩa, mà tự trả lời được các câu hỏi theo chuỗi về Kafka, Spring Transaction, JPA, Redis, database index, thread pool, retry, timeout, circuit breaker.', index: 1 },
        ]},
        { id: 'c3_s3', title: '3. System design theo domain', category: 'guide_sysdesign', tags: ['guide', 'system-design'], questions: [
          { id: 'c3_s3_q1', text: 'Chuẩn bị system design theo domain gần công ty phỏng vấn (fintech, e-commerce, SaaS).', index: 1 },
        ]},
        { id: 'c3_s4', title: '4. Production issue runbook', category: 'guide_runbook', tags: ['guide', 'production', 'runbook'], questions: [
          { id: 'c3_s4_q1', text: 'Tập trả lời production issue theo runbook: Impact → Stabilize → Evidence → Isolate → Fix → Prevent.', index: 1 },
        ]},
        { id: 'c3_s5', title: '5. Review project cũ', category: 'guide_review', tags: ['guide', 'project-review'], questions: [
          { id: 'c3_s5_q1', text: 'Review lại 2-3 project cũ: architecture, bottleneck, database schema, transaction boundary, cache, async flow, monitoring.', index: 1 },
        ]},
        { id: 'c3_s6', title: '6. Coding practice', category: 'guide_coding', tags: ['guide', 'coding'], questions: [
          { id: 'c3_s6_q1', text: 'Luyện code sát backend: LRU cache, rate limiter, thread-safe queue, retry backoff, dedup TTL, consistent hashing.', index: 1 },
        ]},
        { id: 'c3_s7', title: '7. Java version hiện đại', category: 'guide_java', tags: ['guide', 'java'], questions: [
          { id: 'c3_s7_q1', text: 'Ôn Java 11/17/21: records, sealed classes, pattern matching, virtual threads, ZGC, container-aware JVM.', index: 1 },
        ]},
        { id: 'c3_s8', title: '8. Câu hỏi ngược interviewer', category: 'guide_reverse', tags: ['guide', 'interview'], questions: [
          { id: 'c3_s8_q1', text: 'Chuẩn bị 10 câu hỏi ngược cho interviewer thể hiện tư duy ownership.', index: 1 },
        ]},
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // THẺ 4 — Senior Mindset
    // ═══════════════════════════════════════════════════════════
    {
      id: 'card_4',
      title: 'Thẻ 4 — Senior Mindset',
      type: 'guide',
      sections: [
        { id: 'c4_s1', title: '1. Career narrative', category: 'mindset_career', tags: ['mindset', 'career'], questions: [
          { id: 'c4_s1_q1', text: 'Chuẩn bị career narrative: domain, ownership, scale, reliability, tìm role vì impact gì.', index: 1 },
        ]},
        { id: 'c4_s2', title: '2. CV walkthrough', category: 'mindset_cv', tags: ['mindset', 'cv'], questions: [
          { id: 'c4_s2_q1', text: 'Chuẩn bị walkthrough cho từng project: scale, team size, trách nhiệm, khó khăn, kết quả.', index: 1 },
        ]},
        { id: 'c4_s3', title: '3. Architecture diagrams', category: 'mindset_arch', tags: ['mindset', 'architecture'], questions: [
          { id: 'c4_s3_q1', text: 'Vẽ lại architecture 2-3 project cũ để sẵn sàng trình bày.', index: 1 },
        ]},
        { id: 'c4_s4', title: '4. Decision bank', category: 'mindset_decision', tags: ['mindset', 'decision', 'trade-off'], questions: [
          { id: 'c4_s4_q1', text: 'Chuẩn bị 10 quyết định kỹ thuật từng gặp: options, trade-off, constraint, monitor.', index: 1 },
        ]},
        { id: 'c4_s5', title: '5. Failure thinking', category: 'mindset_failure', tags: ['mindset', 'failure'], questions: [
          { id: 'c4_s5_q1', text: 'Luôn tự hỏi "nếu X fail thì sao?" khi trình bày thiết kế.', index: 1 },
        ]},
        { id: 'c4_s6', title: '6. Leadership stories', category: 'mindset_leadership', tags: ['mindset', 'leadership'], questions: [
          { id: 'c4_s6_q1', text: 'Chuẩn bị câu chuyện leadership: mentor, code review, technical design, conflict, incident priority.', index: 1 },
        ]},
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // THẺ 5 — AI / GenAI
    // ═══════════════════════════════════════════════════════════
    {
      id: 'card_5',
      title: 'Thẻ 5 — AI / GenAI',
      type: 'questions',
      sections: [
        {
          id: 'c5_s1', title: '1. AI Fundamentals', category: 'ai_fundamentals',
          tags: ['ai', 'llm', 'genai', 'fundamentals'],
          questions: Array.from({length: 15}, (_, i) => ({
            id: `c5_s1_q${i+1}`, index: i+1,
            text: [
              'Generative AI khác gì với traditional ML?',
              'LLM là gì? Transformer là gì ở mức high-level?',
              'Token là gì? Vì sao token ảnh hưởng tới cost và latency?',
              'Context window là gì? Context window lớn có giải quyết được mọi vấn đề không?',
              'Temperature, top-p, max tokens ảnh hưởng response như thế nào?',
              'Hallucination là gì? Có thể loại bỏ hoàn toàn không?',
              'Embedding là gì? Dùng để làm gì?',
              'Vector database là gì?',
              'Semantic search khác keyword search thế nào?',
              'Prompt engineering là gì?',
              'System prompt, user prompt, tool prompt khác nhau thế nào?',
              'Fine-tuning khác prompt engineering thế nào?',
              'Fine-tuning khác RAG thế nào?',
              'Khi nào nên dùng LLM API thay vì tự host model?',
              'Khi nào không nên dùng AI cho một feature?',
            ][i]
          }))
        },
        {
          id: 'c5_s2', title: '2. LLM Integration', category: 'ai_integration',
          tags: ['ai', 'llm', 'backend', 'integration'],
          questions: Array.from({length: 15}, (_, i) => ({
            id: `c5_s2_q${i+1}`, index: i+1,
            text: [
              'Thiết kế backend service gọi LLM API như thế nào?',
              'Nên gọi LLM trực tiếp từ frontend hay qua backend?',
              'Làm sao quản lý API key của LLM provider?',
              'Timeout khi gọi LLM nên đặt như thế nào?',
              'Retry LLM request có rủi ro gì?',
              'Làm sao xử lý response streaming từ LLM?',
              'Làm sao cancel một request LLM đang chạy?',
              'Làm sao giới hạn user không spam AI endpoint?',
              'Làm sao log request/response AI mà không lộ dữ liệu nhạy cảm?',
              'Làm sao trace một request đi qua API Gateway → backend → LLM provider?',
              'Nếu LLM provider down, hệ thống fallback thế nào?',
              'Làm sao support nhiều model/provider cùng lúc?',
              'Làm sao thiết kế abstraction layer để đổi model dễ hơn?',
              'Làm sao cache kết quả từ LLM? Khi nào không nên cache?',
              'Làm sao version prompt trong production?',
            ][i]
          }))
        },
        {
          id: 'c5_s3', title: '3. RAG', category: 'ai_rag',
          tags: ['ai', 'rag', 'retrieval', 'vector-db'],
          questions: Array.from({length: 20}, (_, i) => ({
            id: `c5_s3_q${i+1}`, index: i+1,
            text: [
              'RAG là gì? Giải quyết vấn đề gì?',
              'Flow RAG cơ bản gồm những bước nào?',
              'Document ingestion pipeline nên thiết kế thế nào?',
              'Chunking là gì? Vì sao chunk size quan trọng?',
              'Overlap giữa các chunk dùng để làm gì?',
              'Embedding model ảnh hưởng chất lượng retrieval thế nào?',
              'Vector search hoạt động ở mức khái niệm ra sao?',
              'Hybrid search là gì? Khi nào kết hợp semantic search và keyword search?',
              'Reranking là gì? Vì sao cần rerank?',
              'Làm sao xử lý document permission trong RAG?',
              'Làm sao tránh user truy xuất tài liệu không có quyền?',
              'Làm sao update/delete document đã embedding?',
              'Làm sao xử lý stale embeddings?',
              'Làm sao đánh giá chất lượng retrieval?',
              'Làm sao debug khi RAG trả lời sai?',
              'Top-K retrieval nên chọn như thế nào?',
              'Nếu context quá dài, bạn chọn chunk nào đưa vào prompt?',
              'Làm sao thiết kế multi-tenant RAG?',
              'RAG có đảm bảo không hallucinate không?',
              'Khi nào RAG không phù hợp?',
            ][i]
          }))
        },
        {
          id: 'c5_s4', title: '4. AI Agents', category: 'ai_agents',
          tags: ['ai', 'agent', 'tool-calling', 'automation'],
          questions: Array.from({length: 20}, (_, i) => ({
            id: `c5_s4_q${i+1}`, index: i+1,
            text: [
              'AI agent là gì?', 'Agent khác chatbot thông thường thế nào?',
              'Tool calling/function calling là gì?', 'Agent planning là gì?',
              'Agent memory là gì? Có nên lưu memory dài hạn không?',
              'Agent có thể gọi API nội bộ như thế nào cho an toàn?',
              'Làm sao giới hạn quyền của agent?', 'Làm sao chống agent gọi tool nguy hiểm?',
              'Human-in-the-loop là gì? Khi nào cần?', 'Agent loop là gì? Vì sao nguy hiểm?',
              'Làm sao giới hạn số bước agent được chạy?',
              'Làm sao log và audit hành động của agent?',
              'Agent làm sai thao tác production thì rollback thế nào?',
              'Làm sao test một agent?',
              'Khi nào agent không tốt bằng workflow deterministic?',
              'Agent có nên trực tiếp ghi database không?',
              'Agent có nên trực tiếp gọi payment/refund/cancel order API không?',
              'Làm sao thiết kế approval flow cho agent?',
              'Làm sao đo success rate của agent?',
              'Chi phí agent có thể tăng mất kiểm soát như thế nào?',
            ][i]
          }))
        },
        {
          id: 'c5_s5', title: '5. AI Security', category: 'ai_security',
          tags: ['ai', 'security', 'prompt-injection'],
          questions: Array.from({length: 20}, (_, i) => ({
            id: `c5_s5_q${i+1}`, index: i+1,
            text: [
              'Prompt injection là gì?',
              'Direct prompt injection và indirect prompt injection khác nhau thế nào?',
              'Ví dụ indirect prompt injection trong RAG?',
              'User đưa instruction độc hại trong document thì hệ thống xử lý thế nào?',
              'Làm sao chống prompt injection?',
              'Có thể chống prompt injection hoàn toàn không?',
              'Sensitive data leakage trong LLM app xảy ra như thế nào?',
              'Có nên gửi PII/user data lên LLM provider không?',
              'Làm sao mask/redact dữ liệu trước khi gửi sang model?',
              'Làm sao kiểm soát dữ liệu model được phép trả về?',
              'Insecure output handling là gì?',
              'Nếu LLM output được dùng để generate SQL/API call thì rủi ro gì?',
              'Agent có quyền quá rộng sẽ nguy hiểm thế nào?',
              'Làm sao áp dụng least privilege cho AI agent?',
              'Làm sao audit mọi tool call của agent?',
              'Làm sao chống data exfiltration qua prompt?',
              'Làm sao chống user dùng AI endpoint để jailbreak?',
              'Làm sao rate limit AI endpoint?',
              'Làm sao chống prompt dùng quá nhiều token gây tốn cost?',
              'AI feature cần security review những gì trước khi release?',
            ][i]
          }))
        },
        {
          id: 'c5_s6', title: '6. AI System Design', category: 'ai_system_design',
          tags: ['ai', 'system-design', 'architecture'],
          questions: Array.from({length: 20}, (_, i) => ({
            id: `c5_s6_q${i+1}`, index: i+1,
            text: [
              'Thiết kế AI chatbot nội bộ cho support team.',
              'Thiết kế RAG system cho tài liệu công ty.',
              'Thiết kế AI assistant cho customer service.',
              'Thiết kế AI agent có thể tạo ticket và cập nhật ticket.',
              'Thiết kế AI search cho e-commerce.',
              'Thiết kế semantic recommendation cơ bản.',
              'Thiết kế AI summarization cho long document.',
              'Thiết kế document ingestion pipeline.',
              'Thiết kế multi-tenant vector search.',
              'Thiết kế AI feature có feature flag và rollback.',
              'Thiết kế AI gateway/service layer cho nhiều model provider.',
              'Thiết kế rate limit và quota cho AI endpoint.',
              'Thiết kế audit log cho AI tool calling.',
              'Thiết kế approval workflow cho high-risk AI action.',
              'Thiết kế fallback khi LLM provider down.',
              'Thiết kế cost dashboard cho AI usage.',
              'Thiết kế evaluation pipeline cho prompt/model regression.',
              'Thiết kế guardrail service cho prompt/response.',
              'Thiết kế AI notification generator nhưng cần kiểm soát tone/content.',
              'Thiết kế production rollout cho một AI feature mới.',
            ][i]
          }))
        },
        {
          id: 'c5_s7', title: '7. AI Production Cases', category: 'ai_production',
          tags: ['ai', 'production', 'incident'],
          questions: Array.from({length: 20}, (_, i) => ({
            id: `c5_s7_q${i+1}`, index: i+1,
            text: [
              'Sau deploy prompt mới, response quality giảm mạnh. Bạn xử lý thế nào?',
              'LLM provider tăng latency, AI endpoint timeout hàng loạt. Bạn làm gì?',
              'Token usage tăng 5 lần sau release. Bạn debug thế nào?',
              'User báo AI trả lời sai dựa trên document cũ. Bạn kiểm tra gì?',
              'AI trả lời thông tin không có trong tài liệu. Bạn xử lý thế nào?',
              'RAG retrieve nhầm document của tenant khác. Mức độ nghiêm trọng ra sao?',
              'Prompt injection khiến agent gọi tool không mong muốn. Bạn xử lý incident thế nào?',
              'Vector index bị stale sau khi document update. Bạn làm gì?',
              'AI response format sai làm downstream service lỗi. Bạn fix thế nào?',
              'Model mới tốt hơn ở benchmark nhưng tệ hơn trong production. Vì sao?',
              'Một user dùng prompt cực dài làm cost tăng cao. Bạn phòng tránh thế nào?',
              'Agent chạy loop liên tục và gọi API nhiều lần. Bạn xử lý thế nào?',
              'AI feature làm lộ thông tin nhạy cảm trong log. Bạn xử lý ra sao?',
              'LLM trả lời chậm làm request giữ thread quá lâu. Bạn tối ưu thế nào?',
              'Provider A down, chuyển sang provider B nhưng quality khác. Bạn xử lý thế nào?',
              'Embedding model đổi khiến search result thay đổi. Bạn rollout thế nào?',
              'Evaluation pass nhưng user vẫn không hài lòng. Bạn điều tra gì?',
              'AI-generated email/message sai tone làm ảnh hưởng khách hàng. Guardrail thế nào?',
              'Chat history quá dài làm response chậm và đắt. Bạn thiết kế summarization/memory ra sao?',
              'AI trả lời đúng nhưng không explain được nguồn. Với enterprise RAG, bạn cải thiện gì?',
            ][i]
          }))
        },
        {
          id: 'c5_s8', title: '8. AI Trade-offs', category: 'ai_tradeoffs',
          tags: ['ai', 'trade-off', 'decision'],
          questions: Array.from({length: 15}, (_, i) => ({
            id: `c5_s8_q${i+1}`, index: i+1,
            text: [
              'Khi nào chọn RAG thay vì fine-tuning?',
              'Khi nào chọn fine-tuning thay vì RAG?',
              'Khi nào chọn model lớn thay vì model nhỏ?',
              'Khi nào dùng open-source/self-hosted model?',
              'Khi nào dùng external model provider?',
              'Trade-off giữa quality, latency và cost là gì?',
              'Trade-off giữa context window lớn và retrieval tốt là gì?',
              'Trade-off giữa automation và human approval là gì?',
              'Trade-off giữa logging để debug và privacy là gì?',
              'Trade-off giữa cache và correctness trong AI response là gì?',
              'Trade-off giữa agent linh hoạt và workflow deterministic là gì?',
              'Trade-off giữa prompt-based rule và code-based rule là gì?',
              'Trade-off giữa speed rollout và AI governance là gì?',
              'Trade-off giữa model portability và provider-specific feature là gì?',
              'Trade-off giữa AI personalization và data privacy là gì?',
            ][i]
          }))
        },
      ]
    },
    // ═══════════════════════════════════════════════════════════
    // THẺ 6 — Big Tech Interview Playbook
    // ═══════════════════════════════════════════════════════════
    {
      id: 'card_6',
      title: 'Thẻ 6 — Big Tech Interview Playbook',
      type: 'questions',
      sections: [
        {
          id: 'c6_s1', title: '1. Behavioral & Leadership Signals', category: 'bigtech_behavioral',
          tags: ["big-tech","behavioral","leadership","star"],
          questions: [
            { id: 'c6_s1_q1', text: 'Hãy kể về một dự án bạn tạo ra impact lớn nhất. Bạn đã đo impact như thế nào?', index: 1 },
            { id: 'c6_s1_q2', text: 'Kể về một thất bại kỹ thuật đáng nhớ. Bạn đã thay đổi cách làm việc ra sao sau đó?', index: 2 },
            { id: 'c6_s1_q3', text: 'Khi có bất đồng với một senior engineer hoặc manager, bạn xử lý thế nào?', index: 3 },
            { id: 'c6_s1_q4', text: 'Kể về lần bạn phải ra mắt một thay đổi có rủi ro cao trong thời gian gấp.', index: 4 },
            { id: 'c6_s1_q5', text: 'Kể về lần bạn chủ động giải quyết một vấn đề nằm ngoài ownership chính của mình.', index: 5 },
          ]
        },
        {
          id: 'c6_s2', title: '2. Ownership, Execution & Product Thinking', category: 'bigtech_execution',
          tags: ["big-tech","ownership","execution","product"],
          questions: [
            { id: 'c6_s2_q1', text: 'Nếu có ba yêu cầu đều được đánh dấu là urgent, bạn ưu tiên như thế nào?', index: 1 },
            { id: 'c6_s2_q2', text: 'Bạn làm gì khi requirements còn mơ hồ nhưng deadline không đổi?', index: 2 },
            { id: 'c6_s2_q3', text: 'Khi nào bạn chọn ship nhanh, khi nào bạn dừng để xử lý technical debt hoặc reliability?', index: 3 },
            { id: 'c6_s2_q4', text: 'Làm sao chứng minh một thay đổi kỹ thuật thực sự tạo giá trị cho người dùng hoặc business?', index: 4 },
            { id: 'c6_s2_q5', text: 'Khi một dependency team làm bạn bị block, bạn sẽ unblock công việc ra sao mà không tạo conflict?', index: 5 },
          ]
        },
        {
          id: 'c6_s3', title: '3. System Design Follow-up Questions', category: 'bigtech_system_design_followup',
          tags: ["big-tech","system-design","scalability","trade-off"],
          questions: [
            { id: 'c6_s3_q1', text: 'Trong system design, bạn sẽ hỏi gì để làm rõ requirements và ước lượng scale?', index: 1 },
            { id: 'c6_s3_q2', text: 'Nếu phải chọn một bottleneck lớn nhất của thiết kế, bạn tìm và xử lý nó thế nào?', index: 2 },
            { id: 'c6_s3_q3', text: 'Bạn quyết định consistency model như thế nào khi các yêu cầu business mâu thuẫn nhau?', index: 3 },
            { id: 'c6_s3_q4', text: 'Thiết kế của bạn xử lý partial failure và retry storm ra sao?', index: 4 },
            { id: 'c6_s3_q5', text: 'Làm sao evolve API hoặc schema mà không phá vỡ các client và consumer cũ?', index: 5 },
          ]
        },
        {
          id: 'c6_s4', title: '4. Coding Interview Communication', category: 'bigtech_coding_communication',
          tags: ["big-tech","coding","algorithms","communication"],
          questions: [
            { id: 'c6_s4_q1', text: 'Bạn bắt đầu giải một bài coding chưa từng gặp như thế nào?', index: 1 },
            { id: 'c6_s4_q2', text: 'Trong lúc coding, bạn chứng minh tính đúng đắn của solution ra sao?', index: 2 },
            { id: 'c6_s4_q3', text: 'Bạn phân tích và cải thiện time complexity, space complexity như thế nào?', index: 3 },
            { id: 'c6_s4_q4', text: 'Bạn chủ động tìm edge case và thiết kế test case ra sao?', index: 4 },
            { id: 'c6_s4_q5', text: 'Nếu bị stuck trong coding interview, bạn sẽ giao tiếp và thay đổi chiến lược thế nào?', index: 5 },
          ]
        },
        {
          id: 'c6_s5', title: '5. Senior / Staff-Level Scope', category: 'bigtech_leveling',
          tags: ["big-tech","senior","staff","influence"],
          questions: [
            { id: 'c6_s5_q1', text: 'Theo bạn, khác biệt giữa Senior Engineer và Staff Engineer nằm ở đâu?', index: 1 },
            { id: 'c6_s5_q2', text: 'Bạn tạo ảnh hưởng thế nào khi không có quyền quản lý trực tiếp các team liên quan?', index: 2 },
            { id: 'c6_s5_q3', text: 'Bạn xây dựng technical strategy cho một domain trong 6–12 tháng như thế nào?', index: 3 },
            { id: 'c6_s5_q4', text: 'Bạn mentor một engineer đang chưa đạt kỳ vọng nhưng vẫn giữ được sự tin tưởng ra sao?', index: 4 },
            { id: 'c6_s5_q5', text: 'Khi nhiều team không đồng thuận về một quyết định kiến trúc, bạn đưa nhóm tới quyết định thế nào?', index: 5 },
          ]
        },
        {
          id: 'c6_s6', title: '6. Customer, Quality & Responsible Engineering', category: 'bigtech_quality',
          tags: ["big-tech","customer","reliability","security","ai"],
          questions: [
            { id: 'c6_s6_q1', text: 'Bạn chọn metric nào để biết một sản phẩm hoặc feature mới đang thành công?', index: 1 },
            { id: 'c6_s6_q2', text: 'Khi customer impact và engineering convenience mâu thuẫn, bạn quyết định thế nào?', index: 2 },
            { id: 'c6_s6_q3', text: 'Bạn đưa reliability và operational excellence vào kế hoạch phát triển feature ra sao?', index: 3 },
            { id: 'c6_s6_q4', text: 'Khi dùng AI hoặc tự động hóa trong sản phẩm, bạn kiểm soát privacy, safety và human oversight thế nào?', index: 4 },
            { id: 'c6_s6_q5', text: 'Nếu được nhận vào team, bạn sẽ tìm hiểu và tạo impact trong 90 ngày đầu như thế nào?', index: 5 },
          ]
        },
      ]
    },
  ],

  // Metadata
  metadata: {
    totalQuestions: 0, // Will be computed
    totalSections: 0,
    lastUpdated: '2026-08-26'
  }
};

// Compute metadata
let totalQ = 0;
let totalS = 0;
questionsData.cards.forEach(card => {
  card.sections.forEach(section => {
    totalS++;
    totalQ += section.questions.length;
  });
});
questionsData.metadata.totalQuestions = totalQ;
questionsData.metadata.totalSections = totalS;
