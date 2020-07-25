# Run angular
  
  >>ng serve -o 
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
  - `@NgModule` is @Decorator  input metadata. Whose properties describe the module
    - declarations: The [components], directives, and pipes that belong to this NgModule
    - exports: Import by `component templates` of other NgModules
    - imports: Export by `component templates` of other NgModules
    - providers: creators of [services]

## app.component.module
  - selector: using element tag
  - template
