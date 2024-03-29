## HTML (Hypertext Markup Language)
HTML is the standard markup language used to create and design documents on the web. It's the basic building block for creating web pages and web applications. HTML uses a system of tags and attributes to structure content and define the elements on a webpage.

**Basic HTML Template**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Crash Course</title>
</head>

<body>
    <h1>HTML (Hypertext Markup Language)</h1>
    <p>HTML is the standard markup language used to create and design documents on the web. It's the basic building
        block for creating web pages and web applications.</p>
</body>

</html>
```

**HTML Tags:**
HTML tags are keywords enclosed in angle brackets that define the structure of an HTML document. Tags come in pairs: an opening tag and a closing tag. The opening tag marks the beginning of an element, and the closing tag signifies the end of that element. For example:

```html
<p>This is a paragraph.</p>
```

Here, `<p>` is the opening tag, and `</p>` is the closing tag, defining a paragraph element.

**Categorized HTML Tags:**

1. **Document Structure:**
   - `<!DOCTYPE html>`: Document type declaration.
   - `<html>`: Root element.
   - `<head>`: Contains meta-information about the document.
   - `<title>`: Sets the title of the document.
   - `<body>`: Contains the content of the document.

2. **Text Markup:**
   - `<p>`: Paragraph.
   - `<h1> to <h6>`: Headings (from largest to smallest).
   - `<strong>`: Strong importance (bold).
   - `<em>`: Emphasized text (italics).
   - `<a>`: Anchor (creates hyperlinks).
   - `<span>`: Inline container for styling.

3. **Lists:**
   - `<ul>`: Unordered list.
   - `<ol>`: Ordered list.
   - `<li>`: List item.

4. **Images and Multimedia:**
   - `<img>`: Embeds an image.
   - `<audio>`: Embeds audio content.
   - `<video>`: Embeds video content.

5. **Tables:**
   - `<table>`: Defines a table.
   - `<tr>`: Defines a table row.
   - `<td>`: Defines a table cell.

6. **Forms:**
   - `<form>`: Defines an HTML form.
   - `<input>`: Input field.
   - `<select>`: Dropdown list.
   - `<textarea>`: Multiline text input.
   - `<button>`: Clickable button.

7. **Semantic Elements:**
   - `<header>`: Represents a header for a document or section.
   - `<nav>`: Represents a navigation menu.
   - `<article>`: Represents an independent piece of content.
   - `<section>`: Represents a generic section in a document.
   - `<footer>`: Represents a footer for a document or section.

8. **Metadata:**
   - `<meta>`: Provides metadata about the HTML document.

These are just a few examples of HTML tags categorized by their purpose. HTML provides a versatile set of tags to structure content, create links, embed multimedia, and define the layout and style of a webpage. The combination and nesting of these tags allow developers to create rich and interactive web pages.

In HTML, elements are categorized into two main types: inline elements and block elements. These categories determine how elements behave in relation to other elements on the page and how they affect the flow of content.

### Inline Elements:

1. **Definition:**
   - Inline elements do not start on a new line and only take up as much width as necessary.
   - They do not force a new line to begin after the element.

2. **Examples of Inline Elements:**
   - `<span>`
   - `<a>` (anchor)
   - `<strong>` (strong)
   - `<em>` (emphasis)
   - `<img>` (image)
   - `<br>` (line break)

3. **Behavior:**
   - Inline elements allow other elements to sit to their left and right on the same line.
   - They only take up as much width as necessary, allowing content to flow around them.

4. **Example:**
   ```html
   <p>This is an <strong>inline</strong> element.</p>
   ```

### Block Elements:

1. **Definition:**
   - Block elements typically start on a new line and take up the full width available.
   - They create a "block" or "box" of content.

2. **Examples of Block Elements:**
   - `<div>`
   - `<p>` (paragraph)
   - `<h1> to <h6>` (headings)
   - `<ul>`, `<ol>`, `<li>` (lists)
   - `<table>` (table)
   - `<form>` (form)

3. **Behavior:**
   - Block elements create a new "block" or "box" of content, pushing elements above and below them onto new lines.
   - They typically take up the full width of their container, stretching from the left edge to the right edge.

4. **Example:**
   ```html
   <div>This is a block element.</div>
   ```

### Inline-Block Elements:

1. **Definition:**
   - Inline-block elements combine features of both inline and block elements.
   - They do not start on a new line, and they only take up as much width as necessary, but you can apply block-level styling to them.

2. **Examples of Inline-Block Elements:**
   - `<span>` with `display: inline-block;`
   - `<img>` with `display: inline-block;`

3. **Behavior:**
   - Inline-block elements allow other elements to sit to their left and right on the same line.
   - They can be styled with block-level properties like width and height.

4. **Example:**
   ```html
   <span style="display: inline-block;">This is an inline-block element.</span>
   ```

Understanding the distinction between inline and block elements is essential for structuring HTML documents and applying appropriate styling. Inline elements are useful for small, inline-level content, while block elements are more suitable for larger, block-level sections of content.

### `<h1> to <h6>`: Headings (from largest to smallest).

HTML heading tags (`<h1>` to `<h6>`) are structural elements used to define headings or titles within a document. By default, browsers apply certain styles to these heading tags, and these styles can vary slightly between browsers. Here's a general overview of the default styles for heading tags:

1. **Font Size:**
   - Each heading tag has a default font size, with `<h1>` being the largest and `<h6>` the smallest. The font size decreases as the heading level increases.

   ```css
   h1 {
      font-size: 2em; /* Typically larger */
   }

   h2 {
      font-size: 1.5em;
   }

   h3 {
      font-size: 1.17em;
   }

   h4 {
      font-size: 1em;
   }

   h5 {
      font-size: 0.83em;
   }

   h6 {
      font-size: 0.67em; /* Typically smaller */
   }
   ```

2. **Margin and Padding:**
   - The default margins and padding around heading tags may vary between browsers. It's generally a good practice to reset or normalize these styles using a CSS reset or a CSS framework like Normalize.css to ensure consistent styling across different browsers.

   ```css
   h1, h2, h3, h4, h5, h6 {
     margin-top: 0.67em;    /* Adjusted for spacing between headings and other elements */
     margin-bottom: 0.67em; /* Adjusted for spacing between headings and other elements */
   }
   ```

3. **Font Weight:**
   - Heading tags often have a bold font weight by default, emphasizing their role as headings.

   ```css
   h1, h2, h3, h4, h5, h6 {
     font-weight: bold;
   }
   ```

4. **Line Height:**
   - The default line height may vary, but it is often set to provide a visually pleasing spacing between lines of text within a heading.

   ```css
   h1, h2, h3, h4, h5, h6 {
     line-height: 1.2; /* Adjusted for good readability */
   }
   ```

It's important to note that these values can be affected by user-agent stylesheets and may be overridden by custom styles in your CSS. To ensure consistent styling and improve cross-browser compatibility, web developers often use a CSS reset or normalization techniques at the beginning of their stylesheets. This helps create a consistent baseline for styling across different browsers and devices.

### `<p>`: Paragraph.

The default font size for the `<p>` (paragraph) tag can vary slightly between browsers, but it is typically set to 16 pixels or 1em by most browsers. Here's an example of what the default might look like:

```css
p {
  font-size: 1em; /* or font-size: 16px; */
}
```

This means that the text inside a `<p>` element will be displayed at a size equivalent to the default font size set by the browser, which is often 16 pixels. Keep in mind that users can customize their default font size in browser settings, so the actual rendered size may be different based on user preferences.

If you want to ensure consistent styling and reset the default styles to a known baseline, you may consider using a CSS reset or normalization techniques at the beginning of your stylesheets. This helps create a consistent starting point for your styling across different browsers.

### HTML Lists

In HTML, lists are used to organize and structure content. There are three main types of lists: unordered lists (`<ul>`), ordered lists (`<ol>`), and definition lists (`<dl>`). Lists are composed of list items (`<li>`) that contain the actual content or items of the list.

### 1. Unordered Lists (`<ul>`):

- **Definition:**
  - Unordered lists are used to present a collection of items without any particular order or sequence.

- **Example:**
  ```html
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  ```

- **Rendered Output:**
  - Item 1
  - Item 2
  - Item 3

### 2. Ordered Lists (`<ol>`):

- **Definition:**
  - Ordered lists are used to present a collection of items in a specific numerical or alphabetical order.

- **Example:**
  ```html
  <ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
  </ol>
  ```

- **Rendered Output:**
  1. First item
  2. Second item
  3. Third item

### 3. Definition Lists (`<dl>`):

- **Definition:**
  - Definition lists are used to define terms and provide corresponding definitions.

- **Example:**
  ```html
  <dl>
    <dt>Term 1</dt>
    <dd>Definition 1</dd>
    <dt>Term 2</dt>
    <dd>Definition 2</dd>
  </dl>
  ```

- **Rendered Output:**
  - Term 1
    - Definition 1
  - Term 2
    - Definition 2

### Nested Lists:

Lists can also be nested within one another to create hierarchical structures.

**Example:**
```html
<ul>
  <li>Item 1</li>
  <li>Item 2
    <ul>
      <li>Subitem 2.1</li>
      <li>Subitem 2.2</li>
    </ul>
  </li>
  <li>Item 3</li>
</ul>
```

**Rendered Output:**
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3

Lists provide a flexible way to organize and present information in HTML, and they play a crucial role in creating well-structured and accessible content on the web.

### HTML Table

HTML tables are used to organize and present data in a structured grid format. Tables consist of rows and columns, and the intersection of a row and a column is called a cell. The basic structure of an HTML table involves several elements, including `<table>`, `<tr>` (table row), `<th>` (table header cell), and `<td>` (table data cell).

Here's an overview of the key components of an HTML table:

### 1. `<table>` Element:

- **Definition:**
  - The `<table>` element is the container for the entire table.

- **Attributes:**
  - `border`: Specifies the border width of the table (deprecated in HTML5, use CSS for styling).

- **Example:**
  ```html
  <table border="1">
    <!-- Table content goes here -->
  </table>
  ```

### 2. `<tr>` Element (Table Row):

- **Definition:**
  - The `<tr>` element defines a row in the table.

- **Example:**
  ```html
  <tr>
    <!-- Table cells (th or td) go here -->
  </tr>
  ```

### 3. `<th>` Element (Table Header Cell):

- **Definition:**
  - The `<th>` element defines a header cell in the table. Header cells are typically used in the first row or first column to label the data in the corresponding cells.

- **Example:**
  ```html
  <th>Header 1</th>
  ```

### 4. `<td>` Element (Table Data Cell):

- **Definition:**
  - The `<td>` element defines a standard data cell in the table.

- **Example:**
  ```html
  <td>Data 1</td>
  ```

### Example of a Simple Table:

```html
<table border="1">
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1,1</td>
    <td>Data 1,2</td>
  </tr>
  <tr>
    <td>Data 2,1</td>
    <td>Data 2,2</td>
  </tr>
</table>
```

**Rendered Output:**
```
| Header 1 | Header 2 |
|----------|----------|
| Data 1,1 | Data 1,2 |
| Data 2,1 | Data 2,2 |
```

### Additional Attributes and Elements:

- **`colspan` and `rowspan` Attributes:**
  - These attributes allow a cell to span multiple columns or rows.

  ```html
  <td colspan="2">This cell spans two columns</td>
  <td rowspan="2">This cell spans two rows</td>
  ```

- **Caption (`<caption>`):**
  - The `<caption>` element is used to provide a title or description for the table.

  ```html
  <caption>Monthly Expenses</caption>
  ```

- **Styling with CSS:**
  - While HTML attributes like `border` can be used for basic styling, it's common to use CSS for more advanced styling of tables.

HTML tables are versatile and widely used for displaying tabular data on web pages, ranging from simple data presentations to more complex structures with merged cells and custom styling.