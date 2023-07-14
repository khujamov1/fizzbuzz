var elForm = document.querySelector(".site-form");
var elInput = elForm.querySelector(".site-input");
var elButton = elForm.querySelector(".site-button");
var elDesc = elForm.querySelector(".site-desc");



elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    var elInputValue = elInput.value; 
    
    if(elInputValue % 3 == 0 && elInputValue % 5 == 0) {
        elDesc.textContent = ("FIZZBUZZ")
    }else if(elInputValue % 3 == 0) {
        elDesc.textContent = ("FIZZ")
    }else if(elInputValue % 5 == 0){
        elDesc.textContent = ("BUZZ")
    }else {
        elDesc.textContent = ("NORMALNIY SON KIRITING BRATAN")
    }   
});
