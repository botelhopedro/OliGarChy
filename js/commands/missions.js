let painelMissao = document.getElementById("missonApp");
let bodyMission = document.getElementById("bodyMissions");

let missionList = [
    // Título da missão,            Conteúdo explicando                            concluido bloqueado(aguardando conclusão das missões anteriores)
    ['Troque a senha da internet', 'conecte-se na rede souza e troque a sua senha', false, false],
    ['Troque o nome da internet', 'conecte-se na rede souza e troque seu nome', false, true]

]

for(let i = 0; i < missionList.length; i++){
    // bodyMission.innerHTML += `Missão ${i+1} <button onclick='verificaMission(${i})'> Verificar Missão </button> <h4 class='missionConclude${i}'> Missão ${missionList[i][2]}</h4><br/>`;
    bodyMission.innerHTML += `Missão: ${missionList[i][0]} <button onclick='verificaMission(${i})' class='btnMission'> Verificar </button> <h4 class='missionConclude${i}'> ${missionList[i][1]} </h4>`
}
function verificaMission(indexMission){
    
    if(indexMission == 0){
        
        let missiontitle = document.getElementsByClassName("missionConclude"+indexMission);
        if(wifiConnected == 'souza'){
            for(let i = 0; i < wifi.length; i++){
                if(wifi[i][0] == wifiConnected){
                    if(wifi[i][1] == 'spmm'){
                        missiontitle[0].innerHTML = "erro, troque a senha";
                    }else{
                        missiontitle[0].innerHTML = "Concluído!!"
                        missionList[indexMission][2] = true
                        missionList[indexMission][3] = true
                    }
                }
            }
        }
        else{
            missiontitle[0].innerHTML = "Conecte-se a uma internet!"
        }

    }else if(indexMission == 1){

        let missiontitle = document.getElementsByClassName("missionConclude"+indexMission);
        if(wifi[0][0] == 'souza'){
            missiontitle[0].innerHTML = "Erro, troque o nome da conexão!";
        }else{
            missiontitle[0].innerHTML = "Concluído!!"
            missionList[indexMission][2] = true
            missionList[indexMission][3] = true
        }

    }

}