# Answer backlog

> Các question dưới đây đã có trong catalog nhưng chưa có file `src/data/answers/<question-id>.md`. Đây là backlog nội dung, không phải answer placeholder. Chỉ đánh dấu hoàn tất sau khi answer được viết và qua review kỹ thuật.

**Tổng số:** 140 question.

## 12. Authentication / security incident

| ID | Question | Expected answer file |
|---|---|---|
| `c2_s12_q10` | CORS config sai gây lỗi frontend. Bạn debug ra sao? | `src/data/answers/c2_s12_q10.md` |
| `c2_s12_q11` | CSRF/XSS/SQL injection phát hiện ở production. Bạn xử lý gì trước? | `src/data/answers/c2_s12_q11.md` |
| `c2_s12_q12` | Password hashing config yếu, bạn migrate thế nào? | `src/data/answers/c2_s12_q12.md` |
| `c2_s12_q13` | Rate limit bị bypass. Nguyên nhân có thể là gì? | `src/data/answers/c2_s12_q13.md` |
| `c2_s12_q14` | Permission cache stale làm user vẫn có quyền sau khi bị revoke. Xử lý thế nào? | `src/data/answers/c2_s12_q14.md` |
| `c2_s12_q15` | Làm sao audit access tới dữ liệu nhạy cảm? | `src/data/answers/c2_s12_q15.md` |
| `c2_s12_q6` | Một endpoint thiếu authorization check. Bạn xử lý incident thế nào? | `src/data/answers/c2_s12_q6.md` |
| `c2_s12_q7` | User A thấy dữ liệu của User B. Bạn điều tra và khắc phục ra sao? | `src/data/answers/c2_s12_q7.md` |
| `c2_s12_q8` | Sensitive data bị log ra production. Bạn làm gì? | `src/data/answers/c2_s12_q8.md` |
| `c2_s12_q9` | API key bị leak. Quy trình rotate như thế nào? | `src/data/answers/c2_s12_q9.md` |

## 13. Observability / alerting issue

| ID | Question | Expected answer file |
|---|---|---|
| `c2_s13_q1` | Service lỗi nhưng không có alert. Bạn cải thiện thế nào? | `src/data/answers/c2_s13_q1.md` |
| `c2_s13_q10` | Làm sao phát hiện lỗi âm thầm trong async processing? | `src/data/answers/c2_s13_q10.md` |
| `c2_s13_q11` | Một job fail nhưng không ai biết. Bạn thêm monitoring gì? | `src/data/answers/c2_s13_q11.md` |
| `c2_s13_q12` | Log bị thiếu field quan trọng để debug. Bạn chuẩn hóa ra sao? | `src/data/answers/c2_s13_q12.md` |
| `c2_s13_q13` | Distributed tracing sampling quá thấp nên không thấy lỗi. Bạn xử lý thế nào? | `src/data/answers/c2_s13_q13.md` |
| `c2_s13_q14` | Làm sao monitor dependency như DB, Redis, Kafka, external API? | `src/data/answers/c2_s13_q14.md` |
| `c2_s13_q15` | Postmortem tốt cần trả lời những câu hỏi nào? | `src/data/answers/c2_s13_q15.md` |
| `c2_s13_q2` | Alert quá nhiều gây alert fatigue. Bạn xử lý ra sao? | `src/data/answers/c2_s13_q2.md` |
| `c2_s13_q3` | Dashboard xanh nhưng user vẫn báo lỗi. Vì sao? | `src/data/answers/c2_s13_q3.md` |
| `c2_s13_q4` | Log quá nhiều làm tăng cost và khó debug. Bạn làm gì? | `src/data/answers/c2_s13_q4.md` |
| `c2_s13_q5` | Không có correlation ID nên không trace được request. Bạn cải thiện thế nào? | `src/data/answers/c2_s13_q5.md` |
| `c2_s13_q6` | Metric p95 tốt nhưng p99 rất xấu. Có đáng lo không? | `src/data/answers/c2_s13_q6.md` |
| `c2_s13_q7` | Health check OK nhưng business flow fail. Vì sao? | `src/data/answers/c2_s13_q7.md` |
| `c2_s13_q8` | Bạn chọn SLI/SLO cho backend service như thế nào? | `src/data/answers/c2_s13_q8.md` |
| `c2_s13_q9` | Alert nên dựa trên technical metrics hay business metrics? | `src/data/answers/c2_s13_q9.md` |

## 14. External API / third-party

| ID | Question | Expected answer file |
|---|---|---|
| `c2_s14_q1` | Payment gateway timeout nhưng sau đó vẫn charge tiền. Bạn xử lý thế nào? | `src/data/answers/c2_s14_q1.md` |
| `c2_s14_q10` | Idempotency key trong payment dùng để làm gì? | `src/data/answers/c2_s14_q10.md` |
| `c2_s14_q11` | Timeout xảy ra sau khi gửi request tạo giao dịch. Làm sao biết giao dịch thành công hay thất bại? | `src/data/answers/c2_s14_q11.md` |
| `c2_s14_q12` | Circuit breaker với external API nên cấu hình thế nào? | `src/data/answers/c2_s14_q12.md` |
| `c2_s14_q13` | Làm sao giới hạn blast radius khi third-party lỗi? | `src/data/answers/c2_s14_q13.md` |
| `c2_s14_q14` | Có nên cache response từ external API không? | `src/data/answers/c2_s14_q14.md` |
| `c2_s14_q15` | Làm sao reconcile dữ liệu với external provider? | `src/data/answers/c2_s14_q15.md` |
| `c2_s14_q2` | External API trả response chậm bất thường. Service của bạn nên làm gì? | `src/data/answers/c2_s14_q2.md` |
| `c2_s14_q3` | External API trả lỗi 429 rate limit. Bạn xử lý ra sao? | `src/data/answers/c2_s14_q3.md` |
| `c2_s14_q4` | API provider thay đổi contract không báo trước. Bạn phòng tránh thế nào? | `src/data/answers/c2_s14_q4.md` |
| `c2_s14_q5` | Webhook từ third-party gửi duplicate event. Bạn xử lý thế nào? | `src/data/answers/c2_s14_q5.md` |
| `c2_s14_q6` | Webhook đến trễ hoặc out-of-order. Bạn thiết kế ra sao? | `src/data/answers/c2_s14_q6.md` |
| `c2_s14_q7` | Chữ ký webhook verify fail hàng loạt. Bạn debug thế nào? | `src/data/answers/c2_s14_q7.md` |
| `c2_s14_q8` | External API downtime, có nên fallback không? | `src/data/answers/c2_s14_q8.md` |
| `c2_s14_q9` | Làm sao thiết kế retry cho API thanh toán? | `src/data/answers/c2_s14_q9.md` |

## 15. File upload / storage

| ID | Question | Expected answer file |
|---|---|---|
| `c2_s15_q1` | User upload file lớn làm service timeout. Bạn xử lý thế nào? | `src/data/answers/c2_s15_q1.md` |
| `c2_s15_q10` | Làm sao thiết kế upload không đi qua backend app quá nhiều? | `src/data/answers/c2_s15_q10.md` |
| `c2_s15_q2` | Upload thành công nhưng file không đọc được. Nguyên nhân có thể là gì? | `src/data/answers/c2_s15_q2.md` |
| `c2_s15_q3` | Object storage chậm hoặc lỗi. Service nên fallback thế nào? | `src/data/answers/c2_s15_q3.md` |
| `c2_s15_q4` | Virus scan file upload nên đặt ở đâu trong flow? | `src/data/answers/c2_s15_q4.md` |
| `c2_s15_q5` | Upload nhiều file cùng lúc làm đầy disk tạm. Bạn xử lý ra sao? | `src/data/answers/c2_s15_q5.md` |
| `c2_s15_q6` | File metadata ghi DB thành công nhưng upload file thất bại. Làm sao đảm bảo consistency? | `src/data/answers/c2_s15_q6.md` |
| `c2_s15_q7` | Signed URL hết hạn quá sớm/quá muộn gây vấn đề gì? | `src/data/answers/c2_s15_q7.md` |
| `c2_s15_q8` | File private bị public access. Bạn xử lý incident thế nào? | `src/data/answers/c2_s15_q8.md` |
| `c2_s15_q9` | Cleanup file orphan như thế nào? | `src/data/answers/c2_s15_q9.md` |

## 16. Batch job / scheduler

| ID | Question | Expected answer file |
|---|---|---|
| `c2_s16_q1` | Cron job chạy trùng trên nhiều instance. Bạn xử lý thế nào? | `src/data/answers/c2_s16_q1.md` |
| `c2_s16_q10` | Khi nào nên dùng distributed scheduler? | `src/data/answers/c2_s16_q10.md` |
| `c2_s16_q11` | Lock cho scheduled job nên thiết kế thế nào? | `src/data/answers/c2_s16_q11.md` |
| `c2_s16_q12` | Job cần chạy đúng một lần có thực tế không? | `src/data/answers/c2_s16_q12.md` |
| `c2_s16_q13` | Làm sao monitor progress của batch job? | `src/data/answers/c2_s16_q13.md` |
| `c2_s16_q14` | Làm sao pause/resume một job đang chạy? | `src/data/answers/c2_s16_q14.md` |
| `c2_s16_q15` | Làm sao rollback kết quả của batch job sai? | `src/data/answers/c2_s16_q15.md` |
| `c2_s16_q2` | Batch job chạy quá lâu ảnh hưởng database production. Bạn làm gì? | `src/data/answers/c2_s16_q2.md` |
| `c2_s16_q3` | Job fail giữa chừng, chạy lại có an toàn không? | `src/data/answers/c2_s16_q3.md` |
| `c2_s16_q4` | Làm sao thiết kế batch job idempotent? | `src/data/answers/c2_s16_q4.md` |
| `c2_s16_q5` | Một job bị miss schedule. Bạn phát hiện và xử lý ra sao? | `src/data/answers/c2_s16_q5.md` |
| `c2_s16_q6` | Job retry liên tục gây quá tải hệ thống. Bạn xử lý thế nào? | `src/data/answers/c2_s16_q6.md` |
| `c2_s16_q7` | Job xử lý dữ liệu theo ngày nhưng timezone sai. Hậu quả là gì? | `src/data/answers/c2_s16_q7.md` |
| `c2_s16_q8` | Backfill hàng triệu records cần lưu ý gì? | `src/data/answers/c2_s16_q8.md` |
| `c2_s16_q9` | Làm sao chia batch size phù hợp? | `src/data/answers/c2_s16_q9.md` |

## 17. Timezone / date-time

| ID | Question | Expected answer file |
|---|---|---|
| `c2_s17_q1` | User ở nhiều timezone thấy ngày giờ sai. Bạn debug thế nào? | `src/data/answers/c2_s17_q1.md` |
| `c2_s17_q10` | Làm sao test logic liên quan thời gian? | `src/data/answers/c2_s17_q10.md` |
| `c2_s17_q2` | Server dùng UTC nhưng business dùng local timezone. Thiết kế thế nào? | `src/data/answers/c2_s17_q2.md` |
| `c2_s17_q3` | Daylight Saving Time có thể gây bug gì? | `src/data/answers/c2_s17_q3.md` |
| `c2_s17_q4` | Cron chạy sai giờ sau khi đổi timezone. Vì sao? | `src/data/answers/c2_s17_q4.md` |
| `c2_s17_q5` | Token expiration sai do clock lệch. Bạn xử lý ra sao? | `src/data/answers/c2_s17_q5.md` |
| `c2_s17_q6` | Event xảy ra lúc cuối ngày bị tính sang ngày khác. Nguyên nhân? | `src/data/answers/c2_s17_q6.md` |
| `c2_s17_q7` | Report theo ngày bị lệch dữ liệu. Bạn kiểm tra gì? | `src/data/answers/c2_s17_q7.md` |
| `c2_s17_q8` | Nên lưu LocalDateTime, OffsetDateTime, Instant thế nào? | `src/data/answers/c2_s17_q8.md` |
| `c2_s17_q9` | Database timezone khác application timezone gây lỗi gì? | `src/data/answers/c2_s17_q9.md` |

## 18. Logging issue

| ID | Question | Expected answer file |
|---|---|---|
| `c2_s18_q1` | Log chứa PII hoặc secret. Bạn xử lý thế nào? | `src/data/answers/c2_s18_q1.md` |
| `c2_s18_q10` | Structured logging nên gồm những field nào? | `src/data/answers/c2_s18_q10.md` |
| `c2_s18_q2` | Log volume tăng đột biến sau deploy. Hậu quả là gì? | `src/data/answers/c2_s18_q2.md` |
| `c2_s18_q3` | Log thiếu request ID nên khó trace. Bạn cải thiện ra sao? | `src/data/answers/c2_s18_q3.md` |
| `c2_s18_q4` | Stack trace bị swallow, không thấy root cause. Bạn xử lý thế nào? | `src/data/answers/c2_s18_q4.md` |
| `c2_s18_q5` | Log async bị mất khi service shutdown. Vì sao? | `src/data/answers/c2_s18_q5.md` |
| `c2_s18_q6` | Log ở level ERROR quá nhiều nhưng không actionable. Bạn làm gì? | `src/data/answers/c2_s18_q6.md` |
| `c2_s18_q7` | Một exception được log nhiều lần ở nhiều layer. Có vấn đề gì? | `src/data/answers/c2_s18_q7.md` |
| `c2_s18_q8` | Logging request/response body có rủi ro gì? | `src/data/answers/c2_s18_q8.md` |
| `c2_s18_q9` | Làm sao mask sensitive fields trong log? | `src/data/answers/c2_s18_q9.md` |

## 19. Performance degradation

| ID | Question | Expected answer file |
|---|---|---|
| `c2_s19_q1` | Service chạy vài ngày thì chậm dần. Bạn nghi ngờ gì? | `src/data/answers/c2_s19_q1.md` |
| `c2_s19_q10` | Temporary file không cleanup gây disk full. Bạn xử lý ra sao? | `src/data/answers/c2_s19_q10.md` |
| `c2_s19_q2` | Memory tăng dần nhưng chưa OOM. Bạn xử lý thế nào? | `src/data/answers/c2_s19_q2.md` |
| `c2_s19_q3` | Thread count tăng dần theo thời gian. Nguyên nhân có thể là gì? | `src/data/answers/c2_s19_q3.md` |
| `c2_s19_q4` | DB connection không được release gây hậu quả gì? | `src/data/answers/c2_s19_q4.md` |
| `c2_s19_q5` | HTTP client connection leak là gì? | `src/data/answers/c2_s19_q5.md` |
| `c2_s19_q6` | Cache ngày càng lớn do key không expire. Bạn phát hiện thế nào? | `src/data/answers/c2_s19_q6.md` |
| `c2_s19_q7` | Scheduler tạo task mới nhưng không cleanup task cũ. Hậu quả? | `src/data/answers/c2_s19_q7.md` |
| `c2_s19_q8` | Metrics cardinality quá cao làm monitoring chậm. Vì sao? | `src/data/answers/c2_s19_q8.md` |
| `c2_s19_q9` | Log file/disk đầy làm service lỗi như thế nào? | `src/data/answers/c2_s19_q9.md` |

## 20. Kubernetes / container

| ID | Question | Expected answer file |
|---|---|---|
| `c2_s20_q1` | Pod restart liên tục. Bạn debug thế nào? | `src/data/answers/c2_s20_q1.md` |
| `c2_s20_q10` | Service DNS trong cluster lỗi gây connection fail. Bạn debug ra sao? | `src/data/answers/c2_s20_q10.md` |
| `c2_s20_q11` | Horizontal Pod Autoscaler scale chậm. Bạn xử lý thế nào? | `src/data/answers/c2_s20_q11.md` |
| `c2_s20_q12` | Startup time Java service quá lâu ảnh hưởng deployment. Bạn tối ưu gì? | `src/data/answers/c2_s20_q12.md` |
| `c2_s20_q13` | Container clock/timezone khác expectation gây bug gì? | `src/data/answers/c2_s20_q13.md` |
| `c2_s20_q14` | Resource request/limit nên đặt thế nào? | `src/data/answers/c2_s20_q14.md` |
| `c2_s20_q15` | Làm sao capture heap dump/thread dump trong container? | `src/data/answers/c2_s20_q15.md` |
| `c2_s20_q2` | Pod bị OOMKilled. Khác gì Java OutOfMemoryError? | `src/data/answers/c2_s20_q2.md` |
| `c2_s20_q3` | Readiness probe fail làm service không nhận traffic. Bạn kiểm tra gì? | `src/data/answers/c2_s20_q3.md` |
| `c2_s20_q4` | Liveness probe quá aggressive gây restart không cần thiết. Hậu quả? | `src/data/answers/c2_s20_q4.md` |
| `c2_s20_q5` | CPU limit quá thấp ảnh hưởng Java service như thế nào? | `src/data/answers/c2_s20_q5.md` |
| `c2_s20_q6` | Memory limit thấp hơn JVM heap setting gây vấn đề gì? | `src/data/answers/c2_s20_q6.md` |
| `c2_s20_q7` | Rolling update làm mất request đang xử lý. Cách phòng tránh? | `src/data/answers/c2_s20_q7.md` |
| `c2_s20_q8` | Pod schedule không đều gây hot spot. Bạn xử lý thế nào? | `src/data/answers/c2_s20_q8.md` |
| `c2_s20_q9` | ConfigMap/Secret update nhưng app không nhận. Vì sao? | `src/data/answers/c2_s20_q9.md` |

## 21. Production incident leadership

| ID | Question | Expected answer file |
|---|---|---|
| `c2_s21_q1` | Khi incident xảy ra, senior engineer nên làm gì trong 5 phút đầu? | `src/data/answers/c2_s21_q1.md` |
| `c2_s21_q10` | Làm sao đo incident impact? | `src/data/answers/c2_s21_q10.md` |
| `c2_s21_q11` | Khi alert xảy ra ngoài giờ, bạn xử lý escalation thế nào? | `src/data/answers/c2_s21_q11.md` |
| `c2_s21_q12` | Khi incident do lỗi của bạn, bạn communicate ra sao? | `src/data/answers/c2_s21_q12.md` |
| `c2_s21_q13` | Khi áp lực từ business yêu cầu fix nhanh, bạn cân bằng rủi ro thế nào? | `src/data/answers/c2_s21_q13.md` |
| `c2_s21_q14` | Khi rollback gây mất một số feature mới, bạn quyết định thế nào? | `src/data/answers/c2_s21_q14.md` |
| `c2_s21_q15` | Làm sao biến incident thành improvement lâu dài? | `src/data/answers/c2_s21_q15.md` |
| `c2_s21_q2` | Làm sao phân công người điều tra, người communicate, người fix? | `src/data/answers/c2_s21_q2.md` |
| `c2_s21_q3` | Khi chưa rõ nguyên nhân, bạn có nên rollback không? | `src/data/answers/c2_s21_q3.md` |
| `c2_s21_q4` | Làm sao communicate incident với stakeholder? | `src/data/answers/c2_s21_q4.md` |
| `c2_s21_q5` | Khi có nhiều giả thuyết root cause, bạn ưu tiên kiểm chứng cái nào? | `src/data/answers/c2_s21_q5.md` |
| `c2_s21_q6` | Làm sao tránh nhiều người cùng thay đổi production trong lúc incident? | `src/data/answers/c2_s21_q6.md` |
| `c2_s21_q7` | Khi fix tạm khác fix chuẩn, bạn ra quyết định thế nào? | `src/data/answers/c2_s21_q7.md` |
| `c2_s21_q8` | Sau incident, follow-up action nên gồm những gì? | `src/data/answers/c2_s21_q8.md` |
| `c2_s21_q9` | Postmortem blameless nghĩa là gì? | `src/data/answers/c2_s21_q9.md` |

## 22. Case study

| ID | Question | Expected answer file |
|---|---|---|
| `c2_s22_q1` | Order bị tạo 2 lần: nguyên nhân có thể là gì, fix ngắn hạn/dài hạn ra sao? | `src/data/answers/c2_s22_q1.md` |
| `c2_s22_q10` | Một region bị lỗi, region khác bình thường: config, data, network hay dependency? | `src/data/answers/c2_s22_q10.md` |
| `c2_s22_q11` | Một nhóm user bị lỗi, nhóm khác không: feature flag, permission, data shape hay tenant config? | `src/data/answers/c2_s22_q11.md` |
| `c2_s22_q12` | Search result thiếu dữ liệu: index async lag hay pipeline fail? | `src/data/answers/c2_s22_q12.md` |
| `c2_s22_q13` | Report sai số liệu hôm qua: timezone, late event hay duplicate event? | `src/data/answers/c2_s22_q13.md` |
| `c2_s22_q14` | Deploy mới làm consumer xử lý lại toàn bộ message cũ: offset commit sai? | `src/data/answers/c2_s22_q14.md` |
| `c2_s22_q15` | Service restart liên tục nhưng log không rõ lỗi: startup probe, memory limit, config hay secret? | `src/data/answers/c2_s22_q15.md` |
| `c2_s22_q2` | Payment bị charge tiền nhưng order fail: thiết kế reconciliation thế nào? | `src/data/answers/c2_s22_q2.md` |
| `c2_s22_q3` | User không nhận được notification: trace từ API đến queue đến worker ra sao? | `src/data/answers/c2_s22_q3.md` |
| `c2_s22_q4` | Kafka lag tăng sau deploy: bạn rollback hay scale consumer? | `src/data/answers/c2_s22_q4.md` |
| `c2_s22_q5` | DB connection pool full: app leak connection hay DB chậm? | `src/data/answers/c2_s22_q5.md` |
| `c2_s22_q6` | Cache trả dữ liệu cũ: invalidate sai hay read replica lag? | `src/data/answers/c2_s22_q6.md` |
| `c2_s22_q7` | CPU spike mỗi ngày lúc 0h: batch job, cron, report hay cache expire cùng lúc? | `src/data/answers/c2_s22_q7.md` |
| `c2_s22_q8` | Memory tăng sau mỗi lần gọi API export: stream file sai hay giữ object lớn? | `src/data/answers/c2_s22_q8.md` |
| `c2_s22_q9` | API timeout nhưng backend vẫn xử lý thành công: client retry gây duplicate không? | `src/data/answers/c2_s22_q9.md` |

