const form = document.getElementById("contactForm");
const inputs = form.querySelectorAll("input, textarea");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    inputs.forEach((input) => {
        if (!input.value.trim()) {
            input.classList.add("border-red-500");
            isValid = false;
        } else {
            input.classList.remove("border-red-500");
            input.classList.add("border-gray-300");
        }
    });

    if (isValid) {
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        alert(`Thank you, ${name}!\n\nEmail: ${email}\nMessage: ${message}`);
        form.reset();
    }
});

inputs.forEach((input) => {
    input.addEventListener("input", () => {
        if (input.value.trim()) {
            input.classList.remove("border-red-500");
            input.classList.add("border-gray-300");
        }
    });
});