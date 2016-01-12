## *Under development*. First planned stable release is *0.1.0*.

# ractive-image

### What is this nonsense?
**ractive-image** is a [Ractive](https://github.com/ractivejs/ractive) component which sets out to grant a comfortable set of defaults not found in a traditional image tag. These comfortable defaults include:
+ Lazy loading
+ Placeholder images / boxes
+ Best-fit art-direction
+ `srcset` support (coming soon)

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