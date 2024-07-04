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

  - `id`: the `id` should align with the id on the `main` HTML element on the page. The prop is used in the anchor component to scroll the page down to the `main` element when activated.
  - `className`: incorporates additional styling via Tailwind.
  </div>
</details>
