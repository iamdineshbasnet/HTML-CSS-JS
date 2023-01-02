const image = document.querySelectorAll("img");
const prevBtn = document.querySelector(".prevBtn")
const nextBtn = document.querySelector(".nextBtn")

let counter = 0
image.forEach(
    (img, index)=>{
        img.style.left = `${index * 100}%`
    }
)
prevBtn.addEventListener("click", ()=>{
    if(counter ===0){
        counter = image.length-1
    }else{
        counter--;
    }
    imageSlide()
})
nextBtn.addEventListener("click", ()=>{
    if(counter === image.length-1){
        counter = 0
    }else{
        counter++;
    }
    imageSlide()
})
const imageSlide = () =>{
    image.forEach(
        (img)=>{
            img.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}
