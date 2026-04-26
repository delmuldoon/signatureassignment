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
        let phoneDigits = phone.value.replace(/\D/g, "");
        let errors = [];
        if (email.value === "" && phoneDigits.length === 0) {
            errors.push("Please enter either an email address or phone number. We'd like to chat with you!");
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value && !emailPattern.test(email.value)) {
            errors.push("Invalid e-mail address. Typo?");
        }
        if (phoneDigits.length > 0 && phoneDigits.length !== 10) {
            errors.push("Wrong number! This should be 10 digits.");
        }
        if (phoneDigits.length === 10) {
            phone.value = `(${phoneDigits.slice(0, 3)}) ${phoneDigits.slice(3, 6)}-${phoneDigits.slice(6)}`;
        }
        if (errors.length > 0) {
            e.preventDefault();
            alert(errors.join("\n"));
        }
    });
});
