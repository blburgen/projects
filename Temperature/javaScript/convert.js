window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   let clickButton = document.getElementById("convertButton");
   let cInput = document.getElementById("cInput");
   let fInput = document.getElementById("fInput");
   let imageLink = document.getElementById("weatherImage");
   let errorMsg = document.getElementById("errorMessage");
   let tempUsed;
   let returnNumber;
   function functionUsed() {
      if (fInput.value == "") {
         tempUsed = parseFloat(cInput.value);
         if (isNaN(tempUsed)) {
            errorMsg.innerHTML = cInput.value + " is not a number";
            return;
         } else {
            errorMsg.innerHTML = "";
         }
         returnNumber = fInput;
         returnNumber.value = convertCtoF(tempUsed);
      } else {
         tempUsed = parseFloat(fInput.value);
         if (isNaN(tempUsed)) {
            errorMsg.innerHTML = fInput.value + " is not a number";
            return;
         } else {
            errorMsg.innerHTML = "";
         }
         returnNumber = cInput;
         returnNumber.value = convertFtoC(tempUsed);
      };
      if (parseFloat(fInput.value) < 32) { 
         imageLink.src = ".\\images\\cold.png";
      } else if (parseFloat(fInput.value) <= 50) {
         imageLink.src = ".\\images\\cool.png";
      } else {
         imageLink.src = ".\\images\\warm.png";
      };
   }
   cInput.addEventListener("input", function(){fInput.value = ''});
   fInput.addEventListener("input", function () {cInput.value = ''});
   clickButton.addEventListener("click", functionUsed);// TODO: Complete the function
}

function convertCtoF(degreesCelsius) {
   let degFahr = degreesCelsius * 9 / 5 + 32;
   return degFahr;// TODO: Complete the function
}

function convertFtoC(degreesFahrenheit) {
   let degCels = (degreesFahrenheit - 32) * 5 / 9;
   return degCels;// TODO: Complete the function
}
