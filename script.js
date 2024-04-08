const submitBtn = document.querySelector(".submitBtn");
const passwordInput = document.querySelector("#password")
const confirmPasswordInput = document.querySelector("#confirmPassword")


console.log(submitBtn, passwordInput, confirmPasswordInput)

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if ( passwordInput.value === confirmPasswordInput.value) {
        alert("Registration complete!")
    } else {
        confirmPasswordInput.setCustomValidity("Passwords must be the same!")
        confirmPasswordInput.reportValidity();
    }
})
/* VALIDAR PASS */