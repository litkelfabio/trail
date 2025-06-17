let dialogNumber = 0;
const contentContainer = document.getElementsByClassName("content-container")[0]
const bodyEl = document.getElementsByClassName("introduce-content")[0]


if(!userName){
    location.href = "/index.html"
}

setTimeout(() => {
    bodyEl.style.visibility = "visible"
}, 4000);

setTimeout(() => {
    startDialog();
}, 5000);

const startDialog = () => {
    insertDialogMessage();
    startSpeaking();
    document.getElementById("back").disabled = true
}

const end = () => {
   sessionStorage.clear()
   sessionStorage.clear()
   location.href = '/html/firstScene.html' 
}


const insertDialogMessage = () => {
    if(FINAL[dialogNumber]){
        contentContainer.innerHTML = `
        <div class="dialog-container space-between">
            <p class="dialog">${FINAL[dialogNumber]}</p>
            <div class="end-x">
                <button id="next" class="primary" onclick="end()">END</button>
            </div>
        </div>`;
    }else{
        location.href = "/html/quiz.html"
    }
}

const startSpeaking = () => {
    const mouthEl = document.getElementById("mouth")
    mouthEl.classList.toggle("speaking")

    setTimeout(() => {
        stopSpeaking();
     }, 3000);
}

const stopSpeaking = () => {
    const mouthEl = document.getElementById("mouth")
    mouthEl.classList.remove("speaking")
}

