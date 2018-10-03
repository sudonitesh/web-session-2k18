// // Create a "close" button and append it to each list item initially


var myNodelist = document.getElementsByTagName("LI");

for (var i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var cross = document.createTextNode("\u00D7"); //\u00D7 is multiplication sign in Unicode char
    //HTML elements often consists of both an element node and a text node.
    // To create a header (e.g. <h1>), you must create both an
    // <h1> element and a text node:
    span.className = "close";
    span.appendChild(cross);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");

for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);

    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }

    document.getElementById("myInput").value = ""; //to again empty text area

    var span = document.createElement("SPAN");
    var cross = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(cross);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}