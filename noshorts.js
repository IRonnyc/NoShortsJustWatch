/**
 * Replaces '.com/shorts' with '.com/watch' in the passed string.
 * 
 * @param {String} path path to replace shorts with watch in.
 * @returns the updated path
 */
function replaceShorts(path) {
    return path.replace(".com/shorts/", ".com/watch?v=");
}

/**
 * Replaces '.com/shorts/' with '.com/watch?v=' in the current url and redirects to that.
 */
function redirect() {
    window.location.replace(replaceShorts(window.location.toString()));
}

redirect();