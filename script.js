document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    let slideImages = document.querySelectorAll("img");
    let next = document.querySelector(".next");
    let prev = document.querySelector(".prev");
    let dots = document.querySelectorAll(".dot");

    var counter = 0;

    //code for next button
    next.addEventListener("click", slideNext);

    function slideNext() {
        slideImages[counter].style.animation = "next1 0.5s ease-in forwards";
        if (counter >= slideImages.length-1) {
            counter = 0;
        } 
        else {
            counter++;
        }
        slideImages[counter].style.animation = "next2 0.5s ease-in forwards";
    }

    //code for prev button
    prev.addEventListener("click", slidePrev);

    function slidePrev() {
        slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";
        if (counter == 0) {
            counter = slideImages.length-1;
        } else {
            counter--;
        }
        slideImages[counter].style.animation = "prev2 0.5s ease-in forwards";
    }

    //AUTO SLIDING
    function autoSliding() {
        // Declare the variable using let to properly scope it
        let deletInterval = setInterval(timer, 2500);
    
        function timer() {
            slideNext();
        }
    }
    
    // Call the autoSliding function after defining it, not inside itself
    autoSliding();
    

    const container = document.querySelector('.slide-container');
    container.addEventListener('mouseover', function(){
        clearInterval(deletInterval);
    });

    }

);
