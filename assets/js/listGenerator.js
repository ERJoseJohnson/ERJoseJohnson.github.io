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

var varMap={"previousSchedules":previousSchedules,
    "evangelismGallery":evangelismGallery,
    "wallpaperGallery":wallpaperGallery}

var imageData=[]

async function loadImageData(){
    //console.log("yeah")
    try{
        const response= await fetch("assets/js/imagetest.json");
        if(!response.ok)throw new Error(`Failed to load JSON: ${response.status}`);
        imageData=await response.json();
        //console.log("tryfailed")
    } catch(error){
        //console.log("catch")
        console.error(error);
    }
}

function listGenerator(){
    const listsToFill=document.querySelectorAll('[name="targetList"]');
    const targetIds=[]

    for (const eachList of listsToFill){
        targetIds.push(eachList.id);
    }

    console.log(targetIds)

    for (const eachTargetId of targetIds){
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
            //console.log(eachTargetId)
            document.getElementById(eachTargetId).innerHTML=body
        }
        
    }
}

async function init(){
    await loadImageData();
    listGenerator();
    //console.log(document.getElementById("evangelismGallery").innerHTML)
}

window.addEventListener('DOMContentLoaded', init);