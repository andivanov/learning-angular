# Angular 2

Setting up A2 Application:
- Create tsconfig.json
- Create package.json
- Create typings.json
- Create the host Web page
- Create the main.ts file(bootstrapper)

Can use AngularCli to create the project.



## Modules
Lets say we have two files, and they both are modules

product.ts
```
    export class Product {
        ...
    }
 ```

 product-list.ts
```
    import { Product } from ./product
```

