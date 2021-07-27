// Money was created as a largest number in js
let totalMoney = Number.MAX_SAFE_INTEGER

// Products were defined in array
const productList = [
    { id: 1, name: 'Cola', price: 4, img: 'https://i.sozcu.com.tr/wp-content/uploads/2016/01/19/diyet-kola.jpg' },
    { id: 2, name: 'Iskender', price: 30, img: 'https://i.lezzet.com.tr/images-xxlarge-recipe/ev-yapimi-iskender-33bd7089-fa36-4398-95f8-02c6463ea27c.jpg' },
    { id: 3, name: 'Yacht', price: 450055, img: 'https://i.ytimg.com/vi/9BCZpcgsAb8/maxresdefault.jpg'  },
    { id: 4, name: 'House', price: 9500022, img: 'https://www.neredekal.com/res/blog/1582812421_7.jpg' },
    { id: 5, name: 'Factory', price: 1200000333111, img: 'https://i.ytimg.com/vi/rfMkp55oTv0/maxresdefault.jpg' },
    { id: 6, name: 'Island', price: 690521500000333, img: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXNsYW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80' },
    { id: 7, name: 'Spacecraft', price: 1510521500000333, img: 'https://www.ldoceonline.com/media/english/illustration/space_shuttle.jpg?version=1.2.28' }
    // ... Kendi örneklerinizi eklemeye çekinmeyin.
]

// Element were taken from HTML with DOM
let cardDOM = document.querySelector(".card")
let spanDOM = document.querySelector(".money")
let buyMoreDOM = document.querySelector(".buyMore")
spanDOM.innerText = `${totalMoney} $`

// Created button and p elements outside of for loop to reach them 
let buttonDOM = document.createElement("button")
let pDOM = document.createElement("p")

// For loop to create elements for every product
for (var element in productList) {
    let divDOM = document.createElement("div")
    divDOM.id = productList[element].name

    let imgDOM = document.createElement("img")
    imgDOM.srcset = productList[element].img

    let h3DOM = document.createElement("h3")
    h3DOM.innerText = productList[element].name

    let priceDOM = document.createElement("p")
    priceDOM.innerText = `Price = ${productList[element].price} $`

    pDOM.id = productList[element].id
    pDOM.innerText = `Purchase Amount = 0`

    buttonDOM.innerText = `Buy ${productList[element].name}`
    buttonDOM.classList = "buttons"
    buttonDOM.id = productList[element].id

    divDOM.innerHTML += imgDOM.outerHTML + h3DOM.outerHTML + priceDOM.outerHTML + pDOM.outerHTML + buttonDOM.outerHTML
    cardDOM.appendChild(divDOM)    
}

// newButtonDOM was created to reach all buttons 
let newButtonDOM = document.querySelectorAll("button")
// Used forEach to add click event for buttons which were clicked 
newButtonDOM.forEach(element => element.addEventListener("click", (e) => {
    // Created price values for every product which were clicked and updated money that we have
    let price = productList[e.target.id - 1].price
    totalMoney -= price
    spanDOM.innerText = `${totalMoney} $`

    // Created button value and showed click amount with "clicks" as purchase amounts
    let button = e.currentTarget
    button.clicks = (button.clicks || 0) + 1
    let purchaseAmount = document.getElementById(e.target.id)
    purchaseAmount.innerText = `Purchase Amount = ${button.clicks}`

    // Remain money was calculated to make button disable and show affordable amount of products
    let remainMoney = totalMoney - price
    let amountOfProduct = Math.floor(totalMoney / price)
    if (remainMoney < 0) {
        e.target.classList = "disable"
        e.target.innerText = "Cannot Buy"
        buyMoreDOM.innerText = "You cannot buy anymore!"
    } else {
        buyMoreDOM.innerText = `You can buy ${amountOfProduct} ${productList[e.target.id - 1].name} more.`
    }
}))

// Used forEach to add mouseover event for buttons
newButtonDOM.forEach(element => element.addEventListener("mouseover", (e) => {
    // Remain money was calculated to make button disable and show affordable amount of products
    let price = productList[e.target.id - 1].price
    let remainMoney = totalMoney - price
    let amountOfProduct = Math.floor(totalMoney / price)
    if (remainMoney < 0) {
        buyMoreDOM.innerText = "You cannot buy anymore!"
    } else {
        buyMoreDOM.innerText = `You can buy ${amountOfProduct} ${productList[e.target.id - 1].name} more.`
    }
}))