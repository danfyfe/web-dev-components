# Overview

This repo is a learning project for creating UI components. The idea is to have some basic elements that can be easily added to a project, allowing for quicker development of basic websites.

This is a WIP, components will be added here as they are introduced.


# Installation
To install this project, use the following command:

```
  npm install @dans-coconuts/web-dev-components
```

View the library [here](https://www.npmjs.com/package/@dans-coconuts/web-dev-components)

# Tooling
This is built using React, Tailwind and Storybook, with more component testing to come.

# Before you start
This system uses Tailwind extensions via the config file to set certain values.

Below are the current keys in the Tailwind config that are implemented in components.

Each value is representative of its use and should be pretty straightforward.

For example, the H1 component uses the text-h1 font-heading Tailwind classes, updating these values will change all H1 styling, unless locally overridden.

```
  theme: {
    extend: {
      fontFamily: {
        heading: 'Arial, Helvetica, sans-serif;',
        subheading: 'Times New Roman, Helvetica, sans-serif;',
        paragraph: 'Arial, Helvetica, sans-serif;'
      },
      fontSize: {
        h1: '2.5rem',
        h2: '2rem',
        h3: '1.75rem',
        h4: '1.5rem',
        h5: '1.25rem',
        h6: '1rem',
        link: '1rem',
        paragraph: '1rem',
      }
    }
```

# Components
## a11y
<details>
  <summary><span>SkipToMainContent</span></summary>
  <div style="margin-left: 20px;">
  <p><b>Overview</b></p>
  <p>Handles the accessibility concern that allows for keyboard only users to quickly navigate to the main content in the site, avoiding needing to traverse larger navigation components.</p>

  <p><b>Params</b></p>

  - `className`: allows for additional styling via Tailwind
  </div>
</details>

## header-navigation
<details>
  <summary><span>HeaderNavigation</span></summary>
  <div style="margin-left: 20px;">
  <p><b>Overview</b></p>
  <p>Provides a basic header and navigation functionality with a dropdown on mobile</p>

  <p><b>Params</b></p>

  - `logo`: an object used to supply image data to the logo component
    - `src`: image source attribute
    - `alt`: image alt attribute
    - `height`: image height attribute
    - `width`: image width attribute
  - `navigationItems`: an array of objects used to render the navigation links
    - `text`: link text-content
    - `href`: link href attribute
  </div>
</details>

## containers
<details>
  <summary><span>MainContainer</span></summary>
  <div style="margin-left: 20px;">
  <p><b>Overview</b></p>
  <p>Provides a `main` HTML element for use at the base page level. The element's ID is hardcoded to work with the `SkipToMainContent` component.</p>

  <p><b>Params</b></p>

  - `children`: children elements
  - `className`: allows for additional styling via Tailwind
  </div>
</details>

<details>
  <summary><span>SectionContainer</span></summary>
  <div style="margin-left: 20px;">
  <p><b>Overview</b></p>
  <p>Provides a `section` HTML element for structure while building out reusable components.</p>

  <p><b>Params</b></p>

  - `id`: id for section element
  - `children`: children elements
  - `className`: allows for additional styling via Tailwind
  </div>
</details>