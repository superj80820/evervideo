/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
  runApp();
});

/**
 * Listens for the app restarting then re-creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 */
chrome.app.runtime.onRestarted.addListener(function() {
  runApp();
});

/**
 * Creates the window for the application.
 *
 * @see http://developer.chrome.com/apps/app.window.html
 */
function runApp() {
  chrome.app.window.create('browser.html', {
  	id: "browserWinID",
    innerBounds: {
      'width': 1024,
      'height': 768
    },
    frame: "none",
    resizable: true,
    alwaysOnTop: true
  }, function (appwindow) {
      // workaround. should not use `onloadstart`. should use `onload`
        appwindow.contentWindow.onloadstart = function () {
            appwindow.contentWindow.document.getElementById('minimize').onclick = function () {
                appwindow.minimize();
            }
        }
    })
}

