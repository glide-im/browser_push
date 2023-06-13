const button = document.getElementById("push_token_btn");

button.addEventListener("click", async () => {
    const token = document.getElementById("token").value;
    if (token) {

    }
})

chrome.runtime.onInstalled.addListener(() => {
    // chrome.storage.sync.set({  });
});