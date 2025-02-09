let body = document.querySelector('body');
let DarkModeBtn = document.getElementsByClassName("dark-mode-toggle")[0]

DarkModeBtn.addEventListener('click', () => {

    if (body.className == "Dark-Mode") {
        DarkModeBtn.src = "./image/dark_mode_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";
        body.className = " ";
    }
    else if (body.className = " ") {
        DarkModeBtn.src = "./image/light_mode_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg";
        body.className = "Dark-Mode";
    }

})