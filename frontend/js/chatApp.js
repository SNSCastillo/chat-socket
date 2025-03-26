class ChatApp {
    constructor() {
        this.socketHandler = new WebSocketHandler('ws://localhost:8080', (mensaje) => this.chatUI.displayMessage(mensaje));
        this.chatUI = new ChatUI();
    }

    sendMessage() {
        const mensaje = this.chatUI.messageInput.value;
        this.socketHandler.sendMessage(mensaje);
        this.chatUI.clearInput();
    }
}

// Inicializar la aplicación de chat
const chat = new ChatApp();
