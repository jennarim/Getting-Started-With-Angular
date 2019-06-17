# Getting Started With Angular

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-xzhszm-hpeduq)

## Basic Outline
A store catalog with a product list, "Share" button, and "Notify Me" button. This Single Page Application demonstrates a foundation in components, template syntax, two-way binding, routing, data management, and form management. 

### 1. Template Syntax
#### Directives:
- a class with a @Directive() director that allows Angular templates to be dynamic. Angular transforms the DOM according to instructuctions given by the directives.

* Two Types of Directives: Structural and Attribute
    * _Structural_: alters layout, shapes DOM's structure by adding, removing, and manipulating elements. Any directive with a * is structural.
       * \*ngFor - iterative
       * \*ngIf - conditional: elements to HTML code if 'expression' is true

    * _Attribute_: change appearance or behavior of an existing DOM element
       * ngModel: modifies behavior of an existing element, implements two-way data binding
          * `[ngModel]="currentHero.name"` is syntax for one-way binding
          * `[(ngModel)]="currentHero.name"` is for two-way binding
          
#### Data Binding
* Interpolation syntax {{ }} : renders a property's value as text

* Property Binding [ ] : property binding syntax: lets you use property value in a template expression
-- if you didn't use [], then hovering over link would literally display w.e is in quotes

* Event Binding ( )
`<button (click)="onSave()">Save</button>`
- This event binding listens for a click, which would then call the component's onSave() method. 

### 2. Components
#### Components: an area in one's UI that consists of: 
1. A component class: handles data and functionality (ex: cart.component.ts)
2. An HTML template: determines what is preseneted to the user (ex. cart.component.html)
3. Component-specific styles: defines look and feel (ex: cart.component.css)

This application contains the following components:
* app-root: the application shell; the parent of all other components
  * app-top-bar
  * app-product-list
  * app-product-details: the name, price, description of each item
  * app-shipping: shipping options
  * app-product-alerts: notifies user if an expensive item goes on sale
  
  
### 3. Routing
Router: enables navigation from one view to the next as users click links
0. Create your new component (e.g.product details)
1. Register the route to your new page
```typescript
@NgModule({
imports: [
 BrowserModule,
 ReactiveFormsModule,
 RouterModule.forRoot([
   { path: '', component: ProductListComponent },
   { path: 'products/:productId', component: ProductDetailsComponent },
 ])
],
```
A route associates one or more URL paths with a component. 
2. Insert a routerLink from your starting point that links to the route.
```html
<a [title]="product.name + ' details'" [routerLink]="['/products', productId]">
   {{ product.name }}
</a>
```

### 4. Managing Data
#### Services
* _Services_: a class with a narrow, well-defined purpose; can be made available to any part of your application; the place where you share data between parts of your application
  * Diff b/w service and component:
     - a component enables the user experience and nothing more

### 5. Forms
Import the FormBuilder service.
`import { FormBuilder } from '@angular/forms';`
Inject the Formbuilder service.
```typescript
export class CartComponent {
  items;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
  }
}
```
  
