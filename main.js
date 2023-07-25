const wrapper = document.querySelector(".wrapper");
const reglink = document.querySelector(".register-link");
const loginlink = document.querySelector(".login-link");

reglink.onclick = () => {
    wrapper.classList.add("active");
}

loginlink.onclick = () => {
    wrapper.classList.remove("active");
}