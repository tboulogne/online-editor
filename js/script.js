var html = $("#htmlContent");
var css = $("#cssContent");
var js = $("#jsContent");
var outputFrame = document.getElementById("outputBox");
var frameHead = outputFrame.contentDocument.getElementsByTagName('head')[0];
var frameBody = outputFrame.contentDocument.getElementsByTagName('body')[0];

frameHead.appendChild(document.createElement('style'));

html.keyup(function() {
  console.log("html keyup !");
  let htmlContent = html.val();
  // output.attr("srcdoc",originalContent);
  frameBody.innerHTML = htmlContent;
});

css.keyup(function() {
  console.log("css keyup !");
  let cssContent = css.val();
  frameHead.firstChild.innerText = cssContent;
});