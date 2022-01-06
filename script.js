
'use strict';


//this function fetches three cat photos when called 
function watchForm() {
    $('.js-cat-form').submit(event => {
        event.preventDefault();
        //this is the user input
        let submissions = $('.breed-of-cats').val();
        submissions = submissions.toLowerCase();
        //this make the image section visible        
        getThecat(submissions)
    });
};

//This function calls the endpoint url and fetches the image from the API
function getThecat(submissions) {
    fetch(`https://cataas.com/api/cats?tags=cute`)
        .then(response => {
            if (response.ok) {
                return response.json()                
            }
            throw new Error(response.statusText);
        })
        .then(cat => displayResults(tags))
        .catch(error => alert('Sorry! Breed not found, please try again later.'));
};


//This function displays the image to the DOM
function displayResults(tags) {
    
    $('.cat-images-results').html(`<img src="${tags.message}" alt="picutre of a cat" class="cat images">`);
    
    $('.hidden-div').removeAttr('hidden');
    
    console.log(tags)
};


function all(){
    $(watchForm);
}

$(all)
