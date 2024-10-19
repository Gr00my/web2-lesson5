const games = [
    {
        name: "Asseto Corsa",
        imgURL: "img/asseto-corsa.jpg",
        price: 1159,
    },
    {
        name: "Baldurs Gate",
        imgURL: "img/baldurs-gate.jpg",
        price: 1999,
    },
    {
        name: "BeamNG Drive",
        imgURL: "img/beamNG-drive.jpg",
        price: 999,
    },
    {
        name: "Dark Souls 3",
        imgURL: "img/dark-souls-3.jpg",
        price: 2399,
    },
    {
        name: "Rust",
        imgURL: "img/rust.jpg",
        price: 1600,
    },
    {
        name: "Squad",
        imgURL: "img/squad.jpg",
        price: 1200,
    },
]

const basket = []

window.addEventListener('load', ()=>{
    const gamesaBlock = document.querySelector(".games-block")
    for (let game of games){
        gamesaBlock.innerHTML+=`
            <div class="games-block__game">
                <h4 class="game__name">${game.name}</h4>
                <p class="game__price">${game.price} ₽</p>
                <img src="${game.imgURL}" alt="" class="game-img">
                <button class="game__buy">В корзину</button>
            </div>
        `;
    }
    const buttons = document.querySelectorAll(".game__buy");
    for (let i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", ()=>{
            basket.push(games[i]);
            showBasket();
            console.log(basket)
        })
    }
})

const basketBtn = document.querySelector(".basket-btn")
const basketBlock = document.querySelector(".basket-block")
let basketIsOpen = false

basketBtn.addEventListener('click', ()=>{
    if (basketIsOpen){
        basketBlock.style.right = "-400px";
        basketBtn.querySelector("img").style.transform = "rotate(180deg)"
    } else {
        basketBlock.style.right = "0px";
        basketBtn.querySelector("img").style.transform = "rotate(0deg)"
        showBasket()
    }
    basketIsOpen = !basketIsOpen;
})

const deleteItem = document.querySelector("game-item-delete")
const basketItems = document.querySelector(".basket-items")
const allPrice = document.querySelector(".allprice")



function showBasket() {
    let allprice = 0;
    let count = 0;
    basketItems.innerHTML = ''
    for (let game of basket) {
        allprice += game.price
        allPrice.innerHTML = `${allprice} ₽`
        basketItems.innerHTML += `            
            <div class="games-block-item__game">
                <div class="game-item-div">
                    <img src="${game.imgURL}" class="game-item-img">
                    <div>
                        <h4 class="game-item__name">${game.name}</h4>
                        <p class="game-item__price">${game.price} ₽</p>
                    </div>
                </div>
                <button class="game-item-delete" onclick="deleteGame(${count++})">Удалить</button>
            </div>
            `;
    }
}

function deleteGame(count) {
    basket.pop(count);
    showBasket()
    allPrice()
}