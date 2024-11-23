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
console.log(window.screen.availHeight); // 912

//? window.screen.colorDepth (Property):
// Returns the number of bits used to represent the color of each pixel.
console.log(window.screen.colorDepth); // 24

//? window.screen.orientation (Property):
// Returns the current orientation of the user's screen.
console.log(window.screen.orientation); // ScreenOrientation {angle: 0, type: 'landscape-primary', onchange: null}

//? window.screen.pixelDepth (Property):
// Returns the number of bits used to represent each pixel.
console.log(window.screen.pixelDepth); // 24


//* ==============================
//* DOM IN JAVASCRIPT
//* ==============================

//? When a web browser loads an HTML document, it parses the HTML source code and creates a tree-like structure known as the Document Object Model (DOM). This DOM tree represents the structure of the HTML document, with each HTML element being a node in the tree.

//? This entire DOM tree is then accessible to JavaScript as an object. JavaScript can interact with this object to manipulate the content, structure, and style of the document dynamically. The DOM essentially serves as an interface between the HTML document and JavaScript, providing a way for scripts to access and modify the document's structure and content.

//TODO The Document Object Model (DOM) is an Application Programming Interface (API). The DOM Tree is the structure of your HTML document, as represented by the DOM API. As stated, this API then gives us many methods and properties that we can use to manipulate the Tree, and therefore, by extension, the document.

//* Here is a types of nodes in js:

//? Element node:  An HTML tag, the tree building blocks.

//? Text node:  In the DOM tree, text content, including new lines, spaces, and tabs, is treated as text nodes.

//? Attribute node: An attribute of an element.

//? Comment node: Represent comments within the HTML document.

//? Processing instruction node:  A processing instruction node, such as <? xml-stylesheet … ?>.

//? Document node:  A document node.

//? Document type node: A document type node, such as <! DOCTYPE html>.


//* ==============================
//* DOM Properties and Methods
//* ==============================
//! DOM Properties:
// document
// getElementById(id)
// getElementsByClassName(className)
// getElementsByTagName(tagName)
// querySelector(selector)
// querySelectorAll(selector)
// innerHTML
// textContent
// style

//! DOM Methods:
// createElement(tagName)
// appendChild(node)
// removeChild(node)
// addEventListener(event, function)
// removeEventListener(event, function)
// setAttribute(name, value)
// getAttribute(name)
// parentNode / parentElement
// childNodes / children
// firstChild / firstElementChild
// lastChild / lastElementChild
// nextSibling / nextElementSibling
// previousSibling / previousElementSibling
// closest(selector)
// forEach (Array.from)

//* ==============================
//* DOM Navigation (used chatgpt interface (or) landing page)
//* ==============================

//TODO Every property/method has 2 versions, the one is node property and the other is element property.

//? document represents the entire document
// console.log(document);

//? Document.documentElement returns the Element that is the root element of the document (for example, the <html> element for HTML documents).
console.log(document.documentElement);

//? parentNode / parentElement:
// Navigate to the parent node or element.

console.log(document.parentElement); // NULL
console.log(document.parentNode); // NULL

// Document and DocumentFragment nodes can never have a parent, so parentNode will always return null. It also returns null if the node has just been created and is not yet attached to the tree.

//? childNodes / children:
// Navigate to child nodes or elements.

// childNodes is a property that returns a NodeList containing all child nodes of a given element, including text nodes and comment nodes.

console.log(document.childNodes); // NodeList(2) [<!DOCTYPE html>, html.dark]
console.log(document.head.childNodes); // NodeList(62) [meta, meta, link, meta, meta, meta, link, link, link, link, title, meta, meta, meta, meta, meta, meta, link, link, link, link, link, link, link, link, link, link, link, link, link, link, link, link, link, link, link, link, link, link, link, link, link, link, link, link, link, link, style, link, link, link, link, link, link, link, link, link, link, link, link, link, link]

// children is a property that returns a NodeList containing all child nodes of a given element, excluding text nodes and comment nodes.It gives the nodes of HTML collection.

console.log(document.children); // HTMLCollection [html.dark]
console.log(document.body.children); // HTMLCollection(10) [script, span.hidden, div.relative.flex.h-full.w-full.overflow-hidden.transition-colors.z-0, div.sr-only, div.sr-only, audio.fixed.bottom-0.left-0.hidden.h-0.w-0, span.pointer-events-none.fixed.inset-0.z-[60].mx-auto.my-2.flex.max-w-[560px].flex-col.items-stretc…, script, script, iframe]

//? firstChild / firstElementChild:
// Navigate to the first child node or element.

console.log(document.body.firstChild); // <script>...</script>
console.log(document.body.firstElementChild);  // <script>...</script>

//todo The Element suffix in firstElementChild and similar properties signifies that only element nodes are considered.

//? lastChild / lastElementChild:
// Navigate to the last child node or element.

console.log(document.body.lastChild); // <iframe>/...</iframe>

console.log(document.body.lastElementChild); // <iframe>/...</iframe>

//? nextSibling / nextElementSibling:
// Navigate to the next sibling node or element.
console.log(document.body.firstElementChild.nextElementSibling); // <span>...</span>

console.log(document.body.lastElementChild.nextElementSibling); // NULL 

//? previousSibling / previousElementSibling:
// Navigate to the previous sibling node or element.

console.log(document.body.firstElementChild.nextElementSibling.previousElementSibling); // <script>...</script>

console.log(document.body.lastElementChild.nextElementSibling.previousElementSibling); // VM2962:1 Uncaught TypeError: Cannot read properties of null (reading 'previousElementSibling')

console.log(document.body.firstElementChild.nextElementSibling.nextElementSibling.previousElementSibling); // <span>...</span>

console.log(document.body.firstElementChild.nextElementSibling.previousElementSibling.parentElement); // <body>..</body>

//? closest(selector):
// Find the closest ancestor of the current element that matches a given selector.

//* ==============================
//* DOM Filtering
//* ==============================

//? childNodes / children:
// Get a NodeList or HTMLCollection and filter based on your criteria.

//? Filtering Siblings:
//? nextSibling / nextElementSibling
//? previousSibling / previousElementSibling

//? closest(selector):
//? Find the closest ancestor that matches a given selector.
//? The closest(selector) method is used to find the closest ancestor of an element that matches a specified CSS selector. This method traverses up the DOM tree, starting from the current element, and returns the first ancestor that matches the provided selector. If no matching ancestor is found, it returns null.

//* ==============================
//* DOM Searching
//* ==============================
//? getElementById(id): Find an element by its ID.

//? getElementsByClassName(className): Find elements with a specific class name.

//? getElementsByTagName(tagName): Find elements with a specific tag name.

//? querySelector(selector): Find the first element that matches the specified CSS selector.

//? querySelectorAll(selector): Find all elements that match the specified CSS selector.

//* ============================================
//* DOM - CRUD (Create, Read, Update, Delete):
//* ============================================

//? createElement(tagName): Create a new HTML element.

//? appendChild(node): Append a node as the last child of a parent node.

//? removeChild(node): Remove a child node from its parent.

//? addEventListener(event, function): Create an event listener to handle events.

//? removeEventListener(event, function): Remove an event listener.

//? setAttribute(name, value): Set the value of an attribute on an element.

//? getAttribute(name): Get the value of a specific attribute on an element.

//? innerHTML: Read or update the HTML content of an element.

//? textContent: Read or update the text content of an element.

//* =============================
//* DOM - Iteration
//* =============================

//? Iteration:
//? forEach (Array.from): Iterate through NodeList or convert to an array for more flexible manipulation.

// Very important
//* When you use the browser's developer tools console to select an element and change its text content using JavaScript, you are directly manipulating the DOM object in memory. Since the DOM is a live representation of the document, any changes you make to the DOM objects are immediately reflected in the rendered web page.

//* However, these changes are typically temporary and exist only in the current session. When you refresh the page or navigate away, the browser reloads the original HTML document from the server, and the DOM is reconstructed during the parsing process. Any modifications made to the DOM objects during the previous session are lost, and the page reverts to its original state. 
