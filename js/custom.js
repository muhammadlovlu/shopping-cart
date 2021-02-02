function handlerProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    let total = productNewCount;
    if (product == 'case') {
        total = productNewCount * 50;
    }
    if (product == 'phone') {
        total = productNewCount * 200;
    }
    document.getElementById(product + '-total').innerText = "$" + total;
    calculateTotalPrice();
}


function calculateTotalPrice() {

    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');
    const totalPrice = phoneCount * 200 + caseCount * 50;
    document.getElementById('total-price').innerText = "$" + totalPrice;

    const incTax = totalPrice / 10 ; 
    document.getElementById('tax').innerText = "$"  incTax;

    const grandPrice = totalPrice + incTax;
    document.getElementById('grand-price').innerText = "$" + grandPrice;
}


function getInputValue(product) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}












// function handlerProductChange(product, isIncrease) {
//     const productInput = document.getElementById(product + '-count');
//     const productCount = parseInt(productInput.value);
//     let productNewCount = productCount;
//     if (isIncrease == true) {
//         productNewCount = productCount + 1;
//     }
//     if (isIncrease == false && productCount > 0) {
//         productNewCount = productCount - 1;
//     }
//     productInput.value = productNewCount;
//     let total = productNewCount;
//     if (product == 'case') {
//         total = productNewCount * 50;
//     }
//     if (product == 'phone') {
//         total = productNewCount * 200;
//     }
//     document.getElementById(product + '-total').innerText = "$" + total;
//     calculateTotalPrice();
// }


// function calculateTotalPrice() {

//     const phoneCount = getInputValue('phone');
//     const caseCount = getInputValue('case');
//     const totalPrice = phoneCount * 200 + caseCount * 50;
//     document.getElementById('total-price').innerText = "$" + totalPrice;
// }


// function getInputValue(product) {
//     const productInput = document.getElementById(product + '-count');
//     const productCount = parseInt(productInput.value);
//     return productCount;
// }
















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