// document.addEventListener('DOMContentLoaded', function () {
//     const messageInput = document.getElementById('message-input');
//     const sendButton = document.getElementById('send-button');
//     const chatMessages = document.getElementById('chat-messages');

//     sendButton.addEventListener('click', function () {
//         const userMessage = messageInput.value.trim();
//         if (userMessage !== '') {
//             appendMessage('You', userMessage);
//             messageInput.value = '';
            
//             // Simulate a response after a short delay
//             setTimeout(function () {
//                 const responseMessage = generateResponse(userMessage);
//                 appendMessage('Emily', responseMessage);
//             }, 1000); // Simulate a 1-second response delay
//         }
//     });

//     function appendMessage(sender, message) {
//         const messageDiv = document.createElement('div');
//         messageDiv.className = 'message';
//         messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
//         chatMessages.appendChild(messageDiv);
//         chatMessages.scrollTop = chatMessages.scrollHeight;
//     }

//     function generateResponse(userMessage) {
//         // Simple response generation logic (you can make this more sophisticated)
//         if (userMessage.toLowerCase().includes('hello')) {
//             return 'Hi there!';
//         } else if (userMessage.toLowerCase().includes('how are you')) {
//             return 'I\'m just a chatbot, but I\'m here to help!';
//         } else {
//             return 'I don\'t understand that. Can you please rephrase?';
//         }
//     }
// });
