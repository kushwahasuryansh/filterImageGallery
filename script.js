// setting up the filterButtons and filterable cards
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

console.log(filterButtons, filterableCards)

// Defining the filterCards function

const filterCards = e =>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    //iterate over each filterable card

    filterableCards.forEach(card => {

        //Add  "hide" class to hide the cards intially
        
        card.classList.add("hide");

        //Check if the card matches the selected filter or "all" is selected

        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all")
        {
            card.classList.remove("hide");
        }
    })
}



// Add event listener to each filter button
filterButtons.forEach(button => button.addEventListener("click",filterCards));