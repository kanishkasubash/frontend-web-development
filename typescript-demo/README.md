# ⭐️ TypeScript Course Content ⭐️

## What is TypeScript?

TypeScript is an open-source programming language developed by Microsoft. It is a statically typed superset of JavaScript, which means that it builds upon JavaScript by adding static typing and other features to the language. TypeScript is designed to make it easier to develop large-scale, maintainable JavaScript applications by catching errors and providing better tooling for developers.

key features of TypeScript:

1. **Static Typing:** TypeScript allows developers to define types for variables, function parameters, and return values. This helps catch type-related errors at compile-time rather than runtime, which can lead to more reliable code and better tooling support.

2. **Type Inference:** TypeScript can often infer types automatically based on the value assigned to a variable, reducing the need for explicit type annotations. This strikes a balance between static typing and the dynamic nature of JavaScript.

3. **Interfaces:** TypeScript allows you to define interfaces to describe the shape of objects, making it easier to work with complex data structures and ensuring that objects conform to a specific structure.

4. **Enums:** TypeScript supports enums, which can help create more expressive code by giving meaningful names to sets of values.

5. **Generics:** TypeScript includes support for generics, allowing you to write reusable and type-safe functions, classes, and data structures.

6. **Decorators:** Decorators are a TypeScript feature that enables you to add metadata to classes and their members. This is particularly useful when working with libraries and frameworks like Angular.

7. **Advanced Tooling:** TypeScript provides a rich set of development tools, including code editors like Visual Studio Code with built-in TypeScript support, which offers features like autocompletion, type checking, and refactoring tools.

8. **Compatibility:** TypeScript is designed to be highly compatible with existing JavaScript code. You can gradually introduce TypeScript into your projects by renaming .js files to .ts files and gradually adding type annotations.

9. **Transpilation:** TypeScript code is transpiled into plain JavaScript, which means it can run in any JavaScript environment, making it highly versatile.

10. **Community and Ecosystem:** TypeScript has gained widespread adoption in the web development community and has a growing ecosystem of libraries and tools.

Developers often choose TypeScript for larger projects where strong typing, tooling, and maintainability are important. It helps reduce the likelihood of runtime errors, improves code readability, and enhances collaboration among team members by providing clear type information.

## Why should use TypeScript?

Should consider using TypeScript for projects for several compelling reasons:

1. **Type Safety:** TypeScript introduces static typing to JavaScript, which means you can define types for your variables, function parameters, and return values. This helps catch type-related errors at compile-time, reducing the risk of bugs and improving code quality. Strong typing makes your code more robust and maintainable.

2. **Code Readability:** Type annotations and interfaces in TypeScript make your code more self-documenting. Developers can understand the intended structure and types of data simply by looking at the code, which can enhance code readability and reduce the need for extensive comments.

3. **Early Error Detection:** TypeScript's static type checking can catch errors during development, before the code is executed. This leads to faster development cycles as you don't have to spend as much time debugging runtime issues.

4. **Improved Tooling:** TypeScript has excellent tooling support, especially in code editors like Visual Studio Code. You benefit from features like autocompletion, intelligent code suggestions, and real-time error checking, which can significantly boost productivity.

5. **Refactoring Support:** TypeScript's type system aids in safe and efficient code refactoring. You can confidently rename variables, methods, or classes, knowing that the compiler will help you catch any inconsistencies in your codebase.

6. **Large-Scale Development:** TypeScript shines in large-scale applications, where managing complex codebases can be challenging. It provides structure and safety, making it easier to collaborate with larger teams and maintain long-term projects.

7. **Enhanced IDE Experience:** TypeScript-aware IDEs offer a smoother development experience. They can provide immediate feedback, suggest code fixes, and offer better code navigation, which speeds up development.

8. **Community and Ecosystem:** TypeScript has a thriving community and a growing ecosystem of libraries and frameworks that support or are built with TypeScript. Popular frameworks like Angular and NestJS are TypeScript-first, which can make integration seamless.

9. **Gradual Adoption:** You can introduce TypeScript gradually into existing JavaScript projects by renaming files from `.js` to `.ts` and adding type annotations as needed. This means you can leverage TypeScript's benefits without rewriting your entire codebase.

10. **Cross-Platform Compatibility:** TypeScript code is transpiled into standard JavaScript, making it compatible with virtually any JavaScript runtime, including browsers, Node.js, and even mobile app development using frameworks like React Native.

In summary, TypeScript is a powerful language that adds strong typing and tooling support to JavaScript, making it an excellent choice for building robust, maintainable, and scalable applications, especially in large and complex projects where code quality and reliability are paramount. It can improve development workflow, reduce errors, and enhance the overall quality of software.

## Installing and Creating First Typescript Program

To install TypeScript and create first TypeScript program, need to follow these steps:

1. **Install Node.js (if not already installed):**
   TypeScript requires Node.js and its package manager, npm, for installation. You can download Node.js from the official website: https://nodejs.org/

2. **Install TypeScript globally:**
   Open your command prompt or terminal and run the following command to install TypeScript globally on your system:

   ```
   npm install -g typescript
   ```

   This command installs the TypeScript compiler (`tsc`) globally, which you can use to compile TypeScript code into JavaScript.

3. **Create a TypeScript file:**
   Create a new directory for your TypeScript project and navigate to it in your terminal. Inside the project directory, create a new TypeScript file with the `.ts` extension. You can use any text editor or integrated development environment (IDE) of your choice to create the file. Let's name it `hello.ts`.

4. **Write your first TypeScript code:**
   Open the `hello.ts` file in your code editor and write a simple TypeScript program. For example:

   ```typescript
   function sayHello(name: string) {
     console.log(`Hello, ${name}!`);
   }

   const personName: string = "John";
   sayHello(personName);
   ```

   In this code, we define a `sayHello` function that takes a `name` parameter of type `string` and logs a greeting message to the console.

5. **Compile TypeScript to JavaScript:**
   In your terminal, navigate to the directory where your `hello.ts` file is located. Then, run the TypeScript compiler to transpile your TypeScript code into JavaScript:

   ```
   tsc hello.ts
   ```

   This command will generate a `hello.js` file in the same directory.

6. **Run your TypeScript program:**
   You can now execute your TypeScript program by running the generated JavaScript file using Node.js. In the terminal, enter the following command:

   ```
   node hello.js
   ```

   You should see the output "Hello, John!" printed to the console.

Congratulations! You've successfully installed TypeScript, created your first TypeScript program, and executed it. You can continue to build more complex TypeScript applications by creating additional `.ts` files, using TypeScript's features such as type annotations and interfaces to add type safety, and leveraging TypeScript's tooling and features for your development needs.

## Data Types

In TypeScript, data types play a crucial role in defining the kind of values that variables and parameters can hold. TypeScript provides a static type system that allows you to specify data types for variables, function parameters, return values, and more. Here's an explanation of some common TypeScript data types:

1. **Boolean (boolean):**
   - Represents a true or false value.
   - Example: `let isDone: boolean = false;`

2. **Number (number):**
   - Represents both integer and floating-point numbers.
   - Example: `let count: number = 42;`

3. **String (string):**
   - Represents textual data, such as words and sentences.
   - Example: `let message: string = "Hello, TypeScript!";`

4. **Array (Array<T> or T[]):**
   - Represents an ordered collection of values of a specific type.
   - Example: `let numbers: number[] = [1, 2, 3];`

5. **Tuple:**
   - Represents an array-like structure where each element can have a different data type and a fixed, known length.
   - Example: `let person: [string, number] = ["Alice", 30];`

6. **Enum:**
   - Allows you to define a set of named constants with underlying numeric values.
   - Example:
     ```typescript
     enum Color {
       Red = 1,
       Green = 2,
       Blue = 3,
     }
     let color: Color = Color.Green;
     ```

7. **Any (any):**
   - Represents a dynamic type that can hold values of any data type.
   - Use it when you don't know or want to specify the type.
   - Example: `let dynamicValue: any = "Hello, Any!";`

8. **Void (void):**
   - Represents the absence of a value or the return type of functions that do not return a value.
   - Example:
     ```typescript
     function logMessage(message: string): void {
       console.log(message);
     }
     ```

9. **Null and Undefined (null and undefined):**
   - Represents the absence of a value or a variable that hasn't been assigned a value yet.
   - Example:
     ```typescript
     let nullValue: null = null;
     let undefinedValue: undefined = undefined;
     ```

10. **Never (never):**
    - Represents a value that never occurs (e.g., a function that always throws an error or never returns).
    - Often used in function return types that never complete.
    - Example:
      ```typescript
      function throwError(message: string): never {
        throw new Error(message);
      }
      ```

11. **Object (object):**
    - Represents any non-primitive data type.
    - Not very specific and is often better to use more precise types.
    - Example: `let user: object = { name: "Alice", age: 30 };`

12. **Union (|):**
    - Allows a variable to hold values of multiple data types.
    - Example: `let value: string | number = "Hello";`

13. **Intersection (&):**
    - Combines multiple data types into one, where a value must satisfy all specified types.
    - Example:
      ```typescript
      interface Dog {
        bark(): void;
      }
      interface Bird {
        fly(): void;
      }
      let pet: Dog & Bird; // pet can bark and fly
      ```

These are some of the fundamental data types in TypeScript. They provide a way to explicitly specify the kinds of values that your variables and functions can work with, which helps catch type-related errors at compile-time and enhances code reliability and maintainability.

## Functions & Parameters

In TypeScript, you can define functions using two main syntax styles: named functions and arrow functions. These two styles have some differences in terms of how they are defined and how they behave. Let's explore both of them:

### Named Function:

A named function in TypeScript is defined using the `function` keyword followed by the function name and a parameter list. Named functions are typically used for traditional function declarations.

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

Here's an explanation of the components of a named function:

- `function`: This is the keyword used to declare a function in TypeScript.
- `add`: This is the name of the function.
- `(a: number, b: number)`: These are the parameters of the function along with their types.
- `: number`: This specifies the return type of the function.

Named functions can be called by their name and are hoisted, meaning you can use them before they are defined in your code.

### Arrow Function:

An arrow function in TypeScript is defined using the `() =>` syntax and is also known as a "fat arrow" function. Arrow functions are typically used for concise function expressions.

```typescript
const add = (a: number, b: number): number => a + b;
```

Here's an explanation of the components of an arrow function:

- `const add`: This assigns the function to a variable named `add`.
- `(a: number, b: number)`: These are the parameters of the function along with their types.
- `: number`: This specifies the return type of the function.
- `=>`: This is the fat arrow, indicating the start of the function body.
- `a + b`: This is the expression inside the function body, which is evaluated and returned.

Arrow functions are typically more concise and are often used for functions with simple expressions. They also have some behavior differences compared to named functions:

- Arrow functions do not have their own `this` binding, making them useful in certain contexts like callbacks or event handlers.
- Arrow functions cannot be hoisted, so they must be defined before they are used in your code.

Choosing between a named function and an arrow function depends on your specific use case. Named functions are often preferred for larger and more complex functions, while arrow functions are favored for shorter and more straightforward functions, especially when you want to maintain a lexical `this` context.

In TypeScript, parameter types refer to the data types assigned to the parameters of a function or method. Parameter types help define what kind of values or arguments a function can accept and enforce type checking during development. Here are some key points to understand about parameter types in TypeScript:

1. **Type Annotations:** Parameter types are declared using type annotations, where you use a colon (`:`) followed by the data type.

2. **Type Inference:** TypeScript can often infer parameter types if you don't explicitly provide type annotations. For example, in some cases, TypeScript can figure out that a parameter is of type `string` or `number` based on how it's used within the function.

   ```typescript
   function greet(name, age) {
     console.log(`Hello, ${name}! You are ${age} years old.`);
   }
   ```

   In this case, TypeScript would still infer that `name` should be a `string` and `age` should be a `number` based on the usage within the function body.

3. **Optional Parameters:** You can make parameters optional by adding a question mark (`?`) after the parameter name and type. Optional parameters can be omitted when calling the function.

   ```typescript
   function greet(name: string, age?: number): void {
     if (age === undefined) {
       console.log(`Hello, ${name}!`);
     } else {
       console.log(`Hello, ${name}! You are ${age} years old.`);
     }
   }

   greet("Alice"); // Omitting 'age' is allowed
   greet("Bob", 30); // Providing 'age' is also allowed
   ```

4. **Default Parameters:** You can provide default values for parameters using the assignment operator (`=`). If a value is not provided when calling the function, the default value will be used.

   ```typescript
   function greet(name: string, age: number = 25): void {
     console.log(`Hello, ${name}! You are ${age} years old.`);
   }

   greet("Alice"); // 'age' defaults to 25
   greet("Bob", 30); // 'age' is explicitly provided as 30
   ```

5. **Rest Parameters:** You can use rest parameters to capture a variable number of arguments into an array. The rest parameter is denoted by three dots (`...`) followed by the parameter name and type.

   ```typescript
   function sum(...numbers: number[]): number {
     return numbers.reduce((acc, num) => acc + num, 0);
   }

   console.log(sum(1, 2, 3, 4, 5)); // Output: 15
   ```

Understanding and correctly specifying parameter types in TypeScript is essential for writing type-safe code and preventing type-related errors during development. It helps ensure that functions receive the expected inputs and produce the desired outputs.

## Generic Funciton

A generic function in TypeScript is a function that can work with different data types while maintaining type safety. Generic functions allow you to write code that is more flexible and reusable because it can adapt to various input types without sacrificing type checking. TypeScript uses generics to achieve this.

Here's the basic syntax of a generic function:

```typescript
function functionName<Type>(parameter: Type): Type {
  // Function implementation
  return parameter;
}
```

In this syntax:

- `functionName` is the name of the generic function.
- `<T>` is a type parameter enclosed in angle brackets (`<>`). You can use any valid identifier instead of `T`, but `T` is a common convention for type parameters.
- `parameter` is a parameter of type `T`.
- The function returns a value of type `T`.

Here's an example of a generic function that swaps the values of two variables:

```typescript
function swap<Type>(a: Type, b: Type): [Type, Type] {
  return [b, a];
}

const result = swap(10, 20); // result is [20, 10]
```

In this example:

- `swap` is a generic function that takes two parameters of the same type `Type`.
- It returns a tuple containing the swapped values.

You can use generic functions with various data types, including primitive types, objects, and custom types. TypeScript infers the appropriate type based on the argument you pass when calling the function.

Here's an example using a custom type:

```typescript
interface Person {
  name: string;
  age: number;
}

function printPerson<Type extends Person>(person: Type): void {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

const alice: Person = { name: "Alice", age: 30 };
const bob: Person = { name: "Bob", age: 25 };

printPerson(alice); // Output: Name: Alice, Age: 30
printPerson(bob); // Output: Name: Bob, Age: 25
```

In this example:

- `printPerson` is a generic function that takes an object of type `Type`, where `Type` extends the `Person` interface.
- It logs the name and age properties of the person object.

Generic functions are powerful tools for creating reusable code that can work with different data types while preserving type safety. They are commonly used in libraries and frameworks to create flexible and generic algorithms.

- Classes
- Interfaces
- Decorators
- ESModules
