const searchHotel = document.querySelector(".modal-link");
const popUp = document.querySelector(".modal-book");
const adults = popUp.querySelector("[name=adults]");
const kids = popUp.querySelector("[name = kids]");
const storageAdults = localStorage.getItem("adults");
const StorageKids = localStorage.getItem ("kids");


searchHotel .addEventListener("click", function (evt) {
    evt.preventDefault();
    popUp.classList.add("modal-book-show");
    popUp.classList.remove("modal-book");
    if(storageAdults || StorageKids) {
      adults.value = storageAdults;
      kids.value = StorageKids;
    }
});

popUp.addEventListener("submit",function(evt) {
  if(!adults.value || !kids.value){
    evt.preventDefault();
    popUp.classList.add("modal-error");
    console.log("Введите кол-во взрослых и детей");
  } else {
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("kids", kids.value);
  }
  
});



