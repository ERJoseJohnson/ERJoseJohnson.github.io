const socialsCarou=[
    {type:"local",src:"images/Socials_Carousel_Pics/hotpot.JPG"},
    {type:"local",src:"images/Socials_Carousel_Pics/hotpot1.JPG"},
    {type:"local",src:"images/Socials_Carousel_Pics/hotpot2.JPG"},
    {type:"local",src:"images/Socials_Carousel_Pics/hotpot3.JPG"},
    {type:"local",src:"images/Socials_Carousel_Pics/fullsizeoutput_5bf9.jpeg"},
    {type:"local",src:"images/Socials_Carousel_Pics/fullsizeoutput_5c02.jpeg"},
    {type:"local",src:"images/Socials_Carousel_Pics/fullsizeoutput_5c22.jpeg"},
    {type:"local",src:"images/Socials_Carousel_Pics/fullsizeoutput_5c60.jpeg"},
    {type:"local",src:"images/Socials_Carousel_Pics/IMG_5242.JPG"},
    {type:"local",src:"images/Socials_Carousel_Pics/IMG_5345.JPG"},
    {type:"local",src:"images/Socials_Carousel_Pics/IMG_5630.JPG"},
]

let carouselVarMap={"socialsCarou":socialsCarou}

let imageCarou=[]

async function loadImageData(){
    //console.log("yeah")
    try{
        const response= await fetch("assets/js/imagetest.json");
        if(!response.ok)throw new Error(`Failed to load JSON: ${response.status}`);
        imageCarou=await response.json();
        //console.log("tryfailed")
    } catch(error){
        //console.log("catch")
        console.error(error);
    }
}

function carouselGenerator(){
    const carouselsToFill=document.querySelectorAll('[name="targetCarousel"]')
    const targetIds=[]

    for(const eachCarou of carouselsToFill){
        targetIds.push(eachCarou.id);
    }

    //console.log(targetIds)
    let thisCarouCounter=0
    for(const eachTargetId of targetIds){
        const imagesToRender=carouselVarMap[eachTargetId]
        thisCarouCounter+=1
        if(imagesToRender){
            //Main body
            let mainCarou='<div class="slideshow-container">'
            let dots=`<div style="text-align:center">`
            let counter=0
            let lenImages=imagesToRender.length
            for(const eachImage of imagesToRender){
                let source=""
                if(eachImage.type=="hosted"){
                    source=imageCarou.find(e=>e.name===eachImage.id).link
                }else{
                    source=eachImage.src
                }
                counter+=1
                mainCarou+=
                `<div class="mySlides1 fade">
				    <div class="numbertext">${counter} / ${lenImages}</div>
				    <img src=${source} style="width:100%">
				</div>`
                dots+=
                `<span class="dot1" onclick="currentSlide(${thisCarouCounter},${counter})"></span>`
            }
            mainCarou+=`<a class="prev" onclick="plusSlides(${thisCarouCounter},-1)">&#10094;</a>
				  <a class="next" onclick="plusSlides(${thisCarouCounter},1)">&#10095;</a>`
            mainCarou+="</div>"
            dots+=`</div>`

            document.getElementById(eachTargetId).innerHTML=mainCarou+dots
            console.log(mainCarou)
        }
    }
}

async function init(){
    await loadImageData();
    carouselGenerator();
}

window.addEventListener('DOMContentLoaded',init)