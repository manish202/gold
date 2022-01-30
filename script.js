//slider
let left_btn = document.querySelector("#slider .btn-left");
let right_btn = document.querySelector("#slider .btn-right");
let all_slide = document.querySelectorAll("#slider .slide");
let slide_length = all_slide.length;
let index = 0;
let slide = (dir) => {
    all_slide.forEach((elem,ind) => {
        elem.classList.remove("active");
    });
    if(dir == "left"){
        index--;
        if(index < 0){index = slide_length - 1;}
        all_slide[index].classList.add("active");
    }else{
        index++;
        if(index >= slide_length){index = 0;}
        all_slide[index].classList.add("active");
    }
}
left_btn.addEventListener("click",() => {slide("left")});
right_btn.addEventListener("click",() => {slide("right")});
//testimonial
let left_btn2 = document.querySelector("#testimonial .btn-left");
let right_btn2 = document.querySelector("#testimonial .btn-right");
let all_slide2 = document.querySelectorAll("#testimonial .slide");
let slide_length2 = all_slide2.length;
let index2 = 0;
let slide2 = (dir) => {
    all_slide2.forEach((elem,ind) => {
        elem.classList.remove("active");
    });
    if(dir == "left"){
        index2--;
        if(index2 < 0){index2 = slide_length2 - 1;}
        all_slide2[index2].classList.add("active");
    }else{
        index2++;
        if(index2 >= slide_length2){index2 = 0;}
        all_slide2[index2].classList.add("active");
    }
}
left_btn2.addEventListener("click",() => {slide2("left")});
right_btn2.addEventListener("click",() => {slide2("right")});