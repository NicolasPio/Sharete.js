# Sharete.js
> Create your social share buttons easily customizable

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

Customize you buttons as you wish, with your CSS code.

__Not__ necessary jQuery :smile:

## Usage
First add Sharete in your HTML

```html
<script async src="sharete.js"></script>
```

### Simple method:
```javascript
Sharete('.bt--facebook').facebook({ appId: '123456789' });
Sharete('.bt--twitter').twitter();
Sharete('.bt--gplus').gplus();
```

### Complete method:
API with all possible data so far customizable
```javascript
// Twitter
Sharete('.bt--twitter').twitter({
    text: 'Sharete.js is very simple to use',
    hashtags: 'JavaScript, OpenSource', // Separate by comma and  without '#'
    via: 'NicolasPio' // Mention a user
});
```
## Supported social networks
Did not find social network what you need? Create a [issue](https://github.com/NicolasPio/Sharete.js/issues/new)

- [x] Facebook
- [x] Twitter
- [x] Google+

Todo:
- [ ] Pinterest
- [ ] Linkedin
- [ ] Evernote
- [ ] Reddit
- [ ] Digg
- [ ] Tumblr
- [ ] StumbleUpon

## License
The MIT License (MIT)

Copyright (c) 2015 Nicolas Pio
