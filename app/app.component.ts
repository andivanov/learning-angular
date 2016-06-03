import { Component } from 'angular2/core';


// decorator
@Component({
    selector: 'pm-app',
    template: `
        <div>
            <h1>{{pageTitle}}</h1>
            <p>My first component</p>
        </div>`
})


// class
export class AppComponent {
    pageTitle: string = 'This is a page title';
}