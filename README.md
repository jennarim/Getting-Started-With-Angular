# Getting Started With Angular

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-xzhszm-hpeduq)

## Basic Outline
A store catalog with a product list, "Share" button, and "Notify Me" button. This application demonstrates a foundation in components, template syntax, two-way binding, and routing. 

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
          
### 2. Data Binding
* Interpolation syntax {{ }} : renders a property's value as text

* Property Binding [ ] : property binding syntax: lets you use property value in a template expression
-- if you didn't use [], then hovering over link would literally display w.e is in quotes

* Event Binding ( )
`<button (click)="onSave()">Save</button>`
- This event binding listens for a click, which would then call the component's onSave() method. 
