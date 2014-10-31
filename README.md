# jquery.backgroundcover

This jQuery plugin is a smarter version of the CSS3 feature "background-size: cover", to cover the area of a HTML element with a background image. It adds two features:
* Safe Area: it is possible to define a safe area of the image, that will never be cropped. See below for further information.
* IE8 compatibility (or any other browser that does not support background-size): instead of using a CSS background image, an img element is added and positioned behind.

## Safe Area

A sometimes problematic issue of the default CSS behaviour of "background-size: cover" is that it may cut of important parts of the image to fill up the space. Especially when the aspect ratio is very different (say an image in a landscape format viewed on a smartphone in portrait mode), substantial amounts of the image will be cropped. Not that good, if that happens to be the important, story telling parts of the image (maybe a face).

The solution is to tell the plugin about a so called safe area, that may not be cropped. The background image will then be scaled as much as the safe area allows to cover its element. That might however leed to the situation, that the image cannot be scaled as much to wholy cover its element. It works the better, the smaller the safe area is. If you define the whole image as the safe area, it will actually behave like "background-size: contain".

Have a look at the [demo](http://rawgithub.com/kaliber5/jquery-backgroundcover/master/demo/index.html) to see the effect!

## Installation

Just include the script:

```HTML
<script src="/path/to/jquery.backgroundcover.min.js"></script>
```

## Usage

Fire up the plugin:

```JavaScript
$("#bg").backgroundcover(options);
```
    
It will set the CSS properties background-image, background-size and background-position and update them whenever the window is resized. It will interfere with your document as little as possible, so it is up to you to set other CSS properties as required, for example "background-repeat: no-repeat".
When you set up your CSS like the following, you will get a CSS only fallback in case JavaScript is not available and thus the plugin is not used (graceful degradation):

```CSS
background-image: url(/path/to/image.jpg);
background-position: center center;
background-size: cover;
background-repeat: no-repeat;
```

Call methods on existing plugin:

```JavaScript
$("#bg").data("backgroundcover").setSafearea("100,200,300,400");
$("#bg").data("backgroundcover").setImage(url);
```

Invoking the plugin on an element with existing plugin will just update its options. So the following code is equivalent to the above:

```JavaScript
$("#bg").backgroundcover({
    image: url,
    safearea: "100,200,300,400"
});
```


## Configuration

The following configuration options are available. They may be provided either with the options object when initializing the plugin, or as HTML5 data-* attributes on the HTML element. The following examples are equivalent.

Options on plugin initialization:

```HTML
<div id="bg"></div>
<script type="text/javascript">
$("#bg").backgroundcover({
    safearea: "10%,30%,50%,80%"
});
</script>
```

Options taken form data-* attributes:

```HTML
<div id="bg" data-safearea="10%,30%,50%,80%"></div>
<script type="text/javascript">
$("#bg").backgroundcover();
</script>
```

### image

```JavaScript
{
    image: "/path/to/image.jpg"
}
```
         
The URL to the image to use as the background. If none is provided, the plugin looks for the background-image CSS property and will take that image if available.

### saferea

```JavaScript
{
    safearea:"20%,10%,70%,80%"
}
```

The coordinates of the safe area (see above), as a comma seperated list of left, top, right and bottom coordinates, or in other words x1,y1,x2,y2, where (x1,y1) is the upper left point of the bounding box, and (x2,y2) the lower right.
The values may be either percentages (relative to the image's width and height), or absolute pixel values (just numbers without unit, e.g. "50,100,380,495").

### resizeInterval

```JavaScript
{
    resizeInterval:100
}
```

Change the default interval setting of 250ms for how often to poll for changes of the elements width and height.


## Authors

[Simon Ihmig](https://github.com/simonihmig) @ [kaliber5](http://www.kaliber5.de)
