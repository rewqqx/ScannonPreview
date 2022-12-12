import {Menu} from "../Menu.mjs";

export class SignInMenu extends Menu {
    constructor(context) {
        super(context);
    }

    generateMenu() {
        this.context.innerHTML = "";
        document.getElementById("ui").style.display = "";

        let content = document.createElement("div");
        content.setAttribute("class", "content");

        let panel = document.createElement("div");
        panel.setAttribute("class", "panel");
        panel.setAttribute("style", "width: 600px; height: 350px; margin-top:200px");
        content.appendChild(panel);

        let topic = document.createElement("h1");
        topic.setAttribute("class", "header");
        topic.setAttribute("style", "font-size: 100px; margin-top: -5px;");
        topic.innerHTML = "Scannon";
        panel.appendChild(topic);

        this.login = document.createElement("input");
        this.login.setAttribute("type", "email");
        this.login.setAttribute("id", "login");
        this.login.setAttribute("class", "input_scannon");
        this.login.setAttribute("placeholder", "Login");
        panel.appendChild(this.login);

        this.password = document.createElement("input");
        this.password.setAttribute("type", "password");
        this.password.setAttribute("id", "password");
        this.password.setAttribute("class", "input_scannon");
        this.password.setAttribute("placeholder", "Password");
        panel.appendChild(this.password);

        this.button = document.createElement("div");
        this.button.setAttribute("class", "small_button");
        this.button.setAttribute("style", "align-self: center; height: 60px; margin-top: 20px;font-size: 30px;");
        this.button.innerHTML = "LOGIN";
        this.button.onclick = this.tryLogin;

        panel.appendChild(this.button);

        this.context.appendChild(content);
    }

    tryLogin() {
        console.log(document.getElementById('password').value);
    }
}