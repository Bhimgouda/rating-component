const ratingBtns = document.querySelectorAll('.rating-btn');
const submitBtn = document.querySelector('.submit-btn')
const ratingPage = document.querySelector('.rating-page')
const userRating = document.querySelector('.user-rating')

let value = undefined;

ratingBtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        value = btn.value;
    })
})

submitBtn.addEventListener('click', ()=>{
    console.log('heya');
    if (value!==undefined){
        ratingPage.classList.add('hide')
    }
    userRating.textContent = value;
})