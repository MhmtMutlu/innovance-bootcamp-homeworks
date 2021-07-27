import 'regenerator-runtime/runtime'
import Fuse from 'fuse.js'

// Created a FoodApp Class for whole app
class FoodApp {
    // Constructor function runs when FoodApp instance is created
    constructor() {
        // An array for data which are taken api
        this.foodsArray = []
        // An array for favourite meals
        this.favouriteFoods = []
        this.renderApp()
    }

    // Created an async renderApp func to render its ingredients when app is initialized
    async renderApp() {
        // Assigning data from localstorage to favouriteFoods array if localstorage has data
        this.favouriteFoods = JSON.parse(localStorage.getItem("favFoods")) || []
        // Taking user data
        await this.getUserInformation()
        // Taking meals data
        await this.getFoods()
        this.searchMeal()
    }

    // Created searchMeal func to create cards for initializing or searching
    searchMeal() {
        // Using fuse.js and defining searching key
        const options = {
            includeScore: true,
            keys: ['fields.strMeal']
        }
        const fuse = new Fuse(this.foodsArray, options)
        // Called createCards func for first initializing
        this.createCards(this.foodsArray)
        // Taking words from input to search meal
        let searchInputDOM = document.querySelector(".search-input")
        searchInputDOM.addEventListener("input", (e) => {
            // setTimeout func was added to limit search operation by time for performance
            setTimeout(() => {

                let searchValue = e.target.value
                if (searchValue === "") {
                    // If there is no word in input, it calls createCards func
                    this.createCards(this.foodsArray)
                } else if(searchValue != "") {
                    // If there is some words in input, it calls searchedCards func
                    const result = fuse.search(searchValue)
                    this.searchedCards(result)
                }
            }, 500)
        })
    }

    // Created createCards func to list meals for first initialize or if there is no word to search
    createCards(result) {
        let cardListDOM = document.querySelector(".card-list")
        // Cleaning cardList's innerHTML for every calling
        cardListDOM.innerHTML = ""
        // Creating cards for whole meals
        result.forEach((food) => {cardListDOM.innerHTML += `
            <div id=${food.id} class="card">
                <img src=${food.fields.strMealThumb}>
                <h3>${food.fields.strMeal}</h3>
                <button id=${food.id} class="details-button">See Details</button>
            </div>
        `})
        // Calls openModal func to open modal for selected meal
        let detailsButtonDOM = document.querySelectorAll(".details-button")
        detailsButtonDOM.forEach(btn => btn.addEventListener("click", (e) => {
            this.openModals(e.target.id)
        }))
    }

    // Created searchedCards func to list meals which were searched 
    searchedCards(result) {
        let cardListDOM = document.querySelector(".card-list")
        // Cleaning cardList's innerHTML for every calling
        cardListDOM.innerHTML = ""
        // Creating cards for searched meals
        result.forEach((food) => {cardListDOM.innerHTML += `
            <div id=${food.item.id} class="card">
                <img src=${food.item.fields.strMealThumb}>
                <h3>${food.item.fields.strMeal}</h3>
                <button id=${food.item.id} class="details-button">See Details</button>
            </div>
        `})
        // Calls openModal func to open modal for selected meal
        let detailsButtonDOM = document.querySelectorAll(".details-button")
        detailsButtonDOM.forEach(btn => btn.addEventListener("click", (e) => {
            this.openModals(e.target.id)
        }))
    }

    // Created openModals func create a modal for selected meal
    openModals(id) {
        let modalDOM = document.getElementById("modal")
        // Finding meal which were selected in foodsArray
        let meal = {}
        this.foodsArray.forEach(element => {
            if(element.id === id){
                meal = element
            }
        })
        let emptyHeart = `<i id="icon" class="far fa-heart fa-3x"></i>`
        let filledHeart = `<i id="icon" class="fas fa-heart fa-3x"></i>`
        // Craeting modal's innerHTML
        modalDOM.innerHTML = `
            <div class="modal-content">
                <img class="modal-image" src=${meal.fields.strMealThumb}>
                <div class="modal-body">
                    <h3>${meal.fields.strMeal}</h3>
                    <p>
                        ${meal.fields.strInstructions.slice(0, 270)}... 
                        <a href=${meal.fields.strYoutube} target="_blank">For More Informations</a>
                    </p>
                    <button class="favourite-button">
                        ${this.favouriteFoods.findIndex((favourite) => {
                           return favourite.id === meal.id
                        }) > -1 
                            ? filledHeart : emptyHeart}
                    </button>
                </div>
                <span class="close-modal">&times;</span>
            </div>
        `
        // Making modal visible
        modalDOM.style.display= "block"
        // Called closeModal func to close modal from close button
        this.closeModal()
        // Called handleFavouriteFoods func to add or remove meals from favourite foods list (favouriteFoods array)
        this.handleFavouriteFoods(meal)
    }

    // Created closeModal func to close modal
    closeModal() {
        let closeModalDOM = document.querySelector(".close-modal")
        closeModalDOM.addEventListener("click", () => {
            let modalDOM = document.getElementById("modal")
            // Making modal invisible
            modalDOM.style.display = "none"
        })
    }

    // Created handleFavouriteFoods func to add or remove meals from favourite foods list (favouriteFoods array)
    handleFavouriteFoods(meal) {
        let favouriteButtonDOM = document.querySelector(".favourite-button")
        let iconDOM = document.getElementById("icon")
        favouriteButtonDOM.addEventListener("click", () => {
            if (iconDOM.className.includes("fas")) {
                // If selected meal is favourite meal, these lines will remove it from favouriteFoods array and localstorage
                // Changing icon's appearance
                iconDOM.classList = "far fa-heart fa-3x"
                let food = {}
                this.favouriteFoods.forEach(element => {
                    if(element.id === meal.id){
                        food = element
                    }
                })
                let index = this.favouriteFoods.indexOf(food)
                // Deleting selected meal from array
                this.favouriteFoods.splice(index, 1);
                // Updating favourite array in localstorage
                localStorage.setItem('favFoods', JSON.stringify(this.favouriteFoods));
            } else if(iconDOM.className.includes("far")) {
                // If selected meal is not favourite meal, these lines will add it to favouriteFoods array and localstorage
                // Adding selected meal to array
                this.favouriteFoods.push(meal)
                // Updating favourite array in localstorage
                localStorage.setItem("favFoods", JSON.stringify(this.favouriteFoods))
                // Changing icon's appearance
                iconDOM.classList = "fas fa-heart fa-3x"
            }
        })
    }

    // Taking user informations from api with fetch
    async getUserInformation() {
        await fetch("https://jsonplaceholder.typicode.com/users/3")
            .then(response => response.json())
            .then(json => {
                const userName = json.name
                let headerTitleDOM = document.querySelector(".header-title")
                headerTitleDOM.innerText = `Hello, ${userName}!`
            })
    }

    // Taking meals from api with fetch
    async getFoods() {
        // Loading animation's display were changed to show it when taking data from api
        let loadingAnimDOM = document.querySelector(".loading-anim")
        loadingAnimDOM.style.display = "inline-block"
        await fetch("https://api.airtable.com/v0/appyLL3B6PD1W44kF/Grid%20view?api_key=keynJKkfPVvo4RLJf")
            .then(response => response.json())
            .then(json => {
                // Pushing data to foodsArray
                json.records.forEach(food => {this.foodsArray.push(food)})
                // Loading animation's display were changed to hide it
                loadingAnimDOM.style.display = "none"
            })
    }
}

// Calling FoodApp
new FoodApp()