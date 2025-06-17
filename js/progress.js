// const progressLength = [1, 2]

// const progressbarContainer = document.getElementById("progress-container")

// const createProgressEl = (progressNum) => {
//     console.log(progressNum, progressLength.length)
//     if (progressNum % 2 === 0) {
//         return `<div class="path-${progressNum}-container">
//             <div class="container-${progressNum}">
//                 <div class="path-${progressNum}">
//                     <div id="progress-bar-${progressNum}" class="progress-bar-${progressNum % 2 === 0 ? "ver" : "hor"}"></div>
//                 </div>
//             </div>
//             ${progressNum === progressLength.length ? `<div class="indicator">
//                     <div class="indicator-color">
//                         <span>FINAL</span>
//                     </div>
//                 </div>` : ""}

//         </div>

//         `
//     } else {
//         return `<div class="path-${progressNum}-container">
//             <div class="container-${progressNum}">
//                 <div class="indicator">
//                     <div class="indicator-color">
//                         <span>${(progressNum - 3) % 4 === 0 && progressNum >= 3 ? progressNum === progressLength.length ? "FINAL" : progressNum + 1 : progressNum}</span>
//                     </div>
//                 </div>
//                 <div class="path-${progressNum}">
//                     <div id="progress-bar-${progressNum}" class="progress-bar-${progressNum % 2 === 0 ? "ver" : "hor"}"></div>
//                 </div>
//                 <div class="indicator">
//                     <div class="indicator-color">
//                         <span>${(progressNum - 3) % 4 === 0 && progressNum >= 3 ? progressNum : progressNum === progressLength.length ? "FINAL" : progressNum + 1}</span>
//                     </div>
//                 </div>
//             </div>
//         </div>`
//     }

// }

// for (const progressLengthNum of progressLength) {
//     const progressEl = createProgressEl(progressLengthNum)
//     progressbarContainer.innerHTML += progressEl
// }

let progress = Number(sessionStorage.getItem("progress")) || 1;
let stage1 = true;
let horLeft = sessionStorage.getItem("horLeft") || "true";
let initialLeft = Number(sessionStorage.getItem("left")) || 10;
let initialTop = Number(sessionStorage.getItem("top")) || 30;

setTimeout(() => {
  playProgress();
}, 1000);

for (let index = 1; index < progress; index++) {
  const progressBar = document.getElementById("progress-bar-" + index);
  const indicator = document.getElementById(`indicator-color-${index}`);
  progressBar.setAttribute("class", "progress-succeed");
  indicator.setAttribute("class", "indicator-succeed");
}

const playProgress = () => {
  console.log("horLeft: ", horLeft)
  const charHead = document.getElementsByClassName("char-head");
  if (progress <= 6) {
    const progressBar = document.getElementById("progress-bar-" + progress);
    const indicator = document.getElementById(`indicator-color-${progress}`);
    if (progress % 2 === 0) {
      progressBar.setAttribute("class", "play-progress-ver");

      // Define keyframes
      const keyframes = `
            @keyframes headMoveVer-${progress}{
                        0% {
                            top: ${initialTop}px;
                        }

                        100% {
                            top: ${initialTop + 234}px;
                        }
                    }
            `;

      // Inject keyframes into a <style> tag
      const style = document.createElement("style");
      style.textContent = keyframes;
      document.head.appendChild(style);
      charHead[0].style.left = `${initialLeft}px`;

      initialTop = initialTop + 234;
      charHead[0].classList.add("head-move-ver");
    } else {
      charHead[0].classList.remove("head-move-ver");
      progressBar.setAttribute("class", "play-progress-hor");

      if (horLeft === "true") {
        // Define keyframes
        const keyframes = `
            @keyframes headMoveVer-${progress}{
                        0% {
                            left: ${initialLeft}px;
                        }

                        100% {
                            left: ${initialLeft + 230}px;
                        }
                    }
            `;

        // Inject keyframes into a <style> tag
        const style = document.createElement("style");
        style.textContent = keyframes;
        document.head.appendChild(style);
        charHead[0].style.top = `${initialTop}px`;
        horLeft = false;
        initialLeft += 230;
      } else {
        // Define keyframes
        const keyframes = `
            @keyframes headMoveVer-${progress}{
                        0% {
                            left: ${initialLeft}px;
                        }

                        100% {
                            left: ${initialLeft - 230}px;
                        }
                    }
            `;

        // Inject keyframes into a <style> tag
        const style = document.createElement("style");
        style.textContent = keyframes;
        document.head.appendChild(style);
        charHead[0].style.top = `${initialTop}px`;
        horLeft = true;
        initialLeft -= 230;
        console.log("her")
      }
    }
    charHead[0].style.animation = `headMoveVer-${progress} 3.5s forwards`;
    indicator.classList.add("success-indicator");
    progress++;

    // sessionStorage.setItem("left", initialLeft);
    // sessionStorage.setItem("top", initialTop);
    // sessionStorage.setItem("progress", progress);
    // sessionStorage.setItem("horLeft", horLeft)
    
    setTimeout(() => {
      // location.href = PROGRESS_DATA[progress]
    }, 3500);

  }else{
    location.href = '/html/final.html'
  }

  // 
};
const headPopup = () => {
  const charHead = document.getElementsByClassName("char-head");

  const keyframes = `
    @keyframes headIntroPopup {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
    `;

  const style = document.createElement("style");
  style.textContent = keyframes;
  document.head.appendChild(style);

  // Apply the intro popup animation
  charHead[0].style.animation = "headIntroPopup 1s ease-out";
  charHead[0].style.top = `${initialTop}px`
  charHead[0].style.left = `${initialLeft}px`
};
