const countingEl = document.querySelectorAll(".room")

countingEl.forEach(countingEl=>{
    countingEl.innerText = "0"
    increaseCount()
    function increaseCount(){
        let currentNum = +countingEl.innerText
        const dataCeil = countingEl.getAttribute("data-ceil");
        const increase = dataCeil/10
        currentNum = Math.ceil(increase + currentNum)
       
        
        if(currentNum < dataCeil){
            countingEl.innerText = currentNum 
            setTimeout(increaseCount, 80)
        }
        else(countingEl.innerText = dataCeil)
     
   
    }

})
