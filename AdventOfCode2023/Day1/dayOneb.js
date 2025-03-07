const outputSource = document.getElementById('output')
document.getElementById('file').onchange = function() {
  var file = this.files[0];
  // 54754 was too low;
  var reader = new FileReader();
  reader.onload = function() {
    // Entire file
    let text = this.result;
    text = text.replaceAll("one", "o1ne");
    text = text.replaceAll("two", "t2wo");
    text = text.replaceAll("three", "t3hree");
    text = text.replaceAll("four", "f4our");
    text = text.replaceAll("five", "f5ive");
    text = text.replaceAll("six", "s6ix");
    text = text.replaceAll("seven", "s7even");
    text = text.replaceAll("eight", "e8ight");
    text = text.replaceAll("nine", "n9ine");
    outputSource.innerText = text

    // By lines
    var lines = text.split('\n');
    let a = [];
    let answer = 0;
    for (var line = 0; line < lines.length; line++) {
      let b = lines[line];
      a = [];
      a.push(b[0]);
      for (let e = 1; e < b.length; e++){
        if(b[e] != "\r"){
          a.push(b[e]);
        };
      }
      let c = 0;
      let d = 0;
      for (let first = 0; first < a.length; first++){
        console.log (a[first] + " " + c);
        if(!isNaN(a[first])){
          c = parseInt(a[first])*10;
          break;
        };
      };
      for (let last = (a.length - 1); last >= 0; last--){
        console.log(a[last] + " " + d);
        if(!isNaN(a[last])){
          d = parseInt(a[last]);
          break;
        };
      };
      answer += c + d;    
    }
    
    outputSource.innerText = ("What is the sum of all of the calibration values?\nAnswer:\n" + answer +
      "\n\nYour provided lists\n" + text);
  };
  reader.readAsText(file);
};