const btn = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("lightmode");
    btn.textContent = "DARK";
}else{
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