//define topics: list of topics that are available for each category
/*creating a constant variable 'topicsByCategory' which is an object.
The keys of this object are the different categories.
The values are arrays containing the topics related to those categories. */

const topicsByCategory = {
    //"keys": ["array"],
    "Food & drink": ["Restaurants", "Brunch", "Dessert", "Takeout", "Coffee", "Dining", "Bars"],
    "Things to do": ["Museums", "Gyms", "Art", "Attractions", "Nightlife", "Live music", "Movies", "Libraries", "Parks", "Concerts"],
    "Shopping": ["Malls", "Markets", "Boutiques"],
};

//event listeners: adding to category checkboxes. getting elements by their ID
/*
'document.getElementById('foodDrinkCheckbox') gets the html element with the ID 'foodDrinkCheckbox
'.addEventListener('change', updateTopics):' attaches an event listener to this element, listening for a 'change'
and calling 'updateTopics' when this event occurs.
*/

document.getElementById('foodDrinkCheckbox').addEventListener('change', updateTopics);
document.getElementById('thingsToDoCheckbox').addEventListener('change', updateTopics);
document.getElementById('shoppingCheckbox').addEventListener('change', updateTopics);

//show/hide topics based on the checked checkbox


function updateTopics() {
    //Get all selected categories
    /*'document.querySelectorAll('.categories input:checked')' selects all checked input elmenets inside elments with the
    class 'categories'.
    Returns a NodeList, which converts to an array using 'Array.from()'
    Then use '.map()' to create a new array containing the values of the checked inputs

    ex) three checkboxes: food, things to do, shopping.
    food and shopping is checked, the .map() function would create a new array: '["food", "shopping"]'. 
    */
    const selectedCategories = Array.from(document.querySelectorAll('.categories input:checked')).map(input => input.value);

    //clear current topics
    const topicsDiv = document.querySelector('.topics');
    topicsDiv.innerHTML = "<h2>Pick Topics:</h2>";

    //add new topics based on selected categories
    selectedCategories.forEach(category => { //looping over each 'category' in the 'selectedCategories' array. for each 'category', it runs this function
        if(topicsByCategory[category]) {  //checking if the current 'category' exists in the 'topicsByCategory' object, if true it will run {}
            //create a div for this category
            const categoryDiv = document.createElement('div');
            //add category name to the div
            categoryDiv.innerHTML = `<p>${category}:</p>`;
            //Iterate over the topics of this category
            topicsByCategory[category].forEach(topic => {  //looping over each 'topic' in the array corresponding to the current 'category' in "topicsByCategory" object
                //for each 'topic' a new label and input(checkbox) element is created and properties of the input are being set
                const label = document.createElement('label');
                const input = document.createElement('input');
                input.type = 'checkbox';
                input.name = 'topic';
                input.value = topic;
                label.appendChild(input);
                label.appendChild(document.createTextNode(topic));
                //append the label to the category div
                categoryDiv.appendChild(label);
            });
            topicsDiv.appendChild(categoryDiv); //append  categoryDiv to topicsDiv
        }
    });
}