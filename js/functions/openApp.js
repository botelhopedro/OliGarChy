let consoleApp = document.getElementsByClassName('consoleIcon');

let apps = document.getElementsByClassName("app");

let exitBtnApp = document.getElementsByClassName('exitApp');

for(let i = 0; i < exitBtnApp.length; i++){
    exitBtnApp[i].addEventListener('click', (e)=>{
        exitApp(exitBtnApp[i].parentElement.parentElement)
    })
}

for(let i = 0; i < apps.length; i++){
    
    apps[i].addEventListener('mousedown', (e)=>{});

}

const movableDivs = document.querySelectorAll(".movableDiv");

        movableDivs.forEach((movableDiv) => {
            const header = movableDiv.querySelector(".headerApp");
            let isDragging = false;
            let offsetX, offsetY;

            header.addEventListener("mousedown", (e) => {
                isDragging = true;
                offsetX = e.clientX - movableDiv.getBoundingClientRect().left;
                offsetY = e.clientY - movableDiv.getBoundingClientRect().top;
            });

            document.addEventListener("mousemove", (e) => {
                if (!isDragging) return;
                const newX = e.clientX - offsetX;
                const newY = e.clientY - offsetY;
                movableDiv.style.left = `${newX}px`;
                movableDiv.style.top = `${newY}px`;
            });

            document.addEventListener("mouseup", () => {
                isDragging = false;
            });
        });

function exitApp(parent){
    parent.style.top = '-1000px';
}
