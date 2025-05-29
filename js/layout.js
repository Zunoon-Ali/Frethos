// Load Header and handle Hamburger logic
async function loadHeader() {
    try {
        const header = await fetch('layouts/header.html');
        const data = await header.text();
        document.getElementById('header').innerHTML = data;

        // ✅ Wait for DOM update, then add event listener
        const hamburgerBtn = document.getElementById("hamburgerBtn");
        const mobileMenu = document.getElementById("mobileMenu");

        if (hamburgerBtn && mobileMenu) {
            hamburgerBtn.addEventListener("click", () => {
                mobileMenu.classList.toggle("hidden");
            });
        }
    } catch (error) {
        console.error('Error Loading Header:', error);
    }
}

loadHeader(); // ✅ call it


// ✅ Load Footer (was missing inside a function)
async function loadFooter() {
    try {
        const footer = await fetch('layouts/footer.html');
        const data = await footer.text();
        document.getElementById('footer').innerHTML = data;
    } catch (error) {
        console.error("Error Loading Footer:", error);
    }
}

loadFooter();


// ✅ Load Hero Section
async function loadHero() {
    try {
        const hero = await fetch('layouts/hero_sec.html');
        const data = await hero.text();
        document.getElementById('hero_section').innerHTML = data;
    } catch (error) {
        console.error("Error Loading Hero:", error);
    }
}

loadHero();


// ✅ Load Product Section
async function loadProductSection() {
    try {
        const productSection = await fetch('layouts/product.html');
        const data = await productSection.text();
        document.getElementById('products_section').innerHTML = data;
    } catch (error) {
        console.error("Error Loading Product Section:", error);
    }
}

loadProductSection();



const navItems = document.querySelectorAll("li");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        // Remove underline from all
        navItems.forEach((li) => {
            li.querySelector(".line").classList.remove("w-full", "left-0");
            li.querySelector(".line").classList.add("w-0", "left-1/2");
        });

        // Add underline to clicked one
        const line = item.querySelector(".line");
        line.classList.remove("w-0", "left-1/2");
        line.classList.add("w-full", "left-0");
    });
});


async function loadContactHero() {
    try {
        const contactHero = await fetch('layouts/contact_hero.html');
        const data = await contactHero.text();
        document.getElementById('contact_hero').innerHTML = data;
    } catch (error) {
        console.error("Error Loading Contact Hero:", error);
    }
}
loadContactHero();