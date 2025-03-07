const outputSource = document.getElementById('output')
document.getElementById('file').onchange = function() {
  var file = this.files[0];

  var reader = new FileReader();
  reader.onload = function() {
    // Entire file
    const text = this.result;
    outputSource.innerText = text
    let cleanedText = [];
    let c = text.indexOf("mul");
    for (let a = 0; a < 10; a++){
      console.log(text.indexOf(c));
      text.replace("mul(\d,\d)","*");
    }
    
    
    outputSource.innerText = ("Number of Safe reports?\nSafe:\n" + "\nBad:\n " +
      "\n\nAnswer List:\n" +
      "\n\nYour provided lists\n" + text);
  };
  reader.readAsText(file);
};