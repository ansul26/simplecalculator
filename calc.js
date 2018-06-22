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

function e(){


	var display=document.getElementById("display");
	if (display.value.charAt[0]=='-') {var flag=true;}

	var express=display.value;
	var exp_copy=express;
    express = express.replace(/[0-9]+/g, "#").replace(/[\(|\|\.)]/g, "");
    var nums = exp_copy.split(/[^0-9\.]+/);
    var ops = express.split("#").filter(function(n){return n});
    if (flag ==true) {
	nums[0]= -1*parseFloat(nums[0]);
	ops.slice(0,1);
	for (var i = 0; i <= ops.length; i++) {
		if (ops[i]=='/') {
			nums[i]=parseFloat(nums[i])/parseFloat(numss[i+1]);
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
	


}
else {
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
	
}	
display.value=Number(nums[0]);

}