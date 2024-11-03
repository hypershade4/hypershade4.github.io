var selectbox_1 = document.getElementById("selectbox_1");
var selectbox_2 = document.getElementById("selectbox_2");
var textbox_1 = document.getElementById("input_1");
var answer = document.getElementById("answer");
var swap = document.getElementById("swap");

submit_button.onclick = function(){
if (selectbox_1.value == "celsius" && selectbox_2.value == "fahrenheit"){
    temp = textbox_1.value;
    converted_temp = (temp * 9/5) + 32;
    answer.textContent = converted_temp.toFixed(2) + "° F";
}

else if (selectbox_1.value == "fahrenheit" && selectbox_2.value == "celsius"){
    temp = textbox_1.value;
    converted_temp = (temp - 32) * 5/9;
    answer.textContent = converted_temp.toFixed(2) + "° C";
}

else if (selectbox_1.value == "celsius" && selectbox_2.value == "kelvin"){
    temp = parseFloat(textbox_1.value); 
    converted_temp = temp + 273.15;
    answer.textContent = converted_temp + "° K";
}

else if (selectbox_1.value == "kelvin" && selectbox_2.value == "celsius"){
    temp = parseFloat(textbox_1.value); 
    converted_temp = temp - 273.15;
    answer.textContent = converted_temp.toFixed(2) + "° C";
}

else if (selectbox_1.value == "fahrenheit" && selectbox_2.value == "kelvin"){
    temp = parseFloat(textbox_1.value); 
    converted_temp = (temp - 32) * 5/9 + 273.15;
    answer.textContent = converted_temp.toFixed(2) + "° K";
}

else if (selectbox_1.value == "kelvin" && selectbox_2.value == "fahrenheit" ){
    temp = parseFloat(textbox_1.value); 
    converted_temp = (temp - 273.15) * 9/5 + 32;
    answer.textContent = converted_temp.toFixed(2) + "° K";
}
else if(selectbox_1.value == "none" && selectbox_2.value == "none"){
    answer.textContent = `you must be extremely stupid`;
}
}

function swapUnits() {
    var selectbox1 = document.getElementById("selectbox_1");
    var selectbox2 = document.getElementById("selectbox_2");

    var temp = selectbox1.value;
    selectbox1.value = selectbox2.value;
    selectbox2.value = temp;
}

