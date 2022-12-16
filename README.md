# run-textlint-on-deno

This repository is a proof of concept for textlint runs on Deno.

## Files
- `textlint.ts` : script to import required modules and to run textlint
- `.textlintrc` : config file of textlint

## Usage

- single file

`$ deno run --allow-env --allow-read --allow-sys textlint.ts test.md`

- multiple files

`$ deno run --allow-env --allow-read --allow-sys textlint.ts test.md test.tex`

`$ find . -type f -name '*.md' -or -name '*.tex' | xargs deno run --allow-env --allow-read --allow-sys textlint.ts`
