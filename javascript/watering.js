const dates = document.querySelectorAll(".date");

dates.forEach(date => {
    date.addEventListener("click", () => {
        date.classList.toggle("active");
    });
}); 


const accordion = document.querySelector(".accordion");
const wateringTracker = document.getElementById("watering-tracker");

  if (accordion) {
    accordion.addEventListener("click", () => {
      wateringTracker.classList.toggle("active");
      accordion.classList.toggle("active");

       if (accordion.classList.contains("active")) {
            accordion.firstChild.textContent = "This week";
        } else {
            accordion.firstChild.textContent = "This month";
        }
    });
    
  };



