# Spike - Base Template

[![tests](http://img.shields.io/travis/static-dev/spike-tpl-base/master.svg?style=flat)](https://travis-ci.org/spike-tpl-base/spike-tpl-base) [![dependencies](http://david-dm.org/static-dev/spike-tpl-base.svg?path=root)](https://david-dm.org/static-dev/spike-tpl-base?path=root)

The base template for the latest [spike](https://github.com/static-dev/spike) version. The features in this template are designed by the [carrot](https://github.com/carrot) tech team.

## Installation

### With Spike

This is the default template for use within [spike](https://github.com/static-dev/spike) when running `spike new` without a template option.

- `npm i spike -g`
- `spike new <projectname>`

### Standalone

[Spike](https://github.com/static-dev/spike) uses [sprout](https://github.com/carrot/sprout) internally to generate it's project templates. This means you can even use this template without [spike](https://github.com/static-dev/spike) by using [sprout](https://github.com/carrot/sprout) directly.

- `npm i sprout-cli -g`
- `sprout add spike-tpl-base git@github.com:static-dev/spike-tpl-base.git`
- `sprout new spike-tpl-base <myproject>`

## Options

- **name** (name of template)
- **description** (a short description of the template)
- **github_username** (name of github user)
