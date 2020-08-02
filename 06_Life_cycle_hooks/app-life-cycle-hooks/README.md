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
<p align="center">
  <img src="https://github.com/LDK-VN/Angular_tutorial/blob/master/06_Life_cycle_hooks/app-life-cycle-hooks/src/assets/img/lifecycle_hooks.png" />
</p>

## Lifecycle event sequence

1. Purpose
2. Timing

#### ngOnChanges()
- 1 .  Thực thi khi angular đặt hoặc đặt lại các thuộc tính đầu vào bị ràng buộc dữ liệu. Phương thức nhận một đối tượng SimpleChanges của các giá trị thuộc tính hiện tại và trước đó. Lưu ý rằng điều này xảy ra rất thường xuyên, do đó, bất kỳ thao tác nào bạn thực hiện ở đây đều ảnh hưởng đáng kể đến hiệu suất. Xem chi tiết trong tài liệu này [Using change detection hooks](https://angular.io/guide/lifecycle-hooks#onchanges) 

**on-changes.components(excerpt):**
```
ngOnChanges(changes: SimpleChanges) {
  for (const propName in changes) {
    const chng = changes[propName];
    const cur  = JSON.stringify(chng.currentValue);
    const prev = JSON.stringify(chng.previousValue);
    this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
  }
}
```

**on-changes.component.ts:**
```
@Input() hero: Hero;
@Input() power: string;
```

**on-changes.component.ts:** 
```
<on-changes [hero]="hero" [power]="power"></on-changes>F
```
