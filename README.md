# Doggo App

Implemented using React, Redux and Bootstrap

Created using [Dog CEO API ](https://dog.ceo/dog-api/)

Requires Node.js 22.12+. Run `npm ci`, then `npm run dev`. `npm test` checks initial, successful, and missing-breed image states. `npm run build` updates the tracked `docs/` site for GitHub Pages. The Windows aliases `wdev` and `wbuild` run the same portable commands.

Vite replaces Webpack/Babel and Dart Sass replaces Node Sass. React/Redux behavior is retained, Axios is updated, and Bootstrap 5 supplies the existing grid/cards. Assets use relative URLs so the generated site can be hosted under `/doggo-app/`. The production build targets modern ES2020 browsers.
