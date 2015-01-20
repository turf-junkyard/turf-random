turf-random
===
[![build status](https://secure.travis-ci.org/Turfjs/turf-random.png)](http://travis-ci.org/Turfjs/turf-random)

Generates random GeoJSON data for testing purposes

## API

### `turf.random([type='point'], [count=1], options, options.bbox, [options.num_vertices=10], [options.max_radial_length=10])`

Generates random GeoJSON data, including Points and Polygons, for testing and experimentation.

* `[type='point']` (`String`): type of features desired. Valid values are &#39;points&#39; or &#39;polygons&#39;
* `[count=1]` (`Number`): how many geometries should be generated.
* `options` (`Object`): relevant to the feature desired. Can include:
* `options.bbox` (`Array.<number>`): a bounding box inside of which geometries are placed. In the case of points, they are guaranteed to be within this bounds,while polygons have their centroid within it.
* `[options.num_vertices=10]` (`Number`): the number of vertices added to polygon features.
* `[options.max_radial_length=10]` (`Number`): the total number of decimal degrees longitude or latitude that a polygon can extent outwards tofrom its center.

```js
var points = turf.random('points', 100, {
  bbox: [-70, 40, -60, 60]
});
//=points
var polygons = turf.random('polygons', 4, {
  bbox: [-70, 40, -60, 60]
});
//=polygons
```
