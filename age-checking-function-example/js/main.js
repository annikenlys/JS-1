const ageInput = document.querySelector("#age");
const enterBTN = document.querySelector(".enter-BTN");

enterBTN.addEventListener("click", function () {
    const age = ageInput.value;
    const isAgeOk = isOldEnough(age);
    if (isAgeOk) {
        document.location.href = "Welcome.html";
    } else {
        alert("You must remain a sheep for now..")
    }
});

function isOldEnough(ageToCheck) {
    return ageToCheck >= 13;
}
