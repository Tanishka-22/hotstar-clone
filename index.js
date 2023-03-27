let movies =[
    {
        name: "falcon and the winter solider",
        des:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
           "images/slider 2.png"
        },
        {
            name: "loki",
            des:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image:
               "images/slider 1.png"
        },
        {
            name: "loki",
            des:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image:
                   "images/slider 1.png"
        },
        {
            name: "wanda vision",
            des:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image:
               "images/slider 3.png"
        },
        {
            name: "raya and the dragon",
            des:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image:
               "images/slider 4.png"
        },
        {
            name: "luca",
            des:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image:
               "images/slider 5.png"
        }
];
const carousel=document.querySelector('.carousel');
let slider=[];

let slideIndex=0;

const createSlide = () => {
    if(slideIndex>=movies.length){
        slideIndex=0;
    }

    let slide= document.createElement('div');
    let imgElement= document.createElement('img');
    let content= document.createElement('div');
    let h1= document.createElement('h1');
    let p= document.createElement('p');

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    imgElement.src=movies[slideIndex].image;
    slideIndex++

    slide.className= 'slider';
    content.className= 'slider-content';
    h1.className= 'movie-title';
    p.className= 'movie-des';

    sliders.push(slide.length)

    if(slide.length)
    {
        sliders[0].style.marginLeft = 'calc(-${100 * (sliders.length -2)}% - ${30 * (sliders.length - 2)}px)';
    }
};


for(let i=0; i<=3; i++){
    createSlide();
}

setInterval(()=>{
    createSlide();
    }, 3000);