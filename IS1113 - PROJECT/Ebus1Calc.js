/*global $*/
function calcSub(){
	var argSelection;

		if(document.getElementById("rbhyperauto").checked){
			argSelection = 200;
		}

		else if(document.getElementById("rbmultiex").checked){
			argSelection = 500;
		}

		else if(document.getElementById("rbdiscloud").checked){
			argSelection = 1000;
		}

		calcVatTotal(argSelection);

 }

function calcVatTotal(parmSelection){
	var argsubTotal = parseFloat(parmSelection);
	var argdiscountAmt = parseFloat(argsubTotal * 0.05);
	var argvatAmt= parseFloat(argsubTotal * 0.2);
	var argtotalPrice = parseFloat(argsubTotal - argdiscountAmt +argvatAmt);

	calcDisp(argsubTotal, argdiscountAmt, argvatAmt, argtotalPrice);
}

function calcDisp(parmsubTotal, parmdiscountAmt, parmvatAmt, parmtotalPrice){
	document.getElementById("subtotal").value = parmsubTotal;
	document.getElementById("discount").value = parmdiscountAmt;
	document.getElementById("vat").value = parmvatAmt;
	document.getElementById("total").value = parmtotalPrice;
}


