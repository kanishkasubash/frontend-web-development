# CSS Animation & Transitions

CSS animations and transitions are two powerful tools for creating dynamic and visually appealing effects on web pages. Both are techniques used to change the style of an element over time, but they have different use cases and implementations.

### CSS Transitions:

**Definition:**
CSS transitions provide a way to control the speed and timing of changes to CSS properties. They allow you to smoothly transition from one set of CSS styles to another.

**Syntax:**
```css
/* Property, Duration, Timing Function, Delay */
element {
  transition: property duration timing-function delay;
}
```

- **Property:** Specifies the CSS property you want to transition.
- **Duration:** Specifies the duration of the transition in seconds (s) or milliseconds (ms).
- **Timing Function:** Defines the pace of the transition (e.g., ease, linear, ease-in-out).
- **Delay:** Optional parameter to delay the start of the transition.

**Example:**
```css
/* Smooth transition for the color property over 1 second with ease-in-out timing function */
button {
  transition: color 1s ease-in-out;
}

/* Change color on hover */
button:hover {
  color: red;
}
```

CSS properties that can be animated or transitioned using CSS transitions. CSS transitional properties are the individual style properties that can change over time, creating visual effects and animations. Here are some common CSS properties that are often used in transitions:

1. **Color Properties:**
   - `color`: Text color.
   - `background-color`: Background color.

   ```css
   element {
     transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out;
   }
   ```

2. **Size and Layout Properties:**
   - `width`, `height`: The size of the element.
   - `margin`, `padding`: The spacing around the element.
   - `border-width`: The width of the element's border.

   ```css
   element {
     transition: width 0.3s ease-in-out, margin 0.3s ease-in-out;
   }
   ```

3. **Transform Properties:**
   - `transform`: Applies 2D and 3D transformations.

   ```css
   element {
     transition: transform 0.5s ease-in-out;
   }
   ```

4. **Opacity:**
   - `opacity`: The transparency of the element.

   ```css
   element {
     transition: opacity 0.5s ease-in-out;
   }
   ```

5. **Font Properties:**
   - `font-size`: The size of the text.
   - `letter-spacing`: Spacing between characters.

   ```css
   element {
     transition: font-size 0.3s ease-in-out, letter-spacing 0.3s ease-in-out;
   }
   ```

6. **Box Shadow:**
   - `box-shadow`: Adds a shadow to an element.

   ```css
   element {
     transition: box-shadow 0.5s ease-in-out;
   }
   ```

These are just a few examples, and many other CSS properties can be transitioned. When applying transitions, you use the `transition` property to define the specific properties you want to animate, the duration of the transition, and optional timing functions and delays. This allows you to create smooth and visually appealing effects when certain states of an element change, such as on hover or click events.

### CSS Animations:

**Definition:**
CSS animations are a more complex and versatile way to create movement and changes in the style of an element. Animations involve defining keyframes that represent different points in time during the animation.

**Syntax:**
```css
/* Name, Duration, Timing Function, Delay, Iteration Count, Direction, Fill Mode, Play State */
element {
  animation: name duration timing-function delay iteration-count direction fill-mode play-state;
}

@keyframes name {
  /* Keyframe rules */
}
```

- **Name:** The name of the animation, referenced in the `animation` property.
- **Duration:** Duration of the animation in seconds (s) or milliseconds (ms).
- **Timing Function:** Specifies the pace of the animation (e.g., ease, linear, ease-in-out).
- **Delay:** Optional delay before the animation starts.
- **Iteration Count:** Number of times the animation should repeat.
- **Direction:** Specifies whether the animation should play in reverse or alternate directions.
- **Fill Mode:** Defines how the styles are applied before and after the animation.
- **Play State:** Specifies whether the animation is running or paused.

**Example:**
```css
/* Define animation */
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(200px);
  }
}

/* Apply animation to element */
div {
  animation: slide 2s ease-in-out infinite alternate;
}
```

In summary, transitions are simpler and work well for simple state changes (e.g., hover effects), while animations offer more control and flexibility for complex and continuous motion. The choice between them depends on the specific requirements of your design.