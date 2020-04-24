English / [Japanese](./README_JP.md)

<!-- ![](./res/) -->

# nodejs-template

Template repository for Node.js project.

## Features

Includes

* Node.js
* TypeScript
* eslint
* webpack
* Readme, License, gitignore, GitHub Actions

## Installation

```sh
git clone https://github.com/not-dev/nodejs-template.git
```

## Usage

```sh
npm i -f
npm start
```

## License

* Code: MIT License
* Logos: CC BY-ND
* This project includes open source software.

## How to make

```sh
# package.json
npm init -f
# eslintrc.yml
npm i -D eslint
npx eslint --init
# tsconfig.json
npm i -D typescript
npx tsc --init
# add webpack
npm i -D webpack webpack-cli webpack-dev-server webpack-merge
npm i -D clean-webpack-plugin copy-webpack-plugin html-webpack-plugin terser-webpack-plugin
npm i -D ts-node ts-loader @types/copy-webpack-plugin @types/terser-webpack-plugin @types/webpack-dev-server @types/webpack-merge @typescript-eslint/eslint-plugin @typescript-eslint/parser
---
GitHub >> .git, .gitidnore, LICENSE, README.md, .github/workflows/main.yml
ADD >> .eslintignore, README_JP.md, webpack.common.ts, webpack.dev.ts, webpack.prod.ts, public/, res/, src/
EDIT >> eslintrc.yml, package.json, tsconfig.json
```
