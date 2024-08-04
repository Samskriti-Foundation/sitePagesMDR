// Function to construct the URL
function constructURL(subfolder) {
    var basePath = document.location.protocol + "//" + document.location.host + document.location.pathname;
    // Remove the file name if present (e.g., index.html)
    basePath = basePath.replace(/\/[^\/]*$/, '/');
    return basePath + subfolder + "/index.html";
}
