let imageList=[]

//Loads the JSON
async function loadimageList(){
    //console.log("yeah")
    try{
        const response= await fetch("assets/js/imagetest.json");
        if(!response.ok)throw new Error(`Failed to load JSON: ${response.status}`);
        imageList=await response.json();
        //console.log("tryfailed")
    } catch(error){
        //console.log("catch")
        console.error(error);
    }
}

//Finds all images with id tag
//Changes their src according to json file
function grabImages(){
    const images=document.querySelectorAll("img[id]")
    //console.log(imageList)
    for (const eachImage of images){
        //dont forget to give img an id that matches with the json name
        imageReference=document.getElementById(eachImage.id);
        //sets src of each image flagged with id (aka those that have hosted images on imgur) to related entry in json
        const entry= imageList.find(e=>e.name===eachImage.id);
        //console.log(entry.link)
        if(entry){
            imageReference.src=entry.link
        }
    }
}

async function init(){
    await loadimageList();
    grabImages();
}

window.addEventListener('DOMContentLoaded', init);