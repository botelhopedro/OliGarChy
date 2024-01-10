let conta = [];
let emptyArr = [];

let btnCalc = document.getElementsByClassName("calcKey");
let output = document.getElementById("lblResult");

for(let i = 0; i < btnCalc.length; i++){
    btnCalc[i].addEventListener("click", (e)=>{
        switch(btnCalc[i].id){
            case 'num0':
                conta.push("0");
                output.innerHTML+=0;
                break;
            case 'num1':
                conta.push("1");
                output.innerHTML+=1;
                break;
            case 'num2':
                conta.push("2");
                output.innerHTML+=2;
                break;
            case 'num3':
                conta.push("3");
                output.innerHTML+=3;
                break;
            case 'num4':
                conta.push("4");
                output.innerHTML+=4;
                break;
            case 'num5':
                conta.push("5");
                output.innerHTML+=5;
                break;
            case 'num6':
                conta.push("6");
                output.innerHTML+=6;
                break;
            case 'num7':
                conta.push("7");
                output.innerHTML+=7;
                break;
            case 'num8':
                conta.push("8");
                output.innerHTML+=8;
                break;
            case 'num9':
                conta.push("9");
                output.innerHTML+=9;
                break;
            case 'adicao':
                conta.push("+");
                output.innerHTML+="+";
                break;
            case 'subtracao':
                conta.push("-");
                output.innerHTML+="-";
                break;
            case 'multiplicacao':
                conta.push("*");
                output.innerHTML+="X";
                break;
            case 'divisao':
                conta.push("/");
                output.innerHTML+="/";
                break;
            case 'clearAll':
                conta = [];
                output.innerHTML ="";
                break;
            case 'delete':
                conta.pop();
                conta.replace(',','')
                output.innerHTML = conta;
                break;
            case 'resultado':
                calcula();
                break;
        }
    })
}

function calcula(){
    let textConta = "";
    for(let i = 0; i < conta.length; i++){

        textConta+=conta[i];

    }
    conta = [];
    conta.push(eval(textConta))
    output.textContent = eval(textConta)
    textConta=eval(textConta);
}