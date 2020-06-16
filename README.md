# 🦕 Deno isNumber

## Usage

```typescript
import { isNumber } from "https://raw.githubusercontent.com/ajimae/isNumber/master/mod.ts";

var numberOne = 5;
const checkOne = isNumber(numberOne);
console.log(checkOne); // true

var numberTwo = '5';
const checkTwo = isNumber(numberTwo);
console.log(checkTwo); // false
```

## Test

```bash
# unit tests - first clone this repo to your local machine the run
deno test
```

## Resources

JavaScript
- [JavaScript isNaN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/isNaN)
- [JavaScript typof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

Deno
- [Deno Website](https://deno.land)
- [Deno documentation](https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts)
- [Deno Standard Library](https://deno.land/std)

