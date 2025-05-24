const body = document.querySelector("body")
body.addEventListener("click", function(event){
    if(event.target.tagName === "BUTTON"){
        console.log("target was button")
    } else {
        console.log("target was something else")
    }
}, true)
    
    
    // event.target.tagName === "BUTTON" ? console.log("target was button") : console.log("target was something else") 
console.log(body)