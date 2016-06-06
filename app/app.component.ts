// importing components
import { Component } from 'angular2/core';
import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';

// decorator
@Component({
    selector: 'pm-app',
    template: `
        <div>
            <h1>{{pageTitle}}</h1>
            <pm-products></pm-products>
        </div>`,
    directives: [ProductListComponent],
    providers: [ProductService]
})

// class
export class AppComponent {
    pageTitle: string = 'Main Title';
}