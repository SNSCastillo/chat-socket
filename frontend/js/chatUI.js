class ChatUI {
    constructor() {
        this.chatDiv = document.getElementById("chat");
        this.messageInput = document.getElementById("message");
    }

    displayMessage(mensaje) {
        const nuevoMensaje = document.createElement("p");
        nuevoMensaje.textContent = mensaje;
        this.chatDiv.appendChild(nuevoMensaje);
    }

    clearInput() {
        this.messageInput.value = "";
    }
}
