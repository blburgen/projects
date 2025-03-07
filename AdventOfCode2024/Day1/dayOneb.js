const outputSource = document.getElementById('output')
const outputSecondSource = document.getElementById("secondOutPut")
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
      let c = lines[line].trim().split(' ');
      a.push(c[0]);
      for (let e = 1; e < c.length; e++){
        if (c[e] != "") 
        {
          b.push(c[e]);
        }
      }    
    }
    a = a.sort();
    b = b.sort();
    for (let d = 0; d < a.length; d++){
      answer += Math.abs(a[d] - b[d]);
    }
    for (let f = 0; f < a.length; f++){
      let h = 0;
      for(let g = 0; g < b.length; g++){
        if(a[f] == b[g]){
          h += 1;
        }
      }
      answerTwo += h * a[f];
    }
    outputSecondSource.innerText = ("What is their similarity score?\nAnswer:\n" + answerTwo);
    outputSource.innerText = ("What is the total distance between your lists?\nAnswer:\n" + answer +
      "\n\nSorted Lists:\n" + a + "\n" + b +
      "\n\nYour provided lists\n" + text);
  };
  reader.readAsText(file);
};