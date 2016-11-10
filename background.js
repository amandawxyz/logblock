function contains(string1, string2) {
  return string1.indexOf(string2) != -1;
}

/**
 * @param {string} url - url to check against the Gate. Needs to 
 * be url as we will check based on understanding of urls.
 * 
 * Returns true if we should gate
 */
function shouldGate(url) {
  if (contains(url, "youtube")
  || contains(url, "facebook")
  || contains(url, "reddit")) {
    return true;
  }
  return false;
}

previousurl = "";

chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
          console.log("Url being analyzed: " + details.url);
          console.log("Previous redirect Url: " + previousurl);
          if (shouldGate(details.url)) {
            previousurl = details.url;
            return {redirectUrl: chrome.extension.getURL("block.html")}; 
          }

          return {};
        },
  {
    urls: [
      "<all_urls>"
    ],
    types: ["main_frame"]
  },
  ["blocking"]);