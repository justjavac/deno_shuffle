# deno_shuffle

[![tag](https://img.shields.io/github/release/justjavac/deno_shuffle)](https://github.com/justjavac/deno_shuffle/releases)
[![ci](https://github.com/justjavac/deno_shuffle/actions/workflows/ci.yml/badge.svg)](https://github.com/justjavac/deno_shuffle/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/justjavac/deno_shuffle)](https://github.com/justjavac/deno_shuffle/blob/master/LICENSE)

The
[Fisher-Yates (aka Knuth) shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle)
for Deno. See [a great visualization](https://bost.ocks.org/mike/shuffle/).

## Usage

```ts
import shuffle from "https://deno.land/x/shuffle/mod.ts";

shuffle(["a", "b", "c", "d"]);
```

## Example

```bash
deno run https://deno.land/x/shuffle/example.ts
```

## About

- Fisher-Yates shuffle: <https://en.wikipedia.org/wiki/Fisher-Yates_shuffle>
- a great visualization: <https://bost.ocks.org/mike/shuffle/>

## License

[deno_shuffle](https://github.com/justjavac/deno_shuffle) is released under the
MIT License. See the bundled [LICENSE](./LICENSE) file for details.
