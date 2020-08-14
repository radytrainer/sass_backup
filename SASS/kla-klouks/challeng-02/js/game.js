// Constant varaible
const PLAY_DELAY = 2000;
const IMAGE_FILES = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];

// Function setElementVisible : hide or display the given element
// - param elementId : the ID of the element
// - param isVisible : if true, display element - oterwise hide it
var setElementVisible = (elementId, isVisible) => {
  var displayProperty = isVisible ? "block" : "none";
  document.querySelector("#" + elementId).style.display = displayProperty;
};

// Function setResultHtml :
// - param html : the THML  code for the resutl DIV
var setResultHtml = html => {
  var result = document.querySelector("#resultId");
  result.innerHTML = html;
};


// get image
function getImage() {
  var result = "";
  for(let i = 0; i < 3; i++) {
    var image = IMAGE_FILES[i];
    result += `<img src="images/${image}" width="100">`;
  }
  return result;
}



// Function onPlayClicked :
var onPlayClicked = () => {

  setResultHtml("Wait!...");

  setTimeout(() => {

    setResultHtml(getImage());// image

    setElementVisible("playButtonId", false);
    setElementVisible("clearButtonId", true);

  }, PLAY_DELAY);

  
};

// Function onClearClicked :
var onClearClicked = () => {
  // 1 Display the result
  setResultHtml("CLEARED !");

  //  2 Update buttons
  setElementVisible("playButtonId", true);
  setElementVisible("clearButtonId", false);
};

// ------------------------------------------------------------------------------------
// MAIN PROGRAMM
// ------------------------------------------------------------------------------------

// 1. Hide the clear button
setElementVisible("clearButtonId", false);

// 2. Bind buttons to events
var playButton = document.querySelector("#playButtonId");
playButton.addEventListener("click", onPlayClicked);

var clearButton = document.querySelector("#clearButtonId");
clearButton.addEventListener("click", onClearClicked);
