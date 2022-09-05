const shuffle = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"

 $('#deck').append("<img src='https://pixabay.com/get/g5f22bef9ad56027f6bfd55f1c71854b335ca763261e67023414c5a6b093b8b326c2d71c61dabdcd66b3cfb89319aec04_1280.png'> </img>")

let id 
deck = axios.get(`${shuffle}`).then(deck => id = deck.data.deck_id)

 $('#draw').click(draw1)

function draw1(num){
// const draw = `https://deckofcardsapi.com/api/deck/7glpff2z7au9/draw/?count=1`
const draw = `https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`
 axios
    .get(draw)
    .then(card => { 
        if (card.data.remaining !== 0){
            $('#deck').html(`<img src=${card.data.cards[0].image}> </img>`)
        }else{
            alert('Deck is Empty!')
            $("button").prop("disabled",true)
        }
        })
    // .then(card => console.log(card.data.cards[0].image))
    .catch(err => console.log(err));

}

