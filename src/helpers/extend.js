/**
 * Extend objects
 *
 * @param  {Object} object - object being 'merged' into
 * @param  {Object} source - object to merge
 * @return {Object} the 'merged' or 'extended' object
 */
export function extend(object, source) {
    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            object[key] = source[key];
        }
    }
    return object;
}
