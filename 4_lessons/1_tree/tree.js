"use strict";


function getChildVariant1(element, nesting = 0) {
  nesting++;
  element.childNodes.forEach(function (child) {
    if (child.nodeName) console.log('>'.padStart(nesting, '-') + child.nodeType + ' ' + child.nodeName, child.nodeValue);
    if (child.childNodes.length) getChildVariant1(child, nesting);
  });

}

function getChildVariant2(element, nesting = 0) {
  nesting++;
  for (let child = element.firstChild; child; child = child.nextSibling) {
    if (child.nodeName) console.log('>'.padStart(nesting, '-') + child.nodeType + ' ' + child.nodeName, child.nodeValue);
    getChildVariant2(child, nesting);
  }
}


function getChildVariant3(element, nesting = 0) {
  nesting++;
  for (let child of element.childNodes) {
    getChildVariant3(child, nesting);
    if (child.nodeName) console.log('>'.padStart(nesting, '-') + child.nodeType + ' ' + child.nodeName, child.nodeValue);
  }
}

//console.table(getChild(document.body));
getChildVariant1(document);
getChildVariant2(document);
getChildVariant3(document);

//console.table(document.body);