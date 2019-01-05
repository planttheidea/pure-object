# pure-object changelog

## 2.0.1

- Ensure generate prototype is also a pure object
- Fix security issue related to old versions of `webpack-dev-server` and `react-dom` in development

## 2.0.0

- Add support for symbols in the object being cloned
- Convert `dist` builds to use `rollup` for tinier footprint

**BREAKING CHANGES**

- CommonJS consumers now need to specify `.default` when using `require`

## 1.1.1

- Update webpack (and other dependencies) for smaller build

## 1.1.0

- Add support for symbols in the prototype

## 1.0.1

- README update

## 1.0.0

- Initial release!
