const previousSchedules=[
    {type:"hosted",id:"2025_BibleStudyPlanQ1"},
    {type:"hosted",id:"2024_BibleStudyPlanQ2"},
    {type:"hosted",id:"2024_BibleStudyPlanQ1"},
    {type:"local",src:"images/Term_Cards/John.jpg"},
    {type:"local",src:"images/Term_Cards/1_Peter.jpg"},
    {type:"local",src:"images/Term_Cards/Daniel.jpg"},
    {type:"local",src:"images/Term_Cards/Haggai.jpg"},
    {type:"local",src:"images/Term_Cards/Thessalonians.jpg"},
    {type:"local",src:"images/Term_Cards/Mark.jpg"},
    {type:"local",src:"images/Term_Cards/Exodus.jpg"}
    ]

const evangelismGallery=[
    {type:"hosted",id:"2025_TrivialPursuit"},
    {type:"hosted",id:"2025_EmptyTomb"},
    {type:"hosted",id:"2024_ChristmasUnwrapped"},
    {type:"hosted",id:"2024_ChristofChristmas"},
    {type:"hosted",id:"2024_BBQ&Identity"},
    {type:"hosted",id:"2024_UltimateDesigner"},
    {type:"hosted",id:"2024_WhatWouldGodDieFor"},
    {type:"hosted",id:"2024_PieForYourThoughts"},
    {type:"local",src:"images/Evangelism_Posters/DaD_Christmas_18.jpg"},
    {type:"local",src:"images/Evangelism_Posters/DaD_Christmas_19.jpg"},
    {type:"local",src:"images/Evangelism_Posters/DaD_Easter_19.jpg"},
    {type:"local",src:"images/Evangelism_Posters/LTT_200529.jpg"},
    {type:"local",src:"images/Evangelism_Posters/LTT_200619.jpg"},
    {type:"local",src:"images/Evangelism_Posters/LTT_200724.jpg"},
    {type:"local",src:"images/Evangelism_Posters/LTT_20200415.jpg"},
    {type:"local",src:"images/Evangelism_Posters/LTT200612.jpg"},
    {type:"local",src:"images/Evangelism_Posters/LTT_190712.jpg"},
    {type:"local",src:"images/Evangelism_Posters/LTT_191008.jpg"},
    {type:"local",src:"images/Evangelism_Posters/GrillAPastor.jpg"},
    {type:"local",src:"images/Evangelism_Posters/LTT_191018.jpg"},
    {type:"local",src:"images/Evangelism_Posters/LTT_191122.jpg"},
    {type:"local",src:"images/Evangelism_Posters/LTT_200207.jpg"}
]

const wallpaperGallery=[
    {type:"local",src:"images/Wallpapers/IMG_0118.PNG"},
    {type:"local",src:"images/Wallpapers/IMG_0125.PNG"},
    {type:"local",src:"images/Wallpapers/IMG_0133.PNG"},
    {type:"local",src:"images/Wallpapers/Psalm130Wallpaper.PNG"},
    {type:"local",src:"images/Wallpapers/IMG_2689.PNG"},
    {type:"local",src:"images/Wallpapers/IMG_2690.PNG"}
]

const summerSSBCGallery=[{type:"hosted",id:"2025_SSBCScheduleSummer"}]

const winterSSBCGallery=[{type:"hosted",id:"2024_SSBCScheduleWinter"}]

let varMap={"previousSchedules":previousSchedules,
    "evangelismGallery":evangelismGallery,
    "wallpaperGallery":wallpaperGallery,
    "summerSSBCGallery":summerSSBCGallery,
    "winterSSBCGallery":winterSSBCGallery}

let imageData=[]

const fs = require('fs');

function loadImageData() {
  try {
    const raw = fs.readFileSync('./imagetest.json', 'utf8'); // path relative to script
    imageData = JSON.parse(raw);
    console.log(imageData);
    return imageData;
  } catch (error) {
    console.error("Failed to load JSON:", error);
  }
}


function listGenerator(){
    //console.log(targetIds)
    for (const eachTargetId in varMap){
        const imagesToRender=varMap[eachTargetId]
        if(imagesToRender){
            let body=""
            let counter=0
            let column=["","","",""]
            for(const eachImage of imagesToRender){
                let source=""
                if(eachImage.type=="hosted"){
                    source=imageData.find(e=>e.name===eachImage.id).link
                }else{
                    source=eachImage.src
                }
                column[counter%4]+=`<img id="img_${counter}" src=${source} class="imgthumb"
                            style="width:100%;max-width:300px"
                            onclick="document.getElementById('modal_${counter}').style.display = 'block'">
                        <div id="modal_${counter}" class="modal">
                            <div class="modal-content">
                            <span class="close" id="close_${counter}"onclick="document.getElementById('modal_${counter}').style.display = 'none'">&times;</span>
                            <img src=${source} style="width:100%">
                            </div>
                        </div>`
                counter+=1
            }
            for (const eachColumn of column){
                body+=`<div class = "column">`+eachColumn+`</div>`
            }
        console.log(eachTargetId)
        console.log(body)
        }
        
    }
}


loadImageData();
listGenerator();