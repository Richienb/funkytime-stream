# Funkytime Stream [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/funkytime-stream/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/funkytime-stream)

Stream data updates from [funkytime.tv](https://funkytime.tv).

[![NPM Badge](https://nodei.co/npm/funkytime-stream.png)](https://npmjs.com/package/funkytime-stream)

## Install

```sh
npm install funkytime-stream
```

## Usage

```js
const funkytimeStream = require("funkytime-stream");

funkytimeStream().on("newtopic", ({ title, url }) => console.log(title, url))
//=> KITi Assistant Release https://funkytime.tv/forums/topic/kiti-assistant-release/
```

## API

### funkytimeStream(options?)

#### options

Type: `object`

##### interval

Type: `number`\
Default: `5000`

Interval in milliseconds before checking for new topics.
