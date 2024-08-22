const heading = document.querySelector (".head");
heading.textContent = "Top Games of all Time"
const mario = "https://th.bing.com/th/id/OIP.bkwXlGoUtsUEGVsihO-r7wHaKr?rs=1&pid=ImgDetMain"
const tetris ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkHdm6N_RV8GVqaB5LPyJAGlmJskrTIAv7Mw&s"
const cod ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7JBMcjRoFcKpgGdzV54Bz16rhMtmvECIeA&s"
const coc ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo2bCcTgLnKyWouW8rSdVo_HdlaZprsh6B_g&s"
const gow ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BPK0wCxcKMqNj2AGGDimfseVYAeSA70afw&s"
const gta5 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTf6Ugza87fBPorXid2Vv8Tv5I6N7D5Co5EQ&s"
const loz ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9cK6fXiB2Om8Bho9OExUdblaGEG8-J5s8cg&s"
const minecraft ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXIS803oicb3lns3IN1dhl2iwoeHl33DKBeA&s"
const rdd2 ="https://imageio.forbes.com/blogs-images/davidthier/files/2018/10/Capture-52-1200x672.jpg?height=398&width=711&fit=bounds"
const witcher ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1xBtYTBpO4wNF8T-QuJe-vZxa6gYBI1HLQ&s"

const gamesImg = [mario, tetris, cod, coc, gow, gta5, loz, minecraft, rdd2, witcher]
const gamesTitle = ["Super Mario 3D World", "Tetris", "Call of Duty: MW2", "clash of clans", "God of War: Ragnarok", "GTA V", "The Legend of Zelda: breath of the wild", "Minecraft", "Red Dead Redemption 2", "Witcher 3"]
const gamesRating = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "9.9"]
const gamesSold = ["10", "50", "20", "9", "15", "20", "30", "30", "60", "50"]
const gamesYear = ["1985", "1984", "2003", "2020", "2022", "2013", "1986", "2011", "2018", "2015"]
const gamesCost = ["1000", "2000", "3000", "4000", "5000", "1500", "2500", "3500", "4500", "5500"]

const button = document.getElementById ("btn")
button.textContent = "SEARCH"

button.addEventListener("click", displayGames)

const resultDiv = document.createElement ("div")
resultDiv.classList.add ("grid")
const container = document.querySelector (".container")
container.appendChild (resultDiv)

function displayGames() {
    const input = document.getElementById ("input")
    const sort = input.options[input.selectedIndex].value;

    switch(sort) {
        case "all":
            displayAll();  
            break;
        case "rating":
            displayRating();
            break;
        case "sold":
            displaySold();
            break;
        case "year":
            displayYear();
            break;
        case "alpha":
            displayAlpha();
            break;
        case "costHigh":
            displayCostHigh();
            break;
    }

    function displayAll() {
        resultDiv.textContent = ""
        for (let i = 0; i < gamesRating.length; i++) {
            const img = document.createElement("img")
            img.src =`  ${gamesImg[i]}.jpg`
            resultDiv.appendChild(img)
            
            const title = document.createElement("h3")
            title.textContent = gamesTitle[i]
            resultDiv.appendChild(title)
            
            const fill = document.createElement("p")
            fill.textContent = ""
            resultDiv.appendChild(fill)            
        }

    
    }
    
    
    function displayRating() {
        resultDiv.textContent = ""
    
        const sortedRating = gamesTitle.map((title, index) => {
            return {
                title,
                rating: gamesRating[index],
                image: gamesImg [index]
            }
        }).sort((a, b) => b.rating - a.rating)
    
        for (let i = 0; i < sortedRating.length; i++) {
            const img = document.createElement("img")
            img.src = `${sortedRating[i].image}.jpg`
            resultDiv.appendChild(img)
    
            
            const title = document.createElement("h3")
            title.textContent = sortedRating[i].title
            resultDiv.appendChild(title)
    
            
            const rating = document.createElement("p")
            rating.textContent =` Rating: ${sortedRating[i].rating} / 10`
            resultDiv.appendChild(rating)
        }
    
    
    }
    
    function displaySold() {
        resultDiv.textContent = ""

        const sortedSold = gamesTitle.map ((title,index) => {
            return {
                title,
                sold: gamesSold [index],
                image: gamesImg [index]
            }
        }).sort((a,b) => b.sold - a.sold)
    
        for (let i=0; i < sortedSold.length; i++) {
            const img = document.createElement("img")
            img.src =` ${sortedSold[i].image}.jpg`
            resultDiv.appendChild(img)
    
            const title = document.createElement("h3")
            title.innerText = sortedSold[i].title
            resultDiv.appendChild(title)
    
            const sold = document.createElement("p")
            sold.innerText =` ${sortedSold[i].sold} million copies sold`
            resultDiv.appendChild(sold)
        }
    }
    
    function displayYear() {
        resultDiv.textContent = ""

        const sortedYear = gamesImg.map ((image, index) => {
            return {
                image,
                title: gamesTitle[index],
                year: gamesYear[index], 
            }
        }).sort((a,b) => a.year - b.year)
    
        for (let i=0; i < sortedYear.length; i++) {
            const image = document.createElement("img")
            image.src = `${sortedYear[i].image}.jpg`
            resultDiv.appendChild(image)
    
            const title = document.createElement("h3")
            title.innerText = sortedYear[i].title
            resultDiv.appendChild(title)
    
            const year = document.createElement("p")
            year.innerText = sortedYear[i].year
            resultDiv.appendChild(year)
        }
    }
    
    
    function displayAlpha() {
        resultDiv.textContent = ""

        const sortedAlpha = gamesTitle.map ((title,index) => {
            return {
                title,
                image: gamesImg[index],
            }
        }).sort((a, b) => a.title.localeCompare(b.title))
    
        for (let i=0; i < sortedAlpha.length; i++) {
            const image = document.createElement("img")
            image.src = `${sortedAlpha[i].image}.jpg`
            resultDiv.appendChild(image)
    
            const title = document.createElement("h3")
            title.innerText = sortedAlpha[i].title
            resultDiv.appendChild(title)

            const fill = document.createElement("p")
            fill.innerText = ""
            resultDiv.appendChild(fill)
        }
    
    }
    
    function displayCostHigh() {
        resultDiv.textContent = ""

        const sortedCostHigh = gamesImg.map ((image,index) => {
            return {
                title: gamesTitle[index],
                image,
                cost: gamesCost[index]
            }
        }).sort((a,b) => b.cost - a.cost)

        for (let i=0; i < sortedCostHigh.length; i++) {
            const image1 = document.createElement("img")
            image1.src = `${sortedCostHigh[i].image}.jpg`
            resultDiv.appendChild(image1)

            const title = document.createElement("h3")
            title.innerHTML = sortedCostHigh[i].title
            resultDiv.appendChild(title)

            const cost = document.createElement("p")
            cost.innerText = `INR ${sortedCostHigh[i].cost}`
            resultDiv.appendChild(cost)
        }
    }  
}