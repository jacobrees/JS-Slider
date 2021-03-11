const slides = document.querySelectorAll('.slide')
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')

slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`
})

let counter = 0

function carousel(){
    if(counter === slides.length){
        counter = 0
    }else if(counter < 0){
        counter = slides.length -1
    }
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}

nextBtn.addEventListener('click', function(){
    counter += 1
    carousel()
})

prevBtn.addEventListener('click', function(){
    counter -= 1
    carousel()
})