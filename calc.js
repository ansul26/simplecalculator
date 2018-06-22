function c(){
	var display= document.getElementById("display");
	display.value='';
}



function numInput(digit){
	var display= document.getElementById("display");
	display.value += digit;

}

function addDecimal(){
	var display= document.getElementById("display");
	if (display.value.indexOf('.')=== -1) display.value += '.';
}

function setOperator(operator){
	var display= document.getElementById("display");
	if (display.value=='' && operator != '-') {
		return;
     
	}
	else{
	display.value += operator;}
}

