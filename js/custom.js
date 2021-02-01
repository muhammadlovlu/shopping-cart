
document.getElementById("increase").addEventListener('click', function(){
    incNumber('qtyUpdate1');    
})
document.getElementById("decrease").addEventListener('click', function(){
    decNumber('qtyUpdate1');
})
document.getElementById("incItem2").addEventListener('click', function(){
    incNumber('qtyUpdate2');    
})

document.getElementById("deItem2").addEventListener('click', function(){
    decNumber('qtyUpdate2');
})


function incNumber(id){
    var i = parseInt(document.getElementsByClassName(id)[0].value);
    i++;
    document.getElementsByClassName(id)[0].value = i;
}
function decNumber(id){
    var i = parseInt(document.getElementsByClassName(id)[0].value);
    i--;
    document.getElementsByClassName(id)[0].value = i;
}