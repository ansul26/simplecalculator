displayNum="";    //initialising some variable to display num
storedNum="";     //initialising some variable to stored num
operation=0;      //initialising some operation to none
queuedOperation=0; //initialising some operator to none
calculationFinished=false; //flag to say calculation not finished

// function to clear screen
function c(){
	var display= document.getElementById("display");
	displayNum="";
    storedNum="";
    operation=0;
    queuedOperation=0;
    display.value=displayNum;

}

//function to add number
function numInput(num){
	var display= document.getElementById("display");
	if ((display.value=="") && num==0)
	{
	return;
	}
	else if(calculationFinished==true){
	display.value=num;
	calculationFinished=false;
	}
	else
	{
		display.value += num
	}
}

//function to add decimal
function addDecimal(dec){
	var display= document.getElementById("display");
	//checking if dec is already present or not if not then add
	for (var i = 0; i < display.value.length; i++) {
		if(display.value.charAt(i)=='.'){
			return;
		}
		else{
			display.value +=dec;
		}
	}
}
