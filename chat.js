document.addEventListener('DOMContentLoaded', function () {
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatMinimize = document.getElementById('chat-minimize');
    const chatContainer = document.querySelector('.chat-container');

    chatSend.addEventListener('click', function () {
        const userMessage = chatInput.value;
        if (userMessage) {
            addMessage(userMessage, 'user');
            chatInput.value = '';
            getBotResponse(userMessage);
        }
    });

    chatMinimize.addEventListener('click', function () {
        chatContainer.classList.toggle('minimized');
        if (chatContainer.classList.contains('minimized')) {
            chatMinimize.innerHTML = '&#43;'; // Change to "+" when minimized
        } else {
            chatMinimize.innerHTML = '&#8211;'; // Change to "-" when expanded
        }
    });

    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.className = sender === 'user' ? 'chat-user-message' : 'chat-bot-message';
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getBotResponse(userMessage) {
        // Simple bot response logic
        let botMessage = 'Sorry, I do not understand.';
        if (userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('hi')) {
            botMessage = 'Hello! How can I help you today?';
        } else if (userMessage.toLowerCase().includes('help')) {
            botMessage = 'Sure, what do you need help with?';
        }
        addMessage(botMessage, 'bot');
    }
});
