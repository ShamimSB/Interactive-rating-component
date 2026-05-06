const rattingBtn = document.querySelectorAll(".rating-btn");
const subBtn = document.querySelector(".sub-btn");
const container = document.querySelector(".container");
const thankYou = document.getElementById("thank-you");
const para = document.getElementById("para");

let selectedRating = "";

rattingBtn.forEach((btn)=>{
  btn.addEventListener("click",()=>{
    selectinedRatting = btn.textContent;
  })
});

subBtn.addEventListener("click",()=>{
  if(selectinedRatting === ""){
    alert("Please select a rating first");
    return;
  }
  container.style.display = "none";
  thankYou.style.display = "block";

  para.textContent = `You selected ${selectinedRatting} out of 5`
});
