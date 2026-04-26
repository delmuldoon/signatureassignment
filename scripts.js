document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".forme");
    form.addEventListener("submit", function (e) {
        const fName = document.getElementById("fName");
        const lName = document.getElementById("lName");
        const email = document.getElementById("uEmail");
        const phone = document.getElementById("uPhone");
        function capitalize(value) {
            if (!value) return value;
            return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        }
        fName.value = capitalize(fName.value.trim());
        lName.value = capitalize(lName.value.trim());
        email.value = email.value.trim().toLowerCase();
        let errors = [];
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value && !emailPattern.test(email.value)) {
            errors.push("Please enter an email address.");
        }
        let phoneDigits = phone.value.replace(/\D/g, "");
         if (phone.value) {
            if (phoneDigits.length !== 10) {
                errors.push("Please enter a valid 10-digit phone number.");
            } else {
                phone.value = `(${phoneDigits.slice(0,3)}) ${phoneDigits.slice(3,6)}-${phoneDigits.slice(6)}`;
            }
        }
        if (email.value === "" && phone.value.trim() === "") {
            errors.push("Please provide either an e-mail or phone number. We'd like to chat!");
        }
        if (errors.length > 0) {
            e.preventDefault();
            alert(errors.join("\n"));
        }
    });
});
