var inputPrice=document.querySelector("#initial-price")
var stocksQuantity=document.querySelector("#stocks-quantity")
var currentPrice=document.querySelector("#current-price")

var submitBtn=document.querySelector("#submit-btn")
var outputBox=document.querySelector("#output-box")

submitBtn.addEventListener("click",clickHandler);

function clickHandler(){
    var ip=Number(inputPrice.value)
    var qty=Number(stocksQuantity.value)
    var curr=Number(currentPrice.value);

    calculateProfitAndLoss(ip,qty,curr);

}


function calculateProfitAndLoss(intial,quantity,current){
    if(intial > current){
        var loss= (intial-current)*quantity
        var lossPercentage=(loss/ intial)*100
        outputBox.style.color = 'red';
		showOutput(`Whoops!! Your loss is ${loss} and loss Percentage is ${lossPercentage}% :(`);
        
    }else if(current > intial){
        var profit= (intial-current)*quantity
        var profitPercentage=(profit/ intial)*100
        outputBox.style.color = 'green';
		showOutput(`Yay!! Your Profit is ${profit.toFixed(
			2
		)} and profit Percentage is ${profitPercentage.toFixed(2)}%`);
        
    } else {
        
		outputBox.style.color = 'white';
		showOutput(`No pain No gain, and no gain no pain :)`);
    }
}

function showOutput(message){
    outputBox.innerHTML=message;

}