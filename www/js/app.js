/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }


// ...additional event handlers here...

var menuData = [];
var moduleData = [];
var chapterData = [];
var questionData = [];

function onBackKeyDown() {
    console.log('back button handler');
    var activePage = $.mobile.activePage.attr('id');
    alert(activePage)
}


function hideObject(id) {
    document.getElementById(id).style.display = "none";
}

function showObject(id) {
    document.getElementById(id).style.display = "block";
}
