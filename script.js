const ratingBtn = document.querySelectorAll(".rating-btn");
const subBtn = document.querySelector(".sub-btn");
const container = document.querySelector(".container");
const thankYou = document.getElementById("thank-you");
const para = document.getElementById("para");

let selectedRating = "";

ratingBtn.forEach((btn)=>{
  btn.addEventListener("click",()=>{
    selectedRating = btn.textContent;
  })
});

subBtn.addEventListener("click",()=>{
  if(selectedRating === ""){
    alert("Please select a rating first");
    return;
  }
  container.style.display = "none";
  thankYou.style.display = "block";

  para.textContent = `You selected ${selectedRating} out of 5`
});
