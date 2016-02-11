document.addEventListener("DOMContentLoaded", function(){
  //Use CLOSURES to solve these two problems
  
  //PART A
  //Build 6 paragraphs with filler text inside #main. When you click on the paragraph
  //the index number of the paragraph becomes the innerHTML. Eg:  1, 2, 3, 4, 5, 6
  //Use the numbers 1  - 6, not 0 - 5
  
  
  //PART B 
  //after the user clicks on the h2 heading inside #second, start adding list items to the
  //unordered list #theList. Use a for loop and a setTimeout. The delay for the first list item to appear
  //is one second, two second delay for the second one, three second delay for the third and so on.
  //Add a total of five list items to the ul.
  //EACH LIST ITEM'S TEXT SHOULD INCLUDE ITS INDEX NUMBER AS PART OF THE TEXT
  
function partA() {

var main = document.querySelector("#main");

for (var i = 1; i < 7; i++) {

var p = document.createElement("p");
p.innerHTML = "Click Me";
main.appendChild(p);
//create an IIFE statement
p.addEventListener("click", (function (i) {
return function () {
this.innerHTML = i;
};

})(i));
}
}

partA();



var heading = document.querySelector("#third");

var ulist = document.getElementById("theList");

second.addEventListener("click", function() {
  for (var i = 1; i < 6; i++)
    (function (i){
    setTimeout(makelist(ulist, i), (i * 1000));
  })(i);
});

  function makelist(ulist, i){
    return function () {
      var list = document.createElement("li");
      list.textContent = "Hi" + " " + (i);
      ulist.appendChild(list);
    };
  }
});




