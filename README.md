# Sharete.js (WIP)
> Create your social share buttons easily customizable

Customize you buttons as you wish, with your CSS code.

__Not__ necessary jQuery :smile:

[Live demo](https://nicolaspio.github.io/Sharete#demo)

## Usage
First add Sharete in your HTML

```html
<script async src="sharete.js"></script>
```

#### Simple method:
Share current page without customization of title or image. By default the library get current title and description of your page, and og:image if exists.

```javascript
Sharete('.bt--facebook').facebook();
Sharete('.bt--twitter').twitter();
Sharete('.bt--gplus').gplus();
```

#### Complete method:
API with all possible data so far customizable

```javascript
Sharete('.bt--facebook').facebook({
  'title': 'My Page',
  'image': 'http://dummyimage.com/500x450.jpg'
});

Sharete('.bt--twitter').twitter({
  'title': 'Visite my page',
  'url': 'http://mypage-example.com',
  'hashtag': '#now'
});
```

## Supported social networks
Did not find social network what you need? Create a [issue](https://github.com/NicolasPio/Sharete/issues/new)

- ~~Facebook~~
- ~~Twitter~~
- ~~Google+~~
- ~~Pinterest~~
- ~~Linkedin~~
- ~~Evernote~~

Maybe:
- ~~Reddit~~
- ~~Digg~~
- ~~Tumblr~~
- ~~StumbleUpon~~

## Tests
Seed Sharete tests in you browser [clicking here](https://rawgit.com/NicolasPio/Sharete/test/SpecRunner.html)
