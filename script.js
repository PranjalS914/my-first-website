let changed = false;

function showMessage() {
    if (changed === false) {
        document.querySelector("h1").textContent = "Thanks for visiting! 🚀";
        changed = true;
    } else {
        document.querySelector("h1").textContent = "Hi! I'm Pranjal 👋";
        changed = false;
    }
}