var random = require('geojson-random');

/**
 * Generates random GeoJSON data, including Points and Polygons, for testing
 * and experimentation.
 *
 * @module turf/random
 * @param {String} [type='point'] type of features desired. Valid values
 * are 'points' or 'polygons'
 * @param {Number} [count=1] how many geometries should be generated.
 * @param {Object} options relevant to the feature desired. Can include:
 * @param {Array<number>} options.bbox a bounding box inside of which geometries
 * are placed. In the case of points, they are guaranteed to be within this bounds,
 * while polygons have their centroid within it.
 * @param {Number} [options.num_ertices=10] the number of vertices added
 * to polygon features.
 * @param {Number} [options.max_radial_length=10] the total number of decimal
 * degrees longitude or latitude that a polygon can extent outwards to
 * from its center.
 * @return {FeatureCollection} generated random features
 * @example
 * var points = turf.random('points', 10);
 * //=points
 */
module.exports = function(type, count, options) {
    options = options || {};
    count = count || 1;
    switch (type) {
        case 'point':
        case 'points':
        case undefined:
            return random.point(count, options.bbox);
        case 'polygon':
        case 'polygons':
            return random.polygon(
                count,
                options.num_vertices,
                options.max_radial_length,
                options.bbox);
        default:
            throw new Error('Unknown type given: valid options are points and polygons');
    }
};
