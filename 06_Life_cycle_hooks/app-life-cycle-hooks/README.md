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

- 2 . Được gọi trước ngOnInit () và bất cứ khi nào một hoặc nhiều data-bound inpput properties change.
```
@Component({
  selector: 'my-component'
})
class MyComponent {
  @Input() name:string;

  ngOnChanges(changes) {
  }

  ngOnInit() {
  }
}
```
```
<my-component [name]="somePropInParent"></my-component>
```

This make `name` a data-bound property.

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
<on-changes [hero]="hero" [power]="power"></on-changes>
```

#### ngOnInit()

- 1 . 	Khởi tạo directive / component sau khi Angular hiển thị các thuộc tính ràng buộc dữ liệu và đặt các thuộc tính đầu vào của directive / component.

- 2 . Gọi một lần, sau lần đầu tiên ngOnChanges().

- use cases: Nếu muốn add thêm cái gì đó khi component loaded, giống như đăng ký dữ liệu từ API, khởi tạo một số thư viện bên thứ 3.
