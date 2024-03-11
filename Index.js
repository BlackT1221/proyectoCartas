const card = document.getElementById('card')
card.addEventListener('click', (event)=>{
    if (document.querySelector("#card.flipped")){
        card.classList.remove('flipped');
    }else{
        card.classList.add('flipped');
    }
})