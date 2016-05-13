# Spike - Base Template

[![tests](http://img.shields.io/travis/static-dev/spike-base/master.svg?style=flat)](https://travis-ci.org/spike-base/spike-base) [![dependencies](http://david-dm.org/static-dev/spike-base.svg?path=root)](https://david-dm.org/static-dev/spike-base?path=root)

The base template for the latest [spike](https://github.com/static-dev/spike) version. The features in this template are designed by the [carrot](https://github.com/carrot) tech team.

## Installation

### With Spike

This is the standard template for use within [spike](https://github.com/static-dev/spike).

- `npm i spike -g`
- `spike new <projectname>`

### Standalone

[Spike](https://github.com/static-dev/spike) uses the project [sprout](https://github.com/carrot/sprout) internally to generate it's project templates. This means you can use this template without [spike](https://github.com/static-dev/spike) by using [sprout](https://github.com/carrot/sprout) directly.

- `npm i sprout-cli -g`
- `sprout add spike-base git@github.com:static-dev/spike-base.git`
- `sprout new spike-base <myproject>`

## Options

- **name** (name of template)
- **description** (a short description of the template)
- **github_username** (name of github user)
