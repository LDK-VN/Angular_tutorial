# Introduction to Angular concepts

## What is Angular?
 
Định ngĩa từ trang chủ Angular.
`
  Angular is a platform and framework for building single-page (SPAs) client applications using HTML and TypeScript.
`
Định nghĩa tự luận.
- Nó là framework cho frontend và là bản tiếp theo của AngularJs.
- Mã nguồn mở giúp xây dựng một Single Page Application (SPAs)

## Why should using Angular?
1. Angular giúp nâng cao năng xuất của các lập trình viên
  - Rõ ràng và dễ học hơn
  - Sử dụng TypeScript
2. Cấu trúc phát triển rõ ràng.
  - Sử dụng class
  - Mô hình MVVM

## Run angular

> > ng serve -o

    - ng serve: Run angular enviroment development
    - -o: open localhost in browser (default localhost:4200)

## app.component.html

- {{ title }} : String Interpolation, {{}} : Curly Brace

## app.module.ts

### Module

- Angular has its own modularity system called `NgModules`
- Contain `components`, `service providers`, and other code files whose scope is defined by the containing NgModule
- Can import functionalty that is exported from other NgModules and vice versa
- Angular app has at least one `NgModule` class, `the root module`

### NgModule metadata:

- `@NgModule` is @Decorator input metadata. Whose properties describe the module
  - declarations: The [components], directives, and pipes that belong to this NgModule
  - exports: Import by `component templates` of other NgModules
  - imports: Export by `component templates` of other NgModules
  - providers: creators of [services]

## app.component.module

- selector: using element tag
- template
