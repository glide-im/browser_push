document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("push_token_btn");

    button.addEventListener("click", async () => {
        const token = document.getElementById("push_token").value;
        const server = document.getElementById("server_url").value;
        if (token && server) {
            createNotify("Connecting...", {
                body: "Connect to " + server,
                icon: "images/icon.png",
                data: "https://im.dengzii.com/"
            });
        }
    })
})

function createNotify(title, options) {

    if (Notification.permission === "granted") {
        notify(title, options);
    } else {
        Notification.requestPermission(function (res) {
            if (res === "granted") {
                notify(title, options);
            }
        }).then(r => {
            console.log(r);
        });
    }

    function notify($title, $options) {
        const notification = new Notification($title, $options);
        notification.onshow = function (event) {
        };
        notification.onclose = function (event) {
        };
        notification.onclick = function (event) {
            window.open(event.target.data)
            notification.close();
        };
    }
}
