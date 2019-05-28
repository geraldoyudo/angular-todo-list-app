# TodoListApp

This is a simple todolist application created as a work through on your first simple App.

## Getting Started

Visit https://angular.io/guide/quickstart to install angular and its dependencies.

## Initializing the Application

1. Open Command Line and navigate to the directory the app is supposed to be located.

`cd C:/path/to/app/home`

2. Create the angular app by running the command below and following the prompts. (Press enter for all the prompts to choose the default values)

`ng new todo-list-app`

3. Navigate into the newly created directory

`cd todo-list-app`

4. Run the newly created application. The commend below, opens a new browser for the app

`ng serve --open`

5. Once this is run, angular watches for changes in any file. If you make any changes, angular will recompile the application and refresh the page. You will see your changes at real time

6. To learn more about angular, visit the angular docs page (https://angular.io/docs)

## What's in the default Application

Angular initializes a project with a default html page containing the angular logo and some links. This can be found in the index.html file and the apps/app.component.html file

## Angular and Components

The basic building block of an angular application is the component. Many componets can make up an angular app. The initialized application comes with one component in the app folder called app.component.ts 

### The App Component

The app component is made up of four files:

1. app.component.ts - Containing the component's logic, written in TypeScript. 
2. app.component.html - Containing the component's view markup in html.
3. app.component.css - A css file used for styling the app.component
4. app.component.spec.ts - A typescript file for testing the app.comonent.

## Using Angular Material

In this tutorial, we will be using angular material for our user interface. It provides an easy way to get started with UI. See https://material.angular.io/guide/getting-started for details.

1. Install angular material in your project

`npm install --save @angular/material @angular/cdk @angular/animations`

2. Configure Animations Module

a.  In the app.module.ts, add the following below the last import statement

`import {BrowserAnimationsModule} from '@angular/platform-browser/animations';`

b.  In the app.module.ts, add the `BrowserAnimationsModule` to the imports array

3. Including a theme

a. Add the following to the styles.css file

`@import "~@angular/material/prebuilt-themes/indigo-pink.css";`

4. Add Gesture support

a. run the command
`npm install --save hammerjs`

b. add `import 'hammerjs';` below the last import in main.ts

## The index page

The index page (index.html) is written in html markup language. This is a declarative language in which a view is created by assembling tags together. The tags represents different user interface components like buttons, text, paragraphs, fields, lists and so on. Angular and Angular material adds to the markup set to provides feature rich components.

The index page contains an `<app-root></app-root>` tag which is where angular will insert the app.component view.

The title tag sets the title of the app. The base tag instructs angular to load the application when the path is "/" e.g(http://localhost:4200/)


## Modifying the App Component Html

The app/app.component.html contains the code responsible for what you see on the page. It uses the `title` variable to display a welcome message. In the app.component.ts, we see that the `title` variable is already set to `todo-list-app`. So what we see on the page is:

`Welcome to todo-list-app!`

We are going to remove everything except the first div tag.

1. Adding a tool bar

a. Add the MatToolBar module in angular.module.ts

b. Replace the `div` with `mat-toolbar` and remove the `img` tag

c. Refresh the app page on the browser, the view changes and we can only see the welcome message

4. set the toolbar color

a. Add the `color="primary"` beside the first `mat-toolbar'

b. Observe that the color changes to blue. Angular material comes with swatches, i.e colors for different modes. Angular provides these color modes: primary, accent, warn. You can set the following to any color you want.

## Adding the todo list input field

We are going to add a todo list input field to enable our users  enter an item.

In order to do this, we need to create a variable to store the user's input in the app.component.

1. Add the following line below the title variable in app.component.ts.

`todo: string;`

This assigns a 'todo' variable of a 'string' type. String variables are capable of holding words, texts and other groups of characters.

2. Add the todo input field in the app.component.html

a. We add the FormsModule and MatInputModule to app.modules.ts to enable us use angular material's input fields and receive inputs from the user.

```
import { FormsModule }   from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
```

b. Now that we have added this, we can now add the text input. Add the following below the mat-toolbar tag in the app.component.html

```
<div class="example-form">
  <mat-form-field class="example-full-width">
    <input matInput placeholder="Todo Item" value="">
  </mat-form-field>
</div>
```
c. And in the app.component.css, add the following style classes 

```
.example-form {
    min-width: 150px;
    max-width: 500px;
    width: 100%;
  }
  
  .example-full-width {
    width: 100%;
  }
  
```

c. You should be able to see the text field appear on the page.

## Receiving inputs from the text field

We want to modify the text field in such away that the app will receive the contents when the user presses the enter key.

a. Create a method addTodo() in the app.component. This will be where we will add the logic for populating the todo list. 

```
export class AppComponent {
  title = 'todo-list-app';
  todo: string;
  
  addTodo(){
    // code to add todo to list will go there
  }
}

```
a. Add the following to the text field:

`(keydown.enter)="addTodo()"`

The input field should now look like this:

```
<div class="example-form">
  <mat-form-field class="example-full-width">
    <input matInput placeholder="Todo Item" value="" (keydown.enter)="addTodo()">
  </mat-form-field>
</div>

```
## Storing the ToDo's

1. Let us create the variable to hold our list. A todo item will contain a text property and a boolean property representing whether the todo item is done or not.

```
{
  text: "Go to the market",
  done: false
}
```
2. Create a todo class

a. On the command terminal, type the following:

`ng g class todo`

A todo.ts file will be created. Add the text and done properties to the class.

```
export class Todo {
    text: string;
    done: boolean;
}
```

A class is a blueprint for an object. Any object created from this class will have a string text property and a boolean property. Boolean properties hold only true or false;

3. Create a todo list variable in app.component.ts

a. We are going to use the Todo list class in todo.ts. Import this class in app.component.ts. Add the following below the import line; in app.component.ts

`import { Todo } from './todo';`

b. Add the following todoList variable to AppComponent (below the todo string variable). This creates a todoList of type Todo array, and initializes it to an empty array.

`  todoList: Todo[] = [];`

## Updating the app.component.html to show the list

We need to add the todo list to the html so that the use can view his/her lists.

1. Add the MatListModule to app.module.ts to use the list tags
`import {MatListModule} from '@angular/material/list';`

2. Add the following in the app.component.html page

```
<mat-nav-list>
  <a mat-list-item href="#" *ngFor="let todoItem of todoList"> {{todoItem.text}}</a>
</mat-nav-list>
```

The *ngFor attribute allows us to loop through the items of the todoList variable and create a list-item for each todo item

For now, entering a text in the todo list still does nothing. We have to update the addTodo() method.

## Implementing the addTodo() method

This method will create todo item and add it to the todoList variable. This is how the addTodo() method will look like:

```
addTodo(){
  let todoItem: Todo = new Todo();
  todoItem.text = this.todo;
  this.todoList.push(todoItem);
  this.todo = "";
}

```

Now that this is implmented, you will now be able to see your lists as you enter todo's. We clear the todo variable so that the text field is cleared after the todo item has been added.

## Swiping Todo Items to Mark done

We are going to add a swipe guesture so that todo items can be swiped to a done state. These guestures are provided by the library hammerjs.

1. Add a toggleDone() method in app.component.ts

```
  ... // other app.component.ts codes

  toggleDone(todo:Todo){
    todo.done = !todo.done;
  }
}

```

2. Add a swipe listener to the list item. 

```
  <a mat-list-item href="#" *ngFor="let todoItem of todoList"  (swipe)="toggleDone(todoItem)"> {{todoItem.text}}</a>

```


## Crossing the item when it is done

Let us add a strike through to the item once the user swipes an item as done.

1. Create a css class to represent this strike through phase.

a. Add this in app.component.css

```
  .done-item {
    text-decoration: line-through
  }

```
b. Add an ngClass directive to the list item to add the done-item class if the done property is true.

```
  <a mat-list-item href="#" *ngFor="let todoItem of todoList"  (swipe)="toggleDone(todoItem)"> <span [ngClass]="{'done-item': todoItem.done}">{{todoItem.text}}</span></a>

```

Congratulations!! We have built a todo list application. You can pull the code for the complete solution.

Next steps:

- Try to add persistence
- Redesign the app to your taste