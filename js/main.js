import {MDCRipple} from '@material/ripple';
import {MDCTextField} from '@material/textfield';
import {MDCSwitch} from '@material/switch';


const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
const switchControl = new MDCSwitch(document.querySelector('.mdc-switch'));


function getUserInput(){
    const userInput = document.querySelector("#temperature-input").value;
    const isFharenheit = document.querySelector("#unit-switch").checked;
    if(isNaN(userInput) || (userInput == "")){
        showErrorMessage();
    }else{
        convertTemperature(userInput, isFharenheit);
    }
    
}
function convertTemperature(inputTemperature, isFharenheit){

    const result = document.querySelector("#result");
    if(isFharenheit){
        const convertedValue = (inputTemperature - 32) * 5/9;
        result.textContent = `${convertedValue} C`

    }else{
        const convertedValue = (inputTemperature * 9/5) + 32;
        result.textContent = `${convertedValue} F`
    }
}
function showErrorMessage(){
    const errorMessage = document.querySelector("#result");
    errorMessage.style.color="red";
    errorMessage.textContent = "Please enter a number!!"
}

//Listen the focus event of the input
const inputOnFocus = () =>{
    const userInput = document.querySelector("#temperature-input");
    userInput.addEventListener("focus",()=>{
        //when focus has been captured, then clear the result
        userInput.value = ""
        document.querySelector("#result").textContent = "";
    })
}

const inputOnKeyUp = ()=>{
    const userInput = document.querySelector("#temperature-input");
    userInput.addEventListener("keyup",getUserInput);
}


inputOnFocus();
inputOnKeyUp();