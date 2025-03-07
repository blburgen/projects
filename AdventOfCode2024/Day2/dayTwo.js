const outputSource = document.getElementById('output')
document.getElementById('file').onchange = function() {
  var file = this.files[0];

  var reader = new FileReader();
  reader.onload = function() {
    // Entire file
    const text = this.result;
    outputSource.innerText = text

    // By lines
    var lines = text.split('\n');
    let a = [];
    let b = [];
    let answer = 0;
    let answerTwo = 0;
    for (var line = 0; line < lines.length; line++) {
      a = [];
      let c = lines[line].trim().split(' ');
      for (let d = 0; d < c.length; d++){
        if (c[d] != "") 
        {
          a.push(c[d]);
        }
      }
      let test = true;
      if (a[0] - a[1] < 0){
        for (let e = 1; e < a.length; e++){
          if(a[e-1] - a[e] < 0){
            if(Math.abs(a[e-1] - a[e]) > 0.5 &&  Math.abs(a[e-1] - a[e]) < 3.5){
              test = true;
            } else {
              test = false;
              break;
            };
            test = true;
          } else {
            test = false;
            break;
          };
          test = true;
        }
      } else if (a[0] - a[1] > 0){
        for (let e = 1; e < a.length; e++){
          if(a[e-1] - a[e] > 0){
            if(Math.abs(a[e-1] - a[e]) > 0.5 &&  Math.abs(a[e-1] - a[e]) < 3.5){
              test = true;
            } else {
              test = false;
              break;
            }
          } else {
            test = false;
            break;
          }
          test = true;
        }
      } else {
        test = false;
      }
      b.push(test);
      if (test == true) {
        answer += 1;
        b.push("#" + answer + " ");
        b.push(a + "\n");
      }
      if (test == false){
        answerTwo += 1;
        b.push("#" + answerTwo + " ");
        b.push(a + "\n");
      }
    }
    
    outputSource.innerText = ("Number of Safe reports?\nSafe:\n" + answer + "\nBad:\n " + answerTwo +
      "\n\nAnswer List:\n" + b +
      "\n\nYour provided lists\n" + text);
  };
  reader.readAsText(file);
};