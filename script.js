function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var message = messageInput.value.trim();
    
    if (message !== "") {
        var messagesContainer = document.getElementById("messages");
        var newMessage = document.createElement("div");
        newMessage.classList.add("message");
        newMessage.innerText = message;
        messagesContainer.appendChild(newMessage);

        // Clear the input field after sending the message
        messageInput.value = "";

        // Scroll to the bottom of the messages container
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}
