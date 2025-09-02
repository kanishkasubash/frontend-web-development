# Frontend Web Development

## HTML | CSS | SCSS/SASS | JavaScript | TypeScript

Welcome to my Frontend Web Development repository. I learned from scratch through this repository to deploy my first web application. Along the way, I have been learning essential web development concepts for now and beyond.

## What do we need to start?

### A Web Browser
- 🔗 [Google Chrome](https://www.google.com/chrome/)
- 🔗 [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)
- 🔗 [Safari](https://www.apple.com/safari/)
- 🔗 [Edge](https://www.microsoft.com/edge)
 
### A Text Editor
- 🔗 [Notepad++](https://notepad-plus-plus.org/downloads/)
- 🔗 [TextMate(macOS)](https://macromates.com/)
- 🔗 [Visual Studio Code](https://code.visualstudio.com/)
- 🔗 [Sublime Text](https://www.sublimetext.com/)
- 🔗 [Brackets](https://brackets.io/)

### JavaScript Runtime Environment
- [https://nodejs.org](https://nodejs.org/en)
  
### ⚙ Free Web Dev Tools

- 🔗 [Blank Dark New Tab Chrome Extension](https://chromewebstore.google.com/detail/blank-dark-new-tab-page/agldajbhchobfgjcmmigehfdcjbmipne/reviews?hl=en)
- 🔗 [HTML5 Outliner](https://chrome.google.com/webstore/detail/html5-outliner/afoibpobokebhgfnknfndkgemglggomo)
- 🔗 [W3C HTML Validator](https://validator.w3.org/)
- 🔗 [Live Server VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- 🔗 [Prettier VS Code Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- 🔗 [vscode-icons VS Code Extension](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)
- 🔗 [Github Themes VS Code Extension](https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme)

### 📚 References

- 🔗 [MDN: Resources for Developers](https://developer.mozilla.org/en-US/)
- 🔗 [HTML Named Character References](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references)
- 🔗 [MDN Web Glossary: Semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- 🔗 [w3Schools: Learn to Code](https://www.w3schools.com/)

## HTML From Scratch

### HTML

"HTML" stands for Hypertext Markup Language. It is used on the frontend and provides a structure for the web page that we can style with CSS and create interactions with JavaScript.

In this section, I have learned as much about HTML5 as possible. I have created a sample web page with all the standard HTML5 tags, attributes, semantic markup, etc.

### Basic HTML Template

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Crash Course</title>
</head>

<body>
    <h1>Hello World</h1>
</body>

</html>
```

## CSS From Scratch

### CSS

CSS or Cascading Style Sheets is the language used to style the frontend of any web page. CSS is a fundamental technology of the World Wide Web, alongside HTML and JavaScript.

In this section, I have learned as much as possible about CSS. I have looked at styles, selectors, declarations, etc. I have built a web page with CSS, which I can keep as a resource. I have created a basic website layout. I am using CSS3 but mostly the basics.

### Internal CSS
Using ```<style></style>``` tags within a document

```html
<style type="text/css">
    color: #333;
</style>
```

### External CSS
Linking an external .css file

```html
<link rel="stylesheet" type="text/css" href="css/style.css">
```

## SCSS From Scratch

### SCSS

SCSS, which stands for Sassy CSS, is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). It is a superset of CSS3, meaning that all valid CSS3 code is also valid SCSS, but SCSS provides additional features and enhancements.

To run SCSS on your computer, you'll need to compile it into regular CSS, as browsers don't understand SCSS directly. Here are the general steps:

1. **Install a Sass Compiler:**
   - Before you start, you need to have a Sass compiler installed on your computer. There are various ways to install a compiler. You can use npm (Node Package Manager) if you have Node.js installed, or you can use standalone applications.

   - If you have Node.js, you can install the Sass compiler globally using the following command in your terminal or command prompt:

     ```bash
     npm install -g sass
     ```

2. **Compile SCSS to CSS:**
   - Once you have the Sass compiler installed, navigate to the directory containing your SCSS file in the terminal or command prompt.

   - Use the following command to compile the SCSS file into CSS:

     ```bash
     sass input.scss output.css
     ```

     Replace `input.scss` with the name of your SCSS file and `output.css` with the desired name for your compiled CSS file.

   - Alternatively, you can watch for changes in your SCSS file and automatically compile it when changes occur. Use the following command:

     ```bash
     sass --watch input.scss:output.css
     ```

3. **Link Compiled CSS in HTML:**
   - Once the SCSS is compiled into CSS, link the compiled CSS file in your HTML file, just like you would with a regular CSS file:

     ```html
     <link rel="stylesheet" type="text/css" href="output.css">
     ```

## JavaScript From Scratch

### JavaScript

JavaScript allows you to add interactivity to your pages. Common examples you may have seen on the websites are sliders, click interactions, popups, etc.

In this section, I have learned the fundamentals of JavaScript including more modern syntax like classes, arrow functions, etc. This is the starting point of my learning JS.

### Internal JS
Using ```<script></script>``` tags within a document

```html
<style type="text/javascript">
    var i = 10;
</style>
```

### External JS
Linking an external .js file

```html
<script src="js/script.js"></script>
```

### Basic HTML Template with CSS/JS Links

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Crash Course</title>
  <link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<body>
    <h1>Hello World</h1>
</body>
<script src="js/script.js"></script>
</html>
```

### Basic Folder Structure

```
project folder
  |
  |__ assets
  |    |__ favicon.ico
  |    |__ logo.png
  |
  |__ css
  |    |__ style.css
  |
  |__ js
  |    |__ script.js
  |
  |__ index.html
```

## TypeScript From Scratch

### TypeScript

TypeScript is an open-source programming language developed by Microsoft. It is a statically typed superset of JavaScript, which means that it builds upon JavaScript by adding static typing and other features to the language. TypeScript is designed to make it easier to develop large-scale, maintainable JavaScript applications by catching errors and providing better tooling for developers.

1. **Install TypeScript globally:**
   Open your command prompt or terminal and run the following command to install TypeScript globally on your system:

   ```
   npm install -g typescript
   ```

   This command installs the TypeScript compiler (`tsc`) globally, which you can use to compile TypeScript code into JavaScript.

2. **Create a TypeScript file:**
   Create a new directory for your TypeScript project and navigate to it in your terminal. Inside the project directory, create a new TypeScript file with the `.ts` extension. You can use any text editor or integrated development environment (IDE) of your choice to create the file. Let's name it `hello.ts`.

3. **Write your first TypeScript code:**
   Open the `hello.ts` file in your code editor and write a simple TypeScript program. For example:

   ```typescript
   function sayHello(name: string) {
     console.log(`Hello, ${name}!`);
   }

   const personName: string = "John";
   sayHello(personName);
   ```

   In this code, we define a `sayHello` function that takes a `name` parameter of type `string` and logs a greeting message to the console.

4. **Compile TypeScript to JavaScript:**
   In your terminal, navigate to the directory where your `hello.ts` file is located. Then, run the TypeScript compiler to transpile your TypeScript code into JavaScript:

   ```
   tsc hello.ts
   ```

   This command will generate a `hello.js` file in the same directory.

5. **Run your TypeScript program:**
   You can now execute your TypeScript program by running the generated JavaScript file using Node.js. In the terminal, enter the following command:

   ```
   node hello.js
   ```

   You should see the output `Hello, John!` printed to the console.