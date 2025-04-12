class User {
    constructor({email}){
        this.email = email;
    }

    sendMessage(message){
        console.log(message, "Sending message to");
    }
}

let user = new User({email: "osmar@email.com"})
user.sendMessage("Hello, tudo bem")