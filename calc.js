var ans=0;
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
	display.value += '.';
}
function backspace(){
	var display= document.getElementById("display");
	
	
	var s=display.value.slice(0,display.value.length-1);
	display.value=s;
	

}


function setOperator(operator){
	var display= document.getElementById("display");
	if (display.value=='' && operator != '-') {
		return;
     
	}
	else{
	display.value += operator;}
}

function e(){

var display=document.getElementById("display");

	var flag=false;
	
	if (display.value[0]=='-') {flag=true;}
	var bool = true;
	opers=['/','*','+','-'];
	for (var i = 0; i < display.value.length; i++) {
		if (opers.indexOf(display.value[i]) != -1 && opers.indexOf(display.value[i+1]) != -1) {
			display.value = "Error";
			bool=false;
		}
	}
	if (bool) {
	var express=display.value;
	var exp_copy=express;
    express = express.replace(/[0-9\.]+/g, "#");
    var nums = exp_copy.split(/[^0-9\.]+/);
    //console.log(nums);
    var ops = express.split("#").filter(function(n){return n});
    
    if (nums[0]==""){nums.splice(0,1);}
    //console.log(ops);
    if (flag==true) {
    
	nums[0]= (-1*parseFloat(nums[0])).toString();
	ops.splice(0,1);
	}
	for (var i = 0; i <= ops.length; i++) {
		if (ops[i]=='/') {
			nums[i]=parseFloat(nums[i])/parseFloat(nums[i+1]);
			nums.splice(i+1,1);
			ops.splice(i);
		}
	}
	for (var i=0; i<=ops.length; i++){
		if (ops[i]=='*') {
			nums[i]=parseFloat(nums[i])*parseFloat(nums[i+1]);
			nums.splice(i+1,1);
			ops.splice(i);
        }
	}
	for (var i=0; i<=ops.length; i++){
		if (ops[i]=='+') {
			nums[i]=parseFloat(nums[i])+parseFloat(nums[i+1]);
		}
	}
	for (var i=0; i<=ops.length; i++){
		if (ops[i]=='-') {
			nums[i]=parseFloat(nums[i])-parseFloat(nums[i+1]);
		}
	}
ans=Number(nums[0]);	
display.value=Number(nums[0]);

}
}
function prevResult()
{
	document.getElementById("display").value=ans;
	
}