const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth; //max amount you can scroll horizontally

    //handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => { //listens for when mouse button is pressed down on it
        const startX = e.clientX; //store initial values. startX stores horizontal mouse position when 'mousedown' even occurs
        const thumbPosition = scrollbarThumb.offsetLeft; //stores the initial position of the 'scrollbarThumb' from the left edge of container

        //update thumb positoin on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX; //calculates the new thumb position. deltaX: difference in horizontal position of the mouse b/w current 'mousemove' event and 'mousedown' event
            const newThumbPosition = thumbPosition + deltaX; //new desired position of the 'scrollbarThumb' is calculated by addind 'deltaX' to initial position
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

            //restrict it from going outside bar area
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition)); //prevents it from going outside scrollbar area
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

            //updated the actual position of the ''scrollbarThumb' and the scroll position of the content ('imageList)
            scrollbarThumb.style.left = `${boundedPosition}px`; 
            imageList.scrollLeft = scrollPosition;
        }

        //remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        //add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

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