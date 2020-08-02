# Lifecycle hooks
- Cho phép chèn thêm những tác vụ cần thiết trong những thời điểm quan trọng trong quá trình khởi tạo tới khi phá hủy các component bằng  cách triển khai một hoặc nhiều interfaces trong thư việc core của Angular.

- Mỗi interface có tên: interface name prefixed with ng
  
Example: interface `OnInit` có một method `ngOnInit`

```
@Directive()
export class PeekABooDirective implements OnInit {
  constructor(private logger: LoggerService) { }

  // implement OnInit's `ngOnInit` method
  ngOnInit() { this.logIt(`OnInit`); }

  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }
}
```
