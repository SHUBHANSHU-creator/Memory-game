document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'burger',
        img: 'images/burger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'burger',
        img: 'images/burger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }

    //check for matches
    function checkForMatch(){
        var cards=document.querySelectorAll('img')
        const optionOneID=cardsChosenId[0]
        const optionTwoID=cardsChosenId[1]
        if(cardsChosen[0]===cardsChosen[1]){
            alert('You found a Match')
            cards[optionOneID].setAttribute('src','images/white.png')
            cards[optionTwoID].setAttribute('src','images/white.png')
            cardsWon.push(cardsChosen)
        }else{
            cards[optionOneID].setAttribute('src','images/blank.png')
            cards[optionTwoID].setAttribute('src','images/blank.png')
            alert('Sorry, try again')
        }
        cardsChosen=[]
        cardsChosenId=[]
        resultDisplay.textContent=cardsWon.length
        if(cardsWon.length===cardArray.length/2){
            resultDisplay.textContent='Congratulations!You found them all!!'
        }

    }



    //flip your card 
    function flipCard(){
        var cardId=this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src',cardArray[cardId].img)
        if(cardsChosen.length===2){
            setTimeout(checkForMatch,500)
        }
    }

  
    createBoard()
    
  })