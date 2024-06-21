console.log("hello word")




const button_plus = document.querySelector('.button_plus')


console.log(button_plus)




button_plus.addEventListener('click', function(){
    const quantite_number = document.querySelector('.quantite_number').textContent

    const new_quantite= parseInt(quantite_number,10)+1


    document.querySelector('.quantite_number').textContent = new_quantite
})




const button_moyen = document.querySelector('.button_moyen')

console.log(button_moyen)

button_moyen.addEventListener('click', function(){
    const quantite_number= document.querySelector('.quantite_number').textContent

    const baisse_quantite= parseInt(quantite_number, 10)-1

    document.querySelector('.quantite_number').textContent = baisse_quantite
    
})

const reduire_nous  = document.querySelector('.reduire_nous')

console.log(reduire_nous);

reduire_nous.addEventListener('click', function(){
    const quantite_number= document.querySelector('.quantite_number').textContent

    const ecrase= parseInt(quantite_number)-1

    document.querySelector('.quantite_number').textContent = ecrase

})










