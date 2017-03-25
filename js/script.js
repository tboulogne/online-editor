var html = document.getElementById("htmlContent");
var css = document.getElementById("cssContent");
var js = document.getElementById("jsContent");
var outputFrame = document.getElementById("outputBox");
var frameHead = outputFrame.contentDocument.getElementsByTagName('head')[0];
var frameBody = outputFrame.contentDocument.getElementsByTagName('body')[0];

frameHead.appendChild(document.createElement('style'));

html.onkeyup = function() {
  // console.log("html keyup !");
  let htmlContent = html.value;
  // output.attr("srcdoc",originalContent);
  frameBody.innerHTML = htmlContent;
};

css.onkeyup = function() {
  // console.log("css keyup !");
  let cssContent = css.value;
  frameHead.firstChild.innerText = cssContent;
};