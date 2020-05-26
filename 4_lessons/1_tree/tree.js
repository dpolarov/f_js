"use strict";


function getChild1(element, position){
    position++;
    element.childNodes.forEach(function( child ){
     
      if ( child.nodeName ) console.log('>'.padStart(position, '-')  + child.nodeType + ' ' + child.nodeName, child.nodeValue);
      if ( child.childNodes.length) getChild1(child, position);
       
   });
   
}

function getChild2(element, position){
    position++;
    for (let child = element.firstChild; child; child = child.nextSibling) {
      if ( child.nodeName ) console.log('>'.padStart(position, '-')  + child.nodeType + ' ' + child.nodeName, child.nodeValue);
      getChild2(child, position);
    }
}

function getChild2(element, position){
    position++;
    for (let child = element.firstChild; child; child = child.nextSibling) {
      if ( child.nodeName ) console.log('>'.padStart(position, '-')  + child.nodeType + ' ' + child.nodeName, child.nodeValue);
      getChild2(child, position);
    }
}

function getChild3(element, position){
    position++;
        for (let child of element.childNodes){
          getChild3(child, position);
          if ( child.nodeName ) console.log('>'.padStart(position, '-')  + child.nodeType + ' ' + child.nodeName, child.nodeValue);
        }
    }

//console.table(getChild(document.body));
getChild1(document,0);
getChild2(document,0);
getChild3(document,0);

//console.table(document.body);