class WebSocketHandler {
    constructor(url, onMessageCallback) {
        this.socket = new WebSocket(url);
        this.socket.onopen = this.onOpen;
        this.socket.onmessage = (event) => this.onMessage(event, onMessageCallback);
        this.socket.onclose = this.onClose;
    }

    onOpen() {
        console.log("Conexión WebSocket abierta");
    }

    onMessage(event, onMessageCallback) {
        const mensaje = event.data;
        console.log(mensaje);
        onMessageCallback(mensaje);
    }

    onClose() {
        console.log("Conexión WebSocket cerrada");
    }

    sendMessage(mensaje) {
        this.socket.send(mensaje);
    }
}
