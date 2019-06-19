import { Component } from '@angular/core';
/**
 * 1. Import the Component class from @angular/core library
 * @ - tells TS to create a new instance 
 * selector: defines the name of the HTML tag where this component will live
 *       ~ Angular inserts instance of AppComponent between app-root tags
 * stylesUrl: used to style a specific Component
 * tempalte: ties logic from our component directly to a view
 * 
 * 2. Export the Component
 * export: this component can be imported into different files in a project
 * 
 * Notes:
 * - ES2015/ES6 syntax allows us to use import/export statements. 
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {} 


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/