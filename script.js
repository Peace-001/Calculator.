// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
  try{
    display.value = eval(display.value);
  }
    catch(error){
      display.value = "Error";
    }
}

function deleteLast(){
  display.value = display.value.slice(0, -1);
}


// keyboard support
document.addEventListener("keydown", function(event){
    // Numbers and decimal point // Inclding the operators +,-,*,/.//
    if(event.key >= "0" && event.key <= "9" || event.key === "."
         || event.key === "+" 
         || event.key === "-" 
         || event.key === "*" 
         || event.key === "/"){
        appendToDisplay(event.key);
    }
    else if(event.key === "Enter"){
        calculate();
    }
   else if(event.key === "Escape"){
        clearDisplay();
    }
    else if(event.key === "Backspace") {
        deleteLast();
    }
});