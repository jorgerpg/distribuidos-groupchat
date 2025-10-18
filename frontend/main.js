const switchButton = document.querySelector(".switch-tabs");
const registerTab = document.querySelector(".register-tab");
const messageTab = document.querySelector(".message-tab");
switchButton.addEventListener("click", () => {
    if (!registerTab.classList.contains("none")) {
        registerTab.classList.add("none");
        messageTab.classList.remove("none");
    } else {
        registerTab.classList.remove("none");
        messageTab.classList.add("none");
    }
})