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