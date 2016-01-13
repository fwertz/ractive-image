# ractive-image
**ractive-image** is a [Ractive](https://github.com/ractivejs/ractive) [component](http://docs.ractivejs.org/latest/components) which sets out to grant a comfortable set of defaults, like:
+ Lazy loading
+ Placeholder images / boxes
+ Best-fit art-direction
+ `srcset` support (coming soon)


### Demo
Check out [this codepen](http://codepen.io/fwertz/pen/EPXOjJ) for a demonstration using [Waterfall.js](http://raphamorim.com/waterfall.js)

### Installation
`npm install ractive-image`

### Project Integration
Set up **ractive-image** like you would any other component.
```
Ractive.components[ "r-image" ] = require( "ractive-image" );
```
If not using modules, **ractive-image** will expose a **`RactiveImage`** global.


### Basic Usage
```
<r-image
    id="imgProfAvatar"
    height="150px"
    width="150px"
    placeholder="/v1/me/avatar?s=sample"
    src="/v1/me/avatar?s=med" />
```

### Events
+ `select`


### Testing
For now, I'm manually testing initial features and small additions. Test scripts will be a requirement before launching **v1.0.0**


### Contributing
Small project (and I'm new to writing public facing modules), so no preferences on contributions yet. PR's welcome, just name it something obvious.
