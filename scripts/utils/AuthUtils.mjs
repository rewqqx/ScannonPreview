export function getToken(name, password) {
    let token = "";
    let body = {"name": name, "password": password};
    let request = new XMLHttpRequest();
    let url = "http://" + window.ip + ":" + window.port + "/register";
    request.open("POST", url, false);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("charset", "utf-8");
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200 || request.status == 0) {
                let content = request.responseText;
                let json = JSON.parse(content);
                token = json.token;
            }
        }
    }
    request.send(JSON.stringify(body));
    return token;
}

export function tryLogin(token) {
    let login = "{\"login\": \"\"}";
    let request = new XMLHttpRequest();
    let url = "http://" + window.ip + ":" + window.port + "/" + token;
    request.open("GET", url, false);
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200 || request.status == 0) {
                let content = request.responseText;
                login = JSON.parse(content);
            }
        }
    }
    request.send();
    return login;
}