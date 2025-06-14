// Cart functionality
let cartCount = 0;
const cartCountElem = document.getElementById('cartCount');
document.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        cartCount++;
        cartCountElem.textContent = cartCount;
        btn.textContent = "Added!";
        setTimeout(() => btn.textContent = "Add to Cart", 1000);
    });
});

// Search functionality
document.getElementById('searchBtn').addEventListener('click', () => {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const boxes = document.querySelectorAll('.shop-section .box');
    boxes.forEach(box => {
        const title = box.querySelector('h2').textContent.toLowerCase();
        if (title.includes(input) || input === '') {
            box.style.display = '';
        } else {
            box.style.display = 'none';
        }
    });
});

// Language toggle (EN/HI)
document.getElementById('languageToggle').addEventListener('click', function() {
    if (this.textContent.trim() === 'EN') {
        this.textContent = 'HI';
        document.getElementById('greeting').textContent = 'नमस्ते, साइन इन करें';
    } else {
        this.textContent = 'EN';
        document.getElementById('greeting').textContent = 'Hello, sign in';
    }
});

// Responsive menu toggle
document.getElementById('menuToggle').addEventListener('click', function() {
    const panelOps = document.getElementById('panelOps');
    panelOps.classList.toggle('closed');
});

// Back to top
document.querySelector('.foot-panel1').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.querySelector('.footer-backtotop').onclick = () => window.scrollTo({top:0,behavior:'smooth'})

// Footer modal info
const footerInfo = {
    careers: `<h3>Careers at Amazon</h3><p>Explore exciting career opportunities at Amazon. <a href="https://www.amazon.jobs/" target="_blank">Learn more</a></p>`,
    blog: `<h3>Amazon Blog</h3><p>Read the latest news and stories from Amazon. <a href="https://www.aboutamazon.com/news" target="_blank">Visit Blog</a></p>`,
    about: `<h3>About Amazon</h3><p>Discover Amazon's mission, values, and leadership. <a href="https://www.aboutamazon.com/" target="_blank">About Us</a></p>`,
    investor: `<h3>Investor Relations</h3><p>Find financial news, reports, and investor resources. <a href="https://ir.aboutamazon.com/" target="_blank">Investor Relations</a></p>`,
    devices: `<h3>Amazon Devices</h3><p>Shop and learn about Amazon devices. <a href="https://www.amazon.com/devices" target="_blank">See Devices</a></p>`,
    science: `<h3>Amazon Science</h3><p>Learn about Amazon's research and innovation. <a href="https://www.amazon.science/" target="_blank">Amazon Science</a></p>`
};

document.querySelectorAll('.footer-link').forEach(btn => {
    btn.addEventListener('click', function() {
        const infoKey = this.getAttribute('data-info');
        document.getElementById('footerModalBody').innerHTML = footerInfo[infoKey] || "No info available.";
        document.getElementById('footerModal').style.display = 'flex';
    });
});
document.querySelector('.footer-modal-close').onclick = function() {
    document.getElementById('footerModal').style.display = 'none';
};
window.onclick = function(event) {
    if (event.target === document.getElementById('footerModal')) {
        document.getElementById('footerModal').style.display = 'none';
    }
};