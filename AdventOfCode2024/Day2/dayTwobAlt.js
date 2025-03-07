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
    let aa = "";
    let aaa = "";
    let b = [];
    let answer = 0;
    let answerTwo = 0;
    for (var line = 0; line < lines.length; line++) {
      // creates "c" array which is a line from the uploaded text
      console.log ("c line: " + line);
      a = [];
      let c = lines[line].trim().split(' ');
      // creates "a" array that is "c" array without blanks
      for (let d = 0; d < c.length; d++){
        if (c[d] != "") {
          a.push(c[d]);
        };
      };
      // inital conditions for testing 
      let test = false;
      let length = a.length;
      for (let removed = 0; removed < length; removed++){
        if (removed == 0) {
          aa = a[0];
          console.log ("aa equals: " + aa);
          a.splice(removed,1);
          console.log ("a after splice: " + a);
        } else {
          aaa = a[removed-1];
          console.log ("aaa is : " + aaa);
          a.splice(removed-1,1,aa);
          aa = aaa; 
        }
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
        if (test == true){
          break;
        }
      }
      // adds the results of the test to the answer array (b) and "answer" number
      b.push(test);
      if (test == true) {
        answer += 1;
        b.push("#" + answer + " ");
        b.push(a + "\n");
      };
      if (test == false){
        answerTwo += 1;
        b.push("#" + answerTwo + " ");
        b.push(a + "\n");
      };
    };
    // outputs results to screen
    outputSource.innerText = ("Number of Safe reports?\nSafe:\n" + answer + "\nBad:\n " + answerTwo +
      "\n\nAnswer List:\n" + b +
      "\n\nYour provided lists\n" + text);
  };
  reader.readAsText(file);
};