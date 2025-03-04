// Chat widget toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const chatButton = document.getElementById('chat-button');
    const chatBox = document.getElementById('chat-box');

    if (chatButton && chatBox) {
        chatButton.addEventListener('click', () => {
            chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
        });
    }
});

