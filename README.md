# X-BUILD
[![Build Status](https://travis-ci.org/codexu/x-build.svg?branch=master)](https://travis-ci.org/codexu/x-build)
[![](https://img.shields.io/npm/v/x-build.svg)](https://www.npmjs.com/package/x-build)
[![](https://img.shields.io/npm/dm/x-build.svg)](https://www.npmjs.com/package/x-build)
[![](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/codexu/x-build/blob/master/LICENSE)

X-BUILD is a scaffolding tool for small projects. It can quickly initialize the project directory in a few seconds through terminal commands, and solve the problems of automation, performance, modularity, specification, adaptive layout, etc. in development, and help you generate better code. It consists of two parts: a project generator based on the Node.js environment, which is an NPM package installed in the global environment, and a webpack-based development and production environment that configures various requirements.

## 📚 Documentation

[English](https://codexu.github.io/) | [简体中文](https://codexu.github.io/zh/)

## ✨ Features

**scaffold:**

Automatic creation of project directory (custom / fast)

Automatically install dependencies / auto-initialize Git

Generate profiles for more flexible options

**Development / Production Environment:**

webpack4 based development environment

Support for CSS preprocessors (sass, less, stylus)

Support for TypeScript & TSLint or Babel & ESLint

Provide an optional adaptive solution

Data interface module is automatically loaded

## 🎯 Install

```
npm install -g x-build
```

## 🚀 Usage

Create a new project with the following instructions:

```
x-build create [name]
```

Go to the created directory and start webpack devServer via npm or yarn:

```
cd [name]
npm run serve
```

## License

[MIT](https://github.com/codexu/x-build/blob/master/LICENSE)
