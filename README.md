# Overview

This repo is a learning project for creating UI components. The idea is to have some basic elements that can be easily added to a project, allowing for quicker development of basic websites.

This is a WIP, components will be added here as they are introduced.

# Tooling
This is built using React, Tailwind and Storybook.

# Components
## a11y
<details>
  <summary><span>SkipToMainContent</span></summary>
  <div style="margin-left: 20px;">
  <p><b>Overview</b></p>
  <p>This component handles the accessibility concern that allows for keyboard only users to quickly navigate to the main content in the site, avoiding needing to traverse larger navigation components.</p>

  <p><b>Params</b></p>

  - `className`: incorporates additional styling via Tailwind.
  </div>
</details>

## header-navigation
<details>
  <summary><span>HeaderNavigation</span></summary>
  <div style="margin-left: 20px;">
  <p><b>Overview</b></p>
  <p>This component provides a basic header and navigation functionality with a dropdown on mobile</p>

  <p><b>Params</b></p>

  - `logo`: an object used to supply image data to the logo component
    - `src`: image source attribute
    - `alt`: image alt attribute
    - `height`: image height attribute
    - `width`: image width attribute
  - `navigationItems`: an array of objects used to render the navigation links.
    - `text`: link text-content
    - `href`: link href attribute
  </div>
</details>