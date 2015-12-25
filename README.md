# filter-properties

### Filter object properties using a whitelist

## Installation

```javascript
npm install filter-properties --save
```

## API

### `filter(Array whitelist, Object object)` -> `Object`

The `whitelist` is an `Array` of strings.

```javascript
var whitelist = [ "username" ]
```

The `object` is the input data.

```javascript
var object = { username: "acro", gender: "male" }
```

Applying the `filter` function onto these two inputs will return a filtered object.

```javascript
var filter = require("filter-properties")

var filtered = filter(whitelist, object)
// { username: "acro" }
```
## Dependencies

This library has no dependencies.

## License

MIT