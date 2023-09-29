const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth; //max amount you can scroll horizontally

    //slide images according to the slide button clicks
    slideButtons.forEach(button => { //forEach Loop
        button.addEventListener("click", () => { //adding event listener, for each 'button', an event listener is added for the "click" event.
            const direction = button.id === "prev-slide" ? -1 : 1; //Determining direction, when a button is clicked, this will determine the direction to scroll. A short if-else statement
            const scrollAmount = imageList.clientWidth * direction; //Calculates scroll amount, if the direction is -1 (previous) it will go left, if 1 (next) it will go right
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"}); //Performing the scroll
        });
    });

    const handleSlideButton = () => { //function checks the scroll position of 'imageList' and toggles the display of buttons w/in 'slideButtons' array
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block"; //if imageList.scrollLeft is less than or equal to 0, start of the scroll, means hidden
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block"; //if it is greater or equal to 'maxScrollLeft', user is at end of scroll, second btn hidden
    }

    //Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft; //this indicated how far 'imageList' has been scrolled
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth); 
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    imageList.addEventListener("scroll", () => { //listens for the "scroll" event. when detected on 'imageList', 'handleSlideButton' function is called
        handleSlideButton();
        updateScrollThumbPosition();
    });
}

window.addEventListener("load", initSlider);