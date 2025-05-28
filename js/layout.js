async function loadHeader() {
    try {
        const header = await fetch('layouts/header.html')
        const data = await header.text()
        document.getElementById('header').innerHTML = data
    } catch (error) {
        console.error('Error Loading Header:', error);
    }
}

loadHeader();


async function loadFooter() {
    try {
        const footer = await fetch('layouts/footer.html')
        const data = await footer.text()
        document.getElementById('footer').innerHTML = data
    } catch (error) {
        console.error("Error Loading Footer:", error)
    }
}

loadFooter();

async function loadHero() {
    try {
        const hero = await fetch('layouts/hero_sec.html')
        const data = await hero.text()
        document.getElementById('hero_section').innerHTML = data

    } catch (error) {
        console.error("Error Loading Hero:", error)
    }
}

loadHero();

async function loadProductSection() {
    try {
        const productSection = await fetch('layouts/product.html')
        const data = await productSection.text()
        document.getElementById('products_section').innerHTML = data
    } catch (error) {
        console.error("Error Loading Product Section:", error)
    }
}
loadProductSection();


 