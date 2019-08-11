[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com/)
[![npm](https://img.shields.io/npm/v/bhisma-home-about.svg?maxAge=3600)](https://www.npmjs.com/package/bhisma-home-about)

# Bhisma home-about Component

Bhisma home-about component build with [StencilJS](https://stenciljs.com/).

# Demo

See the demo [here](https://bhisma.isnur.com/home-about.html).

# Getting Started

To start building a new web component using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/isnur/bhisma-home-about.git home-about
cd home-about
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

Need help? Check out our docs [here](https://stenciljs.com/docs/my-first-component).

## Naming Components

When creating new component tags, we recommend _not_ using `stencil` in the component name (ex: `<stencil-datepicker>`). This is because the generated component has little to nothing to do with Stencil; it's just a web component!

Instead, use a prefix that fits your company or any name for a group of related components. For example, all of the Ionic generated web components use the prefix `ion`.

# Using this component

## Script tag

- Put a script tag similar to this

  ```html
  <script type="module" src="https://unpkg.com/bhisma-home-about@1.0.1/dist/home-about/home-about.esm.js"></script>
  <script nomodule src="https://unpkg.com/bhisma-home-about@1.0.1/dist/home-about/home-about.js"></script>
  ```
  
  in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

## Node Modules

- Run `npm install bhisma-home-about --save`
- Put a script tag similar to this

  ```html
  <script type="module" src='node_modules/bhisma-home-about/dist/home-about/home-about.esm.js'></script>
  <script nomodule src='node_modules/bhisma-home-about/dist/home-about/home-about.js'></script>
  ```

    in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

## In a stencil-starter app

- Run `npm install bhisma-home-about --save`
- Add an import to the npm packages `import bhisma-home-about;`
- Then you can use the element anywhere in your template, JSX, html etc

## In the html

```html
<home-about>
  <h1>Lorem Ipsum</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</home-about>

<script>
  var homeAbout = document.querySelector('home-about');
  homeAbout.toggleOptions = {
    textOpen: 'See More',
    textClose: 'Close',
    textPosition: 'right', // 'left' , 'center', 'right
    textClass: 'btn btn-link'
  };
</script>
```

# Contact Me

[![Email](https://img.shields.io/badge/isnurmsm-Email-yellow.svg?maxAge=3600)](mailto:isnurmsm@gmail.com)
[![Facebook](https://img.shields.io/badge/isnurmsm-Facebook-blue.svg?maxAge=3600)](https://facebook.com/isnurmsm)
[![Linkedin](https://img.shields.io/badge/isnur-Linkedin-0077b5.svg?maxAge=3600)](https://www.linkedin.com/in/isnur/)
