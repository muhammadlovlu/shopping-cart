document.getElementById('case-increase').addEventListener('click', function (){
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount +1;
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 50;
    document.getElementById('case-Total').innerText = "$" + caseTotal;
    
    
})








document.getElementById('case-decrease').addEventListener('click', function(){
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount - 1;
    caseInput.value = caseNewCount;
})







// I tried myself, to figure out how it can works 



// document.getElementById("increase").addEventListener('click', function(){
//     incNumber('qtyUpdate1');    
// })
// document.getElementById("decrease").addEventListener('click', function(){
//     decNumber('qtyUpdate1');
// })
// document.getElementById("incItem2").addEventListener('click', function(){
//     incNumber('qtyUpdate2');
// })

// document.getElementById("deItem2").addEventListener('click', function(){
//     decNumber('qtyUpdate2');
// })


// function incNumber(id){
//     var i = parseInt(document.getElementsByClassName(id)[0].value);
//     i++;
//     document.getElementsByClassName(id)[0].value = i;
// }


// function decNumber(id){
//     var i = parseInt(document.getElementsByClassName(id)[0].value);
//     i--;
//     document.getElementsByClassName(id)[0].value = i;
// }