<p align="center">
  <a href="https://onefx.js.org">
    <img alt="Gatsby" src="https://onefx.js.org/favicon.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Automatic onefx.js App Landing Page
</h1>
<p align="center">
  Create and deploy an iOS app landing page on GitHub Pages and Netlify in a couple of minutes<br><br>
  <img alt="GitHub" src="https://img.shields.io/github/license/ImedAdel/automatic-gatsbyjs-app-landing-page.svg">
</p>

![Automatic GatsbyJS App Landing Page](https://raw.githubusercontent.com/ImedAdel/Mac-Arabic-Keyboard-for-Windows/master/68747470733a2f2f656d696c62616568722e636f6d2f66696c65732f6a6179736f6e312e706e67.png)
![Automatic GatsbyJS App Landing Page](https://raw.githubusercontent.com/ImedAdel/Mac-Arabic-Keyboard-for-Windows/master/68747470733a2f2f656d696c62616568722e636f6d2f66696c65732f736c6f72312e706e67.png)

---

🔧 Fork this repo

📲 Upload video preview or screenshot

🎨 Customise site in `site-config.js`, `main.scss`, `manifest.json`, `translations/*`.

---

- [Documentation](https://onefx.js.org/doc.html?utm_source=github-iotex-explorer)
- [Contributing](https://onefx.js.org/contributing.html?utm_source=github-iotex-explorer)

## Getting Started

OneFx is a full-stack framework for building web apps. Here are the features you'll find in Onefx.js:

- server side rendering and universal rendering with react and redux
- ES2017, JSX, TypeScript support out of the box
- server-side development via Koa.js

### Create a project

```bash
git clone git@github.com:puncsky/onefx-starter-app-landing-page.git my-awesome-project
```

### Run your project

This is intended for \*nix users. If you use Windows, go to [Run on Windows](#run-on-windows). Let's first prepare the environment.

```bash
cd my-awesome-project

nvm use 10.15.0
npm install

# prepare environment variable
cp ./.env.tmpl ./.env
```

#### Development mode

To run your project in development mode, run:

```bash
npm run watch
```

The development site will be available at [http://localhost:5001](http://localhost:5001).

#### Production Mode

It's sometimes useful to run a project in production mode, for example, to check bundle size or to debug a production-only issue. To run your project in production mode locally, run:

```bash
npm run build-production
NODE_ENV=production npm run start
```

#### NPM scripts

- `npm run test`: test the whole project and generate a test coverage
- `npm run ava ./path/to/test-file.js`: run a specific test file
- `npm run build`: build source code from `src` to `dist`
- `npm run lint`: run the linter
- `npm run kill`: kill the node server occupying the port 5001.

## Credits

- Based on [Automatic App Landing Page](https://github.com/emilbaehr/automatic-app-landing-page) by [Emil Baehr](https://emilbaehr.com/) and (automatic-gatsbyjs-app-landing-page)[https://github.com/ImedAdel/automatic-gatsbyjs-app-landing-page] by Imed Adel
- Built using [OneFx.js](https://onefx.js.org)
- Uses [FontAwesome](https://fortawesome.github.io/Font-Awesome/)

## Author

[Tian Pan](https://tianpan.co/)

## License

[MIT](LICENSE)
