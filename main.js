var count=0;

var body = document.querySelector("body");
var slide = document.querySelector(".slide");
var wrapper = document.querySelector(".wrapper");





$("input").on("click", function () {
    count++;
   
    switch (count) {
        case 1:
            body.style.transition = 1+"s";
            body.style.background = "#000";
            wrapper.style.borderColor = "#fff";
            wrapper.style.boxShadow = "0 10px 20px rgba(255, 255, 255, 0.5)";
            slide.style.background = "#000";
            break;
        case 2:
            body.style.transition = 1+"s";
            body.style.background = "#f3f3f3";
            wrapper.style.borderColor = "#000";
            wrapper.style.boxShadow = "0 10px 20px rgba(0, 0, 0, .5)";
            slide.style.background = "#fff";
            break;
        default: body.style.display = "none";
            break;
    
    }
    if(count == 2){
        count =0;
    }
});

