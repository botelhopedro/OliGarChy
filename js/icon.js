
let deskIcon = document.getElementsByClassName('icon');

for(let i = 0; i < deskIcon.length; i++){
    
    deskIcon[i].addEventListener('click', avaliacao(deskIcon[i]));
    
}
function avaliacao(item){

    switch(item.id){
        case 'consoleIcon':
            item.addEventListener('click', (e)=>{consoleAction()});
            break;
        case 'wordpadIcon':
            item.addEventListener('click', (e)=>{wordpadApp()});
            break;
        case 'calcIcon':
            item.addEventListener('click', (e)=>{calcAction()})
            break;
        case 'missionIcon':
            item.addEventListener('click', (e)=>{missonAction()})
            break;
        case 'chatIcon':
            item.addEventListener('click', (e)=>{chatAction()})
            break;
        default:
            console.log('icone não cadastrado');
            break;    
    }

}

function chatAction(){
    let chatApp = document.querySelector('#chatApp');

    chatApp.style.top = '0px';
    chatApp.style.left = '0px';
}

function consoleAction(){
    let consoleApp = document.querySelector('#consoleApp');

    consoleApp.style.top = "0px";
    consoleApp.style.left = "0px";

}

function wordpadApp(){
    let wordpadApp = document.querySelector('#wordpadApp');

    wordpadApp.style.top = '0px';
    wordpadApp.style.left = '0px';
}

function calcAction(){
    let calcApp = document.getElementById('calculatorApp');

    calcApp.style.top = '0px';
    calcApp.style.left = '0px';

}

function missonAction(){
    let missionApp = document.getElementById('missonApp');

    missionApp.style.top = '0px';
    missionApp.style.left = '0px';

}