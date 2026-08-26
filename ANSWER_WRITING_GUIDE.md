# Technical answer writing guide

## Mục tiêu

Mỗi answer phải giúp ứng viên trình bày một cách xử lý production có thể kiểm chứng, thay vì chỉ liệt kê keyword. Nội dung viết bằng tiếng Việt, giữ nguyên thuật ngữ kỹ thuật phổ biến bằng English trong ngoặc khi cần.

## Cấu trúc bắt buộc

Mỗi file nên có:

1. Tiêu đề bám sát câu hỏi.
2. `## Tóm tắt ngắn (30s)`: câu trả lời trực tiếp, nêu ưu tiên và nguyên tắc chính.
3. `## Cách tiếp cận từng bước`: triage hoặc design flow có thứ tự rõ ràng.
4. `## Chi tiết kỹ thuật`: cơ chế, invariant, failure mode, dữ liệu/metrics cần quan sát và trade-off.
5. `## Ví dụ triển khai`: pseudocode, SQL, Java, Python, YAML hoặc CLI chỉ khi làm rõ cách làm; code phải tự nhất quán và nói rõ phần cần thay thế.
6. `## Kiểm chứng và phòng ngừa tái diễn`: test, alert, rollout, rollback, ownership hoặc postmortem tùy chủ đề.
7. `## Common gotchas`: các ngoại lệ dễ sai và điều kiện không được bỏ qua.

Không phải answer nào cũng cần code dài. Một đoạn code ngắn, đúng contract và có giải thích tốt hơn một listing lớn nhưng không chạy được.

## Tiêu chí chất lượng

| Tiêu chí | Yêu cầu |
|---|---|
| Directness | Trả lời đúng câu hỏi ngay trong phần 30 giây; không mở đầu bằng định nghĩa chung chung kéo dài. |
| Correctness | Phân biệt rõ guarantee, best effort, assumption và ví dụ minh họa; không dùng claim tuyệt đối nếu không có điều kiện. |
| Production safety | Nêu blast radius, bảo vệ dữ liệu, idempotency, timeout, retry, concurrency, authorization hoặc rollback khi liên quan. |
| Observability | Chỉ ra signal cần đo, log/trace/metric, success criteria và alert để biết giải pháp có hiệu quả. |
| Trade-offs | Giải thích ít nhất một lựa chọn thay thế và chi phí/giới hạn của lựa chọn đề xuất. |
| Actionability | Có bước triển khai và cách xác minh; tránh lời khuyên như “monitor kỹ” mà không nêu monitor gì. |
| Consistency | Thuật ngữ, đơn vị thời gian, tên biến và giọng điệu nhất quán với các answer hiện có. |
| Honesty | Không bịa thành tích cá nhân, số liệu production hay công nghệ không cần thiết; dùng số giả lập chỉ khi ghi rõ là ví dụ. |

## Quy tắc code và factual claims

Code phải dùng API đúng phiên bản hoặc nói rõ nếu là pseudocode. Không hard-code secret, token, password hoặc PII. Query có input phải parameterized. Các ví dụ destructive phải có dry-run, transaction/backup hoặc điều kiện rollback phù hợp. Với các claim phụ thuộc phiên bản hoặc vendor, answer phải nêu scope/version hoặc dẫn tới tài liệu chính thức trong phần References nếu cần.

Khi answer đưa ra một con số cụ thể như latency, timeout, SLO hoặc capacity, đó phải là ví dụ minh họa có ghi rõ cách hiệu chỉnh bằng load test và telemetry, không trình bày như sự thật của hệ thống.
