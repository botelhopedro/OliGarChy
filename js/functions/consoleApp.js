let consoleInput = document.getElementById('inputConsole');
let consoleOut = document.getElementById('outputConsole');
let wifiConnected = "";

consoleInput.addEventListener('keydown', (e)=>{consoleCommand(e)})

function consoleCommand(key){
    switch(key.keyCode){
        case 13:
            comandoExe();
            break;
    }
}

function comandoExe(){
    let comando = consoleInput.value;
    switch(comando){
        case 'membros':
            for(let i = 0; i < members.length; i++){
                consoleOut.value += members[i]+"\n";
            }
            break;
        case 'ajuda':
            for(let i = 0; i < help.length; i++){
                consoleOut.value += help[i]+"\n";
            }
            break;
        case 'wifi':
            for(let i = 0; i < wifi.length; i++){
                consoleOut.value += wifi[i][0]+" - "+wifi[i][2] + "\n";
            }
            break;
        case 'limpar':
            consoleOut.value = "";
            break;
        case 'wifi ajuda':
            for(let i = 0; i < wifiAjuda.length; i++){
                consoleOut.value += wifiAjuda[i]+"\n";
            }
            break;
        default:
            comandoComplex(comando)
            break;
    }
    consoleInput.value="";
    consoleInput.focus;
}

function comandoComplex(comando){
    let wifiConnect = comando.split(" ");
    
    if(wifiConnect[0] == 'wifi'){

        if(wifiConnect[1] == 'conectar'){
    
            for(let i = 0; i < wifi.length; i++){
               
                if(wifi[i][0].includes(wifiConnect[2])){
               
                    if(wifi[i][1] == wifiConnect[3]){
                        consoleOut.value += "conectado em "+wifi[i][0]+"\n";
                        wifiConnected = wifi[i][0];
                    }else{
                        consoleOut.value += "Senha errada"+"\n"
                    }
               
                }
        
            }
        
        }else if(wifiConnect[1] == 'configurar'){
    
            // 0     1           2      3      4
            // wifi configurar trocar senha novaSenha
            if(wifiConnected != ""){

                if(wifiConnect[2] == 'trocar' && wifiConnect[3] == 'senha'){

                    for(let i = 0; i < wifi.length; i++){
                    
                        if(wifi[i][0] == wifiConnected){
                            
                            wifi[i][1] = wifiConnect[4];
                            consoleOut.value += "Nova Senha Colocada! Reconecte \n";
                            wifiConnected = "";
                        
                        }
                
                    }

                }else if(wifiConnect[2] == 'trocar' && wifiConnect[3] == 'nome'){

                    for(let i = 0; i < wifi.length; i++){
                    
                        if(wifi[i][0] == wifiConnected){
                            
                            wifi[i][0] = wifiConnect[4];
                            consoleOut.value += "Nome Trocado! Reconecte novamente! \n";
                            wifiConnected = "";
                        
                        }
                
                    }

                }
            }else{
                consoleOut.value += "Conecte-se a uma conexão antes!";
            }
    
        }else if(wifiConnect[1] == 'desconectar'){
            consoleOut.value += "Desconectado!\n";
            wifiConnected = "";
        }else if(wifiConnect[1] == 'conectado'){

            consoleOut += `O wifi conectado é ${wifiConnected} \n`;

        }
        
    }
    if(wifiConnect[0] == 'echo'){
        if(wifiConnect[1] == 'ajuda' && wifiConnect[2] == undefined){
            consoleOut.value += "O comando echo serve para digitar algo na saída do console, escreva echo e depois o que você quer escrever, não tem muita utilidade, mas é legal para passar o tempo"+"\n";
        }else{
            for(let i = 1; i < wifiConnect.length; i++){
                consoleOut += wifiConnect
            }
        }
    }
    else{
        consoleOut.value += "Comando não reconhecido, tente ajuda para escreve-lo corretamente"
    }

}