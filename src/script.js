const dropMenuBtn = document.getElementById("drop-button");
const dropList = document.querySelector(".drop-cont");
dropMenuBtn.addEventListener("click", event=>{
    dropList.style.display === "block" ? dropList.style.display = "none" : dropList.style.display = "block";
})