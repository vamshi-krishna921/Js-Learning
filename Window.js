//* =========================================
//* BOM Properties:
//* =========================================

//* 1:window object properties

//? window.console:
// Represents the browser's debugging console.
// Allows logging messages using methods like log(), warn(), and error().

//? window.innerWidth / window.innerHeight:
// Provides the width and height of the browser's content area (excluding toolbars and scrollbars).

//? window.scrollX / window.scrollY:
// Represents the number of pixels that the document is currently scrolled horizontally and vertically.

//? window.outerWidth / window.outerHeight:
// Provides the width and height of the whole browser window (including toolbars and borders).

//? window.localStorage:
// Provides a way to store key-value pairs persistently on the user's device.
// Allows storing data beyond the lifetime of a single page session.

//* Functions alert/confirm/prompt are also a part of BOM:
// They are directly not related to the document, but represent pure browser methods of communicating with the user.

//* 2:navigator Object:
//? The JavaScript navigator object is used for browser detection. It can be used to get browser information such as appName, appCodeName, userAgent etc.

console.log(window.navigator); // Navigator {vendorSub: '', productSub: '20030107', vendor: 'Google Inc.', maxTouchPoints: 0, scheduling: Scheduling, …}

//? navigator.userAgent (Property):
// Returns the user agent string of the browser.
console.log(window.navigator.userAgent); // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36

//? navigator.language (Property):
// Returns the language preference of the user's browser.
console.log(navigator.language);

//? navigator.cookieEnabled (Property):
// Indicates whether cookies are enabled in the browser.
console.log(navigator.cookieEnabled); // true

//? navigator.onLine (Property):
// Indicates whether the browser is online.
console.log(navigator.onLine);

//* 3: History object

// The JavaScript history object represents an array of URLs visited by the user. By using this object, you can load previous, forward or any particular page.

console.log(window.history); // History {length: 18, scrollRestoration: 'auto', state: null, pushState: ƒ, replaceState: ƒ}
console.log(window.history.back()); // method loads the previous URL (page) in the history list
console.log(window.history.forward()); // method loads the next URL (page) in the history list
console.log(window.history.go(0)); // reloads the page 
console.log(window.history.go(1)); // method loads the next URL (page) in the history list , same as forward()
console.log(window.history.go(-1)); // same as backward()
console.log(window.history.go(2)); //  Go forward 2 Pages
console.log(window.history.go(-2)); //  Go back 2 Pages


//* 4: location Object:
// Represents the current URL of the browser.

console.log(window.location); // Location {ancestorOrigins: DOMStringList, href: 'chrome://new-tab-page/', origin: 'chrome://new-tab-page', protocol: 'chrome:', host: 'new-tab-page', …}

//? window.location.href (Property):
// Returns or sets the complete URL of the current page.
console.log(window.location.href); // chrome://new-tab-page/

//? window.location.hostname (Property):
// Returns the domain name of the web host.
console.log(window.location.hostname); // www.w3schools.com 

console.log(window.location.origin); // The origin property returns the protocol, hostname and port number of a URL.The origin property is read-only.

//? window.location.assign(url) (Method):
// Navigates to the specified URL.
window.location.assign("https://www.google.com"); // Loads the google in same window

//? window.location.reload(forceReload) (Method):
// Reloads the current page.
window.location.reload(true);

//? window.location.search (Property):
// Returns the query string part of the URL.
console.log(window.location.search);
// o/p = "?name=John&age=25"

//* 5: screen Object:
// Represents information about the user's screen.
console.log(window.screen); // Screen {availWidth: 1536, availHeight: 912, width: 1536, height: 960, colorDepth: 24, …}

//? window.screen.width and window.screen.height (Properties):
// Represent the width and height of the user's screen.
console.log(window.screen.width); // 1536

console.log(window.screen.height); // 960

//? window.screen.availWidth and window.screen.availHeight (Properties):
// Represent the available width and height of the user's screen (excluding taskbars).
console.log(window.screen.availWidth); // 1536

//? window.screen.colorDepth (Property):
// Returns the number of bits used to represent the color of each pixel.
console.log(window.screen.colorDepth); // 24

//? window.screen.orientation (Property):
// Returns the current orientation of the user's screen. console.log(window.screen.orientation).
console.log(window.screen.orientation); // ScreenOrientation {angle: 0, type: 'landscape-primary', onchange: null}

//? window.screen.pixelDepth (Property):
// Returns the number of bits used to represent each pixel.
console.log(window.screen.pixelDepth); // 24
