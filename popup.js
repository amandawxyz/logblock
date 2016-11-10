/**
 * Get the URL of the current active tab
 *
 * @param {function(string, string)} callback - called when the URL of the current tab
 *   is found. First param is error message if there is one, second param is result.
 */
function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var url = tabs[0].url;

    if (!(typeof url == 'string')){
      var error = 'tab.url should be a string, you may not have active tab permissions'
    }

    callback(error, url);
  });
}

function showText(text) {
  document.getElementById('text').textContent = text;
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(error, url) {
    if (error) {
      showText("There was an error")
      return console.error(error);
    }
    showText('Current tab is ' + url);
  });
});
