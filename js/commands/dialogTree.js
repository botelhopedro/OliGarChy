// dialog.js


// Define the dialog tree structure
const dialogTree = {
  message: "Salve cria",
  options: [
    {
      text: "Quem é você?",
      next: {
        message: "Meu nome é Exploit (na verdade é Jairo, mas eu acho Exploit mais legal)",
        options: [
          {
            text: "Ah ta, maneiro",
            next: {
              message: "Indo pro assunto principal, tua segurança tá uma porcaria hein",
              options: [
                {
                  text: "Putz, serio?",
                  next: {
                    message: "Claro, Como vc acha que teu pc mudou tanto?",
                    options: [
                      {
                        text:"Putz que fita, eu não sabo, mas acho que isso tem haver com você",
                        next:{
                          message: "É, tem sim, mas a gente entrou aqui pra te ajudar, eu tava andando pela deep web e vi que seus dados tavam sendo vendidos, fiquei com dó de você",
                          options:[
                            {
                              text: "Ah valeu, mas o que eu faço?",
                              next:{
                                message: "A gente adicionou o aplicativo de missões, ele vai ter algumas vulnerabilidades que a gente notou no seu computador",
                                options: [
                                  {
                                    text: "E agora?",
                                    next: {
                                      message: "Agora é com você, Caso tenha alguma dúvida, escreve 'ajuda' no terminal e ele vai te ensinar sobre os comandos",
                                      options: []
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              text: "Legal, então você comprou?",
                              next:{
                                message: "Bem... Comprei, mas foi pra te ajudar",
                                options: [
                                  {
                                    text: "Ok, mas e ai?",
                                    next: {
                                      message: "Olha, vou te dar a letra logo, sabe o ícone de um quadro de tarefas? ali eu coloquei pra você umas missões, são conceitos, mas quando você for pra qualquer outro aparelho seu, lembra do que você fez aqui e adapta pro seu sistema",
                                      options: [
                                        {
                                          text: "Entendi, mas como eu vou realizar as missões?",
                                          next: {
                                            message: "Isso é simples, vai pro console e digita 'ajuda', ele vai listar os comandos pra você, se você tiver mais dúvida ainda, escreve o comando que você quer aprender e no fim coloca ajuda, blz? agora é com você",
                                            options: []
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ],
                  },
                },
                {
                  text: "Entendo, mas por que você entrou no meu computador?",
                  next: {
                    message: "Bem... Por diversão, mas também porque eu vi seus dados sendo vendidos e fiquei com dó",
                    options: [
                      {
                        text: "Ok, você vai me ajudar então?",
                        next:{
                          message: "Claro, pra começar, vê aquele quadro? ele é onde eu adicionei umas 'missões' pra você, clica lá e dá uma olhada",
                          options: [
                            {
                              text: "Cliquei, mas o que são essas missões?",
                              next:{
                                message: "Eu fiz umas coisas pra te ajudar a entender melhor como se proteger, também fiz esse sistema pra te ajudar melhor",
                                options: [
                                  {
                                    text: "Sistema?",
                                    next: {
                                      message: "Sim, esse 'computador' que você está mexendo não é exatamente igual ao que você conhece, ele tem algumas coisas simplificadas pra você sozinho depois buscar como funciona no seu computador, ou celular, ou qualquer coisa...",
                                      options: [
                                        {
                                          text: "Ah, entendo... Mas por onde começar?",
                                          next: {
                                            message: "Dentro do quadro tem as missões, todas elas vão envolver o terminal, o segundo ícone da sua área de trabalho",
                                            options: [
                                              {
                                                text: "OK, e agora?",
                                                next: {
                                                  message: "Ali vou colocar o que notei que estava desprotegido e te dar uma breve dica de como você consegue se proteger",
                                                  options: [
                                                    {
                                                      text: "Tranquilo",
                                                      next:{
                                                        message: "Agora é com você, caso tenha dúvidas joga um 'ajuda' no terminal, lá vai estar os comandos! Flw",
                                                        options:[]
                                                      }
                                                    }
                                                  ]
                                                }
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    text: "Proteger?",
                                    next: {
                                      message: "Sim, eu sei que seu PC, seu celular, sua geladeira e essas coisas não são assim normalmente, mas é mais pelo conhecimento...",
                                      options: [
                                        {
                                          text: "Ah tá, entendi, mas como eu vou aprender esse tal 'conhecimento'?",
                                          next: {
                                            message: "Seu melhor amigo vai ser o terminal, lá você vai conseguir ter toda a sua liberdade, escreve ajuda e ele vai te detalhar sobre cada comando",
                                            options: []
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};

const messageDiv = document.getElementById("message");
const optionsDiv = document.getElementById("options");

let history = []; // To keep track of the dialog history

// Function to display a message with a typing effect
function typeMessage(message, callback) {
  let index = 0;
  messageDiv.textContent = "";
  const typingInterval = 25; // Adjust the typing speed as needed

  function typeCharacter() {
    if (index < message.length) {
      messageDiv.textContent += message.charAt(index);
      index++;
      setTimeout(typeCharacter, typingInterval);
    } else {
      // Typing is complete, execute the callback (if provided)
      if (typeof callback === "function") {
        callback();
      }
    }
  }

  typeCharacter();
}

// Function to display a node in the dialog tree
function displayNode(node) {
  // Use the typing effect to display the message
  typeMessage(node.message, function () {
    optionsDiv.innerHTML = "";

    if (node.options.length > 0) {
      for (let i = 0; i < node.options.length; i++) {
        const option = node.options[i];
        const button = document.createElement("button");
        button.textContent = option.text;
        button.addEventListener("click", () => {
          if (option.action) {
            option.action();
          } else {
            navigateTree(node, i);
          }
        });
        optionsDiv.appendChild(button);
      }

      // Add a "Voltar" (back) button except for the first layer
      if (history.length > 0) {
        const backButton = document.createElement("button");
        backButton.textContent = "Voltar";
        backButton.addEventListener("click", goBack);
        optionsDiv.appendChild(backButton);
      }
    }
  });
}

// Function to navigate through the dialog tree
function navigateTree(node, choice) {
  const selectedOption = node.options[choice];
  if (selectedOption) {
    history.push(node); // Store the current node in history
    displayNode(selectedOption.next);
  } else {
    messageDiv.textContent = "Invalid choice. Please select a valid option.";
  }
}

// Function to go back to the previous node in history
function goBack() {
  if (history.length > 0) {
    const previousNode = history.pop();
    displayNode(previousNode);
  }
}

// Start the dialog by displaying the initial node
displayNode(dialogTree);
