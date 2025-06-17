let slide = 0
let imageArr = [];
const currentStage = sessionStorage.getItem("currentStage") || "bonifacio";

const bodyEl = document.getElementsByTagName("body")[0];
const htmlEl = document.getElementsByTagName("html")[0];

bodyEl.style.backgroundImage = `url('../assets/image/${currentStage}.jpg')`;
bodyEl.style.backgroundRepeat = "no-repeat";
bodyEl.style.backgroundPosition = "center";
bodyEl.style.backgroundSize = "cover";
bodyEl.style.height = "100%";
bodyEl.style.display = "flex";
bodyEl.style.flexDirection = "column";
bodyEl.style.justifyContent = "center";
bodyEl.style.alignItems = "center";

htmlEl.style.backgroundImage = `url('../assets/image/${currentStage}.jpg')`;
htmlEl.style.backgroundRepeat = "no-repeat";
htmlEl.style.backgroundPosition = "center";
htmlEl.style.backgroundSize = "cover";
htmlEl.style.height = "100%";
htmlEl.style.display = "flex";
htmlEl.style.flexDirection = "column";
htmlEl.style.justifyContent = "center";
htmlEl.style.alignItems = "center";


const progress = sessionStorage.getItem("progressBarStage") || "1";
const lessons = LESSON_DATA[progress]
const nextImage = () => {
    console.log(slide + 1)
    if (slide + 1 < imageArr.length) {
        slide++
        imageArr.forEach((lesson, key) => {
            if (slide === key) {
                lesson.style.display = "block"
                lesson.classList.add("slide")
            } else {
                lesson.style.display = "none"
                lesson.classList.remove("slide")
            }

        })
    }

}

const prevImage = () => {
    console.log(slide - 1)
    if (slide - 1 >= 0) {
        slide--
        imageArr.forEach((lesson, key) => {
            if (slide === key) {
                lesson.style.display = "block"
                lesson.classList.add("slide")
            } else {
                lesson.style.display = "none"
                lesson.classList.remove("slide")
            }

        })
    }

}

const skipLesson = () => {
    console.log("hey")
    location.href = "/html/quiz.html"
}

window.addEventListener("load", () => {
    createImageDiv()
})

const createImageDiv = () => {
    const imageContainer = document.getElementById("image-container")
    lessons.forEach((lesson, key) => {
        if (key === 0) {
            imageContainer.innerHTML += `<img id="image${key}" class="image-slide" src="${lesson.image}" alt="">`
        } else {
            imageContainer.innerHTML += `<img id="image${key}" class="image-slide" style="display:none" src="${lesson.image}" alt="">`
        }
    })

    const imageSlides = document.getElementsByClassName(`image-slide`)
    imageArr = Array.from(imageSlides)
}

