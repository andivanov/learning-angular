// importing components
import { Component } from 'angular2/core';
import { ProductListComponent } from './product/product-list.component';


// decorator
@Component({
    selector: 'pm-app',
    template: 
        `
        <div>
            <h1>{{pageTitle}}</h1>
            <pm-products></pm-products>
        </div>
        `,
    directives: [ProductListComponent]
})

// class
export class AppComponent {
    pageTitle: string = 'Main Title';
}