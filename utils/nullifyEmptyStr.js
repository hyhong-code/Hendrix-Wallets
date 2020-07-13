/**
 * Checks for empty string and returns null
 * @function nullifyEmptyStr
 * @param {string} string - string to check and nullify
 * @returns same string as given if not empty, null otherwise
 */
module.exports = (string) => (string && string.length ? string : null);
