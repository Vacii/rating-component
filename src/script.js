// An arrow function that takes an element and adds a 'rating-active' class to it
// When there is a element, that has the class, remove it. So there is always only one active element
// When given element is equivalent to active element. return
const changeActiveRating = element => {
    const lastActive = document.getElementsByClassName('rating-active');

    if (element == lastActive){
        return
    } else {
        if (lastActive.length > 0) {
            lastActive[0].classList.remove('rating-active');
        }
        element.classList.add('rating-active');
    }
}

// Adding logic to the submit button
document.addEventListener('DOMContentLoaded', () => {
    // Your JavaScript code here
    
    // Get the Submit button element
    const submitButton = document.querySelector('button');
    // Add a click event handler to the Submit button
    submitButton.addEventListener('click', () => {
    // Get the selected rating element (the one with the 'rating-active' class)
        const selectedRatingElement = document.querySelector('.rating-active');

        if (selectedRatingElement) {
            // Get the rating value (1, 2, 3, 4, or 5) from the element's text content
            const selectedRating = parseInt(selectedRatingElement.textContent);

            // Display the selected rating in the hidden thank you state
            const thankYouState = document.querySelector('.hidden');
            // thankYouState.textContent = `You selected ${selectedRating} out of 5\n\nThank you!\n\nWe appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!`;
            thankYouState.classList.remove('hidden');
            thankYouState.classList.add('flex');

            const ratingElement = document.getElementById('selected');
            ratingElement.textContent= `You selected ${selectedRating} out of 5`;

            const ratingState = document.querySelector('main');
            ratingState.classList.add('hidden');
        }
    });
});