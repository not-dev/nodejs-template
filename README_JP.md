[英語](./README.md) / 日本語

<!-- ![](./res/) -->

# nodejs-template

Node.jsプロジェクトのためのボイラープレート。

## 特徴

これらを含む

* Node.js
* TypeScript
* eslint
* webpack
* GitHub Actions

## インストール

```sh
git clone https://github.com/not-dev/nodejs-template.git
```

## 使用方法

```sh
npm i -f
npm start
```

## ライセンス

* コード: MIT License
* ロゴ: CC BY-ND
* このプロジェクトはOSSを含みます

## 生成方法

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
GitHub >> .git, .gitignore, LICENSE, README.md, .github/workflows/main.yml
ADD >> .eslintignore, README_JP.md, webpack.common.ts, webpack.dev.ts, webpack.prod.ts, public/, res/, src/
EDIT >> eslintrc.yml, package.json, tsconfig.json
```
