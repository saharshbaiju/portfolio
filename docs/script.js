const btn = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){
    document.body.classList.add("lightmode");
    btn.textContent = "DARK";
}else{
    document.body.classList.remove("lightmode");
    btn.textContent = "LIGHT";
}

btn.addEventListener("click", () => {

    document.body.classList.toggle("lightmode");

    if(document.body.classList.contains("lightmode")){
        localStorage.setItem("theme","light");
        btn.textContent = "DARK";
    }else{
        localStorage.setItem("theme","dark");
        btn.textContent = "LIGHT";
    }

});