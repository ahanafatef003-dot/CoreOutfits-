/* ========================================
   AURIX - Premium Fashion E-Commerce
   Vanilla JavaScript - Modular & Clean
   ======================================== */

// ==========================================
// DATA
// ==========================================

const products = [
  {
    id: 1,
    name: "White tee",
    price: 189,
    category: "tees",
    badge: "New",
    image: "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171510/Picsart_26-06-11_15-37-19-130_ddzkxb.webp?w=600&h=800&fit=crop",
    images: [
      "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171510/Picsart_26-06-11_15-37-19-130_ddzkxb.webp?w=800&h=1000&fit=crop",
      "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171508/Picsart_26-06-11_15-33-11-152_rjoxar.webp?w=800&h=1000&fit=crop",
      "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171508/Picsart_26-06-11_15-32-56-546_ng4pgy.webp?w=800&h=1000&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "White"],
    stock: 12,
    description: "Premium heavyweight cotton hoodie with chrome-finish hardware. Features an oversized silhouette, dropped shoulders, and our signature AURIX embroidered logo. The fabric undergoes a special wash process for a soft, vintage feel.",
    rating: 4.8,
    reviews: 124,
    isNew: true
  },
  {
    id: 2,
    name: "Black Tee",
    price: 89,
    category: "tees",
    badge: null,
    image: "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171509/Picsart_26-06-11_15-36-45-166_hdzfbq.webp?w=600&h=800&fit=crop",
    images: [
      "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171509/Picsart_26-06-11_15-36-45-166_hdzfbq.webp?w=800&h=1000&fit=crop",
      "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171507/Picsart_26-06-11_15-31-25-909_cwzloz.webp?w=800&h=1000&fit=crop",
      "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171507/Picsart_26-06-11_15-32-09-255_bmzul9.webp?w=800&h=1000&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Bone"],
    stock: 45,
    description: "Oversized t-shirt crafted from 280gsm organic cotton. Features a gothic-inspired typographic print with chrome foil accents. The relaxed drop-shoulder cut creates a contemporary silhouette.",
    rating: 4.6,
    reviews: 89,
    isNew: false
  },
  {
    id: 3,
    name: "Metallic Cargo Pants",
    price: 159,
    category: "pants",
    badge: "Hot",
    image: "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171510/Picsart_26-06-11_15-37-02-220_fd2c8u.webp?w=600&h=800&fit=crop",
    images: [
      "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171510/Picsart_26-06-11_15-37-02-220_fd2c8u.webp?w=800&h=1000&fit=crop",
      "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171507/Picsart_26-06-11_15-32-26-724_ndohsy.webp?w=800&h=1000&fit=crop",
      "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171508/Picsart_26-06-11_15-32-42-045_tz3yed.webp?w=800&h=1000&fit=crop"
    ],
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Black", "Silver", "Gunmetal"],
    stock: 8,
    description: "Technical cargo pants with metallic sheen finish. Six-pocket configuration with chrome snap closures. Tapered leg with adjustable hem. Water-resistant coating for urban exploration.",
    rating: 4.9,
    reviews: 203,
    isNew: true
  },
  {
    id: 4,
    name: "Frost Bomber Jacket",
    price: 299,
    category: "jackets",
    badge: "Limited",
    image: "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171510/Picsart_26-06-11_15-37-42-748_akpfso.webp?w=600&h=800&fit=crop",
    images: [
      "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171510/Picsart_26-06-11_15-37-42-748_akpfso.webp?w=800&h=1000&fit=crop",
      "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171508/Picsart_26-06-11_15-33-25-666_bliwlb.webp?w=800&h=1000&fit=crop",
      "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171509/Picsart_26-06-11_15-33-40-469_ok67hv.webp?w=800&h=1000&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Ice White"],
    stock: 5,
    description: "Premium satin bomber with frost-effect finish. Features quilted lining, chrome zipper hardware, and ribbed collar/cuffs. The iridescent surface shifts between silver and white under different lighting.",
    rating: 4.7,
    reviews: 67,
    isNew: true
  },
  {
    id: 5,
    name: "Abyss Leather Gloves",
    price: 129,
    category: "accessories",
    badge: null,
    image: "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171510/Picsart_26-06-11_15-38-04-710_cpn76d.webp?w=600&h=800&fit=crop",
    images: [
      "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171510/Picsart_26-06-11_15-38-04-710_cpn76d.webp?w=800&h=1000&fit=crop",
      "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171509/Picsart_26-06-11_15-33-56-048_lym0am.webp?w=800&h=1000&fit=crop",
      "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171509/Picsart_26-06-11_15-34-22-366_ocqx0w.webp?w=800&h=1000&fit=crop"
    ],
    sizes: ["S", "M", "L"],
    colors: ["Black", "Chrome"],
    stock: 23,
    description: "Italian nappa leather gloves with chrome-plated knuckle details. Touchscreen-compatible fingertips. Silk-lined interior for supreme comfort. Each pair is hand-finished by master craftsmen.",
    rating: 4.5,
    reviews: 41,
    isNew: false
  },
  {
    id: 6,
    name: "Void Messenger Bag",
    price: 249,
    category: "accessories",
    badge: "New",
    image: "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171510/Picsart_26-06-11_15-38-21-194_esvozs.webp?w=600&h=800&fit=crop",
    images: [
      "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171510/Picsart_26-06-11_15-38-21-194_esvozs.webp?w=800&h=1000&fit=crop",
      "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171507/Picsart_26-06-11_15-34-39-821_gg9yr1.webp?w=800&h=1000&fit=crop",
      "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171507/Picsart_26-06-11_15-35-04-295_eqqx2n.webp?w=800&h=1000&fit=crop"
    ],
    sizes: ["One Size"],
    colors: ["Black", "Silver"],
    stock: 15,
    description: "Structured messenger bag in chrome-tanned leather. Features a magnetic flap closure, padded laptop compartment, and adjustable shoulder strap with chrome hardware. Minimalist design with maximum functionality.",
    rating: 4.8,
    reviews: 156,
    isNew: true
  },
  {
    id: 7,
    name: "Phantom Sunglasses",
    price: 175,
    category: "accessories",
    badge: null,
    image: "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171511/Picsart_26-06-11_15-38-36-577_t3dmir.webp?w=600&h=800&fit=crop",
    images: [
      "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171511/Picsart_26-06-11_15-38-36-577_t3dmir.webp?w=800&h=1000&fit=crop",
      "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171508/Picsart_26-06-11_15-35-27-762_v5kkut.webp?w=800&h=1000&fit=crop",
      "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171509/Picsart_26-06-11_15-35-58-782_x1ihcs.webp?w=800&h=1000&fit=crop"
    ],
    sizes: ["One Size"],
    colors: ["Black", "Silver", "Chrome"],
    stock: 30,
    description: "Acetate frame sunglasses with mirrored chrome lenses. 100% UV protection. The angular cat-eye silhouette is inspired by gothic architecture. Includes premium leather case and cleaning cloth.",
    rating: 4.9,
    reviews: 312,
    isNew: false
  },
  {
    id: 8,
    name: "Eclipse Chain Necklace",
    price: 95,
    category: "accessories",
    badge: null,
    image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220e?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
    ],
    sizes: ["45cm", "50cm", "55cm"],
    colors: ["Silver", "Black Rhodium"],
    stock: 18,
    description: "Sterling silver chain necklace with eclipse pendant. The pendant features a black onyx center surrounded by a chrome halo. Adjustable length with signature AURIX clasp.",
    rating: 4.7,
    reviews: 76,
    isNew: false
  }
];

const reviews = [
  { name: "Alexandra M.", rating: 5, text: "The quality is absolutely insane. The chrome details on the hoodie catch light beautifully. Worth every penny.", date: "2 weeks ago", avatar: "AM" },
  { name: "Jordan K.", rating: 5, text: "Finally a brand that understands futuristic streetwear. The cargo pants are my new everyday essential.", date: "1 month ago", avatar: "JK" },
  { name: "Riley S.", rating: 4, text: "Shipping was fast, packaging felt like unboxing a luxury watch. The bomber jacket is a statement piece.", date: "3 weeks ago", avatar: "RS" },
  { name: "Morgan L.", rating: 5, text: "The attention to detail is remarkable. Even the buttons have weight to them. Obsessed with the aesthetic.", date: "1 week ago", avatar: "ML" },
  { name: "Casey T.", rating: 5, text: "Best purchase I've made this year. The leather gloves fit like a second skin. Chrome details are flawless.", date: "2 days ago", avatar: "CT" }
];

const heroSlides = [
  { image: "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171510/Picsart_26-06-11_15-37-19-130_ddzkxb.webp?w=1600&h=900&fit=crop", title: "Chrome Noir", subtitle: "The Future of Gothic Luxury" },
  { image: "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171509/Picsart_26-06-11_15-36-45-166_hdzfbq.webp?w=1600&h=900&fit=crop", title: "Void Collection", subtitle: "Embrace the Darkness" },
  { image: "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171510/Picsart_26-06-11_15-37-02-220_fd2c8u.webp?w=1600&h=900&fit=crop", title: "Eclipse Series", subtitle: "Where Light Meets Shadow" },
  { image: "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171510/Picsart_26-06-11_15-37-42-748_akpfso.webp?w=1600&h=900&fit=crop", title: "Abyss Line", subtitle: "Depth Beyond Measure" },
  { image: "https://res.cloudinary.com/dvlnrzuw9/image/upload/v1781171510/Picsart_26-06-11_15-38-04-710_cpn76d.webp?w=1600&h=900&fit=crop", title: "Spectre Edit", subtitle: "Ghosts of the Future" }
];

const categories = [
  { id: "all", name: "All", icon: "M4 6h16M4 12h16M4 18h16" },
  { id: "hoodies", name: "Hoodies", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
  { id: "tees", name: "Oversized Tees", icon: "M6 2L2 8l10 6 10-6-4-6H6z" },
  { id: "pants", name: "Pants", icon: "M4 4h16v16H4z" },
  { id: "jackets", name: "Jackets", icon: "M12 2L2 9l10 5 10-5-10-7z" },
  { id: "accessories", name: "Accessories", icon: "M12 2a10 10 0 100 20 10 10 0 000-20z" }
];

// ==========================================
// STATE
// ==========================================

let cart = JSON.parse(localStorage.getItem('aurix_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('aurix_wishlist')) || [];
let currentCategory = 'all';
let searchQuery = '';
let priceRange = { min: 0, max: 500 };
let selectedSizes = [];
let selectedColors = [];
let currentHeroSlide = 0;
let heroInterval;

// ==========================================
// DOM READY
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  initCursorGlow();
  initMagneticButtons();
  initHeroSlider();
  initFloatingObjects();
  initScrollAnimations();
  initNavbar();
  renderCategories();
  renderProducts();
  renderReviews();
  initCart();
  initWishlist();
  initSearch();
  initFilters();
  initMobileMenu();
});

// ==========================================
// LOADING SCREEN
// ==========================================

function initLoadingScreen() {
  const loader = document.getElementById('loading-screen');
  if (!loader) return;

  setTimeout(() => {
    loader.classList.add('hidden');
    setTimeout(() => {
      loader.style.display = 'none';
      triggerInitialAnimations();
    }, 800);
  }, 1500);
}

function triggerInitialAnimations() {
  document.querySelectorAll('.hero-animate').forEach((el, i) => {
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, i * 200);
  });
}

// ==========================================
// CURSOR GLOW
// ==========================================

function initCursorGlow() {
  if (window.matchMedia('(max-width: 768px)').matches) return;

  const cursor = document.createElement('div');
  cursor.className = 'cursor-glow';
  document.body.appendChild(cursor);

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hover effects
  const hoverElements = document.querySelectorAll('a, button, .product-card, .category-pill, .gallery-thumb');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
}

// ==========================================
// MAGNETIC BUTTONS
// ==========================================

function initMagneticButtons() {
  if (window.matchMedia('(max-width: 768px)').matches) return;

  document.querySelectorAll('.btn-magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });
}

// ==========================================
// HERO SLIDER
// ==========================================

function initHeroSlider() {
  const container = document.getElementById('hero-slides');
  if (!container) return;

  // Render slides
  container.innerHTML = heroSlides.map((slide, i) => `
    <div class="hero-slide ${i === 0 ? 'active' : ''}" data-index="${i}">
      <img src="${slide.image}" alt="${slide.title}" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent"></div>
    </div>
  `).join('');

  // Update text
  updateHeroText(0);

  // Start auto-slide
  heroInterval = setInterval(nextHeroSlide, 5000);

  // Progress indicator
  updateProgressIndicator();
}

function nextHeroSlide() {
  const slides = document.querySelectorAll('.hero-slide');
  const current = document.querySelector('.hero-slide.active');
  const currentIndex = parseInt(current?.dataset.index || 0);
  const nextIndex = (currentIndex + 1) % heroSlides.length;

  slides.forEach(slide => {
    slide.classList.remove('active', 'prev');
    if (parseInt(slide.dataset.index) === currentIndex) {
      slide.classList.add('prev');
    }
  });

  slides[nextIndex].classList.add('active');
  updateHeroText(nextIndex);
  updateProgressIndicator();
}

function updateHeroText(index) {
  const title = document.getElementById('hero-title');
  const subtitle = document.getElementById('hero-subtitle');
  if (title) {
    title.style.opacity = '0';
    title.style.transform = 'translateY(20px)';
    setTimeout(() => {
      title.textContent = heroSlides[index].title;
      title.style.opacity = '1';
      title.style.transform = 'translateY(0)';
    }, 400);
  }
  if (subtitle) {
    subtitle.style.opacity = '0';
    setTimeout(() => {
      subtitle.textContent = heroSlides[index].subtitle;
      subtitle.style.opacity = '1';
    }, 600);
  }
}

function updateProgressIndicator() {
  const indicator = document.getElementById('hero-progress');
  if (!indicator) return;
  indicator.innerHTML = heroSlides.map((_, i) => `
    <div class="h-[2px] flex-1 mx-1 transition-all duration-500 ${i === currentHeroSlide ? 'bg-black' : 'bg-black/20'}"></div>
  `).join('');
  currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
  if (currentHeroSlide === 0) currentHeroSlide = heroSlides.length; // Reset handling
}

// ==========================================
// FLOATING OBJECTS
// ==========================================

function initFloatingObjects() {
  const containers = document.querySelectorAll('.floating-objects-container');
  containers.forEach(container => {
    if (!container) return;
    // Objects are already in HTML, just ensure animation classes
    container.querySelectorAll('.chrome-orb, .chrome-ring').forEach((obj, i) => {
      obj.style.animationDelay = `${i * 2}s`;
    });
  });
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ==========================================
// NAVBAR
// ==========================================

function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ==========================================
// CATEGORIES
// ==========================================

function renderCategories() {
  const container = document.getElementById('category-filters');
  if (!container) return;

  container.innerHTML = categories.map(cat => `
    <button class="category-pill ${cat.id === 'all' ? 'active' : ''}" data-category="${cat.id}" onclick="filterByCategory('${cat.id}')">
      <span class="relative z-10 flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="${cat.icon}"/>
        </svg>
        ${cat.name}
      </span>
    </button>
  `).join('');
}

function filterByCategory(category) {
  currentCategory = category;

  // Update active state
  document.querySelectorAll('.category-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });

  renderProducts();
}

// ==========================================
// PRODUCTS
// ==========================================

function getFilteredProducts() {
  return products.filter(p => {
    const matchCategory = currentCategory === 'all' || p.category === currentCategory;
    const matchSearch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchPrice = p.price >= priceRange.min && p.price <= priceRange.max;
    const matchSize = selectedSizes.length === 0 || selectedSizes.some(s => p.sizes.includes(s));
    const matchColor = selectedColors.length === 0 || selectedColors.some(c => p.colors.includes(c));
    return matchCategory && matchSearch && matchPrice && matchSize && matchColor;
  });
}

function renderProducts() {
  const container = document.getElementById('product-grid');
  if (!container) return;

  const filtered = getFilteredProducts();

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-20">
        <p class="font-display text-2xl text-gray-400">No products found</p>
        <button onclick="resetFilters()" class="mt-4 btn-primary btn-magnetic text-sm">Reset Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((product, i) => `
    <div class="product-card glass-card rounded-2xl overflow-hidden reveal reveal-delay-${(i % 5) + 1}" data-product-id="${product.id}">
      <div class="relative aspect-product overflow-hidden bg-gray-100">
        <img src="${product.image}" alt="${product.name}" class="product-image w-full h-full object-cover" loading="lazy">
        ${product.badge ? `<span class="badge-new absolute top-4 left-4 z-10">${product.badge}</span>` : ''}
        <button onclick="toggleWishlist(${product.id})" class="wishlist-heart absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center ${wishlist.includes(product.id) ? 'active' : ''}">
          <svg class="w-5 h-5" fill="${wishlist.includes(product.id) ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
          </svg>
        </button>
        <div class="product-actions">
          <button onclick="quickAddToCart(${product.id})" class="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-black hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"/>
            </svg>
          </button>
          <button onclick="openProductDetail(${product.id})" class="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-black hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="p-5">
        <h3 class="font-display text-xl font-medium mb-1">${product.name}</h3>
        <div class="flex items-center justify-between">
          <p class="text-lg font-semibold">$${product.price}</p>
          <div class="flex items-center gap-1">
            <svg class="w-4 h-4 fill-black" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span class="text-sm text-gray-500">${product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Re-init scroll animations for new elements
  setTimeout(initScrollAnimations, 100);
}

function resetFilters() {
  currentCategory = 'all';
  searchQuery = '';
  priceRange = { min: 0, max: 500 };
  selectedSizes = [];
  selectedColors = [];

  document.querySelectorAll('.category-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === 'all');
  });

  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';

  renderProducts();
}

// ==========================================
// PRODUCT DETAIL
// ==========================================

function openProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('product-modal');
  const content = document.getElementById('product-modal-content');

  content.innerHTML = `
    <div class="glass-strong rounded-3xl overflow-hidden">
      <button onclick="closeProductDetail()" class="absolute top-4 right-4 z-50 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-black hover:text-white transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <div class="grid lg:grid-cols-2 gap-0">
        <!-- Image Gallery -->
        <div class="bg-gray-100 p-6 lg:p-10">
          <div class="aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-white">
            <img id="main-gallery-image" src="${product.images[0]}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-700">
          </div>
          <div class="flex gap-3">
            ${product.images.map((img, i) => `
              <button onclick="changeGalleryImage('${img}', this)" class="gallery-thumb w-20 h-20 rounded-xl overflow-hidden bg-white border-2 ${i === 0 ? 'active border-black' : 'border-transparent'}">
                <img src="${img}" class="w-full h-full object-cover">
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Product Info -->
        <div class="p-6 lg:p-10 flex flex-col">
          ${product.badge ? `<span class="badge-new inline-block self-start mb-4">${product.badge}</span>` : ''}
          <h2 class="font-display text-4xl lg:text-5xl font-medium mb-2">${product.name}</h2>
          <div class="flex items-center gap-3 mb-6">
            <span class="text-2xl font-semibold">$${product.price}</span>
            <div class="flex items-center gap-1">
              ${renderStars(product.rating)}
              <span class="text-sm text-gray-500 ml-1">(${product.reviews} reviews)</span>
            </div>
          </div>

          <p class="text-gray-600 leading-relaxed mb-6">${product.description}</p>

          <div class="mb-6">
            <label class="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3 block">Color</label>
            <div class="flex gap-2">
              ${product.colors.map((color, i) => `
                <button onclick="selectColor(this, '${color}')" class="selector-option ${i === 0 ? 'active' : ''}" data-color="${color}">${color}</button>
              `).join('')}
            </div>
          </div>

          <div class="mb-6">
            <label class="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3 block">Size</label>
            <div class="flex gap-2 flex-wrap">
              ${product.sizes.map((size, i) => `
                <button onclick="selectSize(this, '${size}')" class="selector-option ${i === 0 ? 'active' : ''}" data-size="${size}">${size}</button>
              `).join('')}
            </div>
          </div>

          <div class="mb-8">
            <label class="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3 block">Quantity</label>
            <div class="qty-stepper inline-flex">
              <button onclick="updateQty(-1)">-</button>
              <input type="number" id="detail-qty" value="1" min="1" max="${product.stock}" readonly>
              <button onclick="updateQty(1)">+</button>
            </div>
            <span class="text-sm text-gray-500 ml-4">${product.stock} in stock</span>
          </div>

          <div class="flex gap-3 mt-auto">
            <button onclick="addToCartFromDetail(${product.id})" class="flex-1 btn-primary btn-magnetic py-4 text-sm">
              Add to Cart
            </button>
            <button onclick="buyNow(${product.id})" class="flex-1 btn-chrome btn-magnetic py-4 text-sm font-semibold">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Re-init magnetic buttons
  initMagneticButtons();
}

function closeProductDetail() {
  const modal = document.getElementById('product-modal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function changeGalleryImage(src, thumb) {
  const main = document.getElementById('main-gallery-image');
  main.style.opacity = '0';
  setTimeout(() => {
    main.src = src;
    main.style.opacity = '1';
  }, 200);

  document.querySelectorAll('.gallery-thumb').forEach(t => {
    t.classList.remove('active', 'border-black');
    t.classList.add('border-transparent');
  });
  thumb.classList.add('active', 'border-black');
  thumb.classList.remove('border-transparent');
}

function selectColor(btn, color) {
  btn.parentElement.querySelectorAll('.selector-option').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function selectSize(btn, size) {
  btn.parentElement.querySelectorAll('.selector-option').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function updateQty(change) {
  const input = document.getElementById('detail-qty');
  let val = parseInt(input.value) + change;
  if (val < 1) val = 1;
  if (val > parseInt(input.max)) val = parseInt(input.max);
  input.value = val;
}

function renderStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      html += '<svg class="w-4 h-4 fill-black" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      html += '<svg class="w-4 h-4" viewBox="0 0 24 24"><defs><linearGradient id="half"><stop offset="50%" stop-color="black"/><stop offset="50%" stop-color="transparent"/></linearGradient></defs><path fill="url(#half)" stroke="black" stroke-width="1" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    } else {
      html += '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    }
  }
  return html;
}

// ==========================================
// CART
// ==========================================

function initCart() {
  updateCartUI();
}

function quickAddToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  addToCart(product, 1, product.sizes[0], product.colors[0]);
}

function addToCartFromDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const qty = parseInt(document.getElementById('detail-qty')?.value || 1);
  const size = document.querySelector('[data-size].active')?.dataset.size || product.sizes[0];
  const color = document.querySelector('[data-color].active')?.dataset.color || product.colors[0];

  addToCart(product, qty, size, color);
  closeProductDetail();
}

function addToCart(product, qty, size, color) {
  const existing = cart.find(item => 
    item.id === product.id && item.size === size && item.color === color
  );

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: size,
      color: color,
      qty: qty
    });
  }

  saveCart();
  updateCartUI();
  openCart();

  // Animation feedback
  const cartBtn = document.getElementById('cart-btn');
  if (cartBtn) {
    cartBtn.style.transform = 'scale(1.3)';
    setTimeout(() => cartBtn.style.transform = '', 300);
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
}

function updateCartQty(index, change) {
  cart[index].qty += change;
  if (cart[index].qty < 1) cart[index].qty = 1;
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('aurix_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const count = document.getElementById('cart-count');
  const items = document.getElementById('cart-items');
  const subtotal = document.getElementById('cart-subtotal');

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (count) count.textContent = totalQty;
  if (subtotal) subtotal.textContent = '$' + totalPrice.toFixed(2);

  if (items) {
    if (cart.length === 0) {
      items.innerHTML = `
        <div class="flex flex-col items-center justify-center py-20 text-center">
          <svg class="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"/>
          </svg>
          <p class="text-gray-400 font-display text-xl">Your cart is empty</p>
          <button onclick="closeCart()" class="mt-4 text-sm underline">Continue Shopping</button>
        </div>
      `;
    } else {
      items.innerHTML = cart.map((item, i) => `
        <div class="flex gap-4 p-4 glass-card rounded-xl">
          <img src="${item.image}" alt="${item.name}" class="w-20 h-24 object-cover rounded-lg">
          <div class="flex-1 flex flex-col justify-between">
            <div>
              <h4 class="font-medium text-sm">${item.name}</h4>
              <p class="text-xs text-gray-500 mt-1">${item.color} / ${item.size}</p>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <button onclick="updateCartQty(${i}, -1)" class="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-xs hover:bg-black hover:text-white transition-colors">-</button>
                <span class="text-sm w-4 text-center">${item.qty}</span>
                <button onclick="updateCartQty(${i}, 1)" class="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-xs hover:bg-black hover:text-white transition-colors">+</button>
              </div>
              <span class="font-semibold text-sm">$${(item.price * item.qty).toFixed(2)}</span>
            </div>
          </div>
          <button onclick="removeFromCart(${i})" class="text-gray-400 hover:text-black transition-colors self-start">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      `).join('');
    }
  }
}

function openCart() {
  document.getElementById('cart-drawer')?.classList.add('open');
  document.getElementById('cart-overlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-drawer')?.classList.remove('open');
  document.getElementById('cart-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================
// WISHLIST
// ==========================================

function initWishlist() {
  updateWishlistUI();
}

function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
  } else {
    wishlist.push(productId);
  }
  saveWishlist();
  updateWishlistUI();
  renderProducts(); // Re-render to update heart icons
}

function saveWishlist() {
  localStorage.setItem('aurix_wishlist', JSON.stringify(wishlist));
}

function updateWishlistUI() {
  const count = document.getElementById('wishlist-count');
  if (count) count.textContent = wishlist.length;
}

// ==========================================
// SEARCH
// ==========================================

function initSearch() {
  const searchBtn = document.getElementById('search-btn');
  const searchOverlay = document.getElementById('search-overlay');
  const searchInput = document.getElementById('search-input');
  const closeSearchBtn = document.getElementById('close-search');

  searchBtn?.addEventListener('click', () => {
    searchOverlay.classList.add('open');
    searchInput.focus();
    document.body.style.overflow = 'hidden';
  });

  closeSearchBtn?.addEventListener('click', closeSearch);
  searchOverlay?.addEventListener('click', (e) => {
    if (e.target === searchOverlay || e.target.classList.contains('search-overlay-bg')) {
      closeSearch();
    }
  });

  let debounceTimer;
  searchInput?.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      searchQuery = e.target.value;
      renderProducts();
    }, 300);
  });
}

function closeSearch() {
  document.getElementById('search-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================
// FILTERS
// ==========================================

function initFilters() {
  // Price range
  const priceMin = document.getElementById('price-min');
  const priceMax = document.getElementById('price-max');

  priceMin?.addEventListener('input', (e) => {
    priceRange.min = parseInt(e.target.value);
    renderProducts();
  });

  priceMax?.addEventListener('input', (e) => {
    priceRange.max = parseInt(e.target.value);
    renderProducts();
  });

  // Size filters
  document.querySelectorAll('.filter-size')?.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      const size = btn.dataset.size;
      if (btn.classList.contains('active')) {
        selectedSizes.push(size);
      } else {
        selectedSizes = selectedSizes.filter(s => s !== size);
      }
      renderProducts();
    });
  });

  // Color filters
  document.querySelectorAll('.filter-color')?.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      const color = btn.dataset.color;
      if (btn.classList.contains('active')) {
        selectedColors.push(color);
      } else {
        selectedColors = selectedColors.filter(c => c !== color);
      }
      renderProducts();
    });
  });
}

// ==========================================
// CHECKOUT
// ==========================================

function buyNow(productId) {
  addToCartFromDetail(productId);
  setTimeout(() => {
    closeCart();
    openCheckout();
  }, 400);
}

function openCheckout() {
  const modal = document.getElementById('checkout-modal');
  const orderId = generateOrderId();

  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  document.getElementById('checkout-order-id').textContent = orderId;
  document.getElementById('checkout-total').textContent = '$' + total.toFixed(2);

  const summary = document.getElementById('checkout-summary');
  summary.innerHTML = cart.map(item => `
    <div class="flex justify-between items-center py-3 border-b border-gray-100">
      <div>
        <p class="font-medium text-sm">${item.name}</p>
        <p class="text-xs text-gray-500">${item.color} / ${item.size} x${item.qty}</p>
      </div>
      <span class="font-semibold text-sm">$${(item.price * item.qty).toFixed(2)}</span>
    </div>
  `).join('');

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  document.getElementById('checkout-modal')?.classList.remove('open');
  document.body.style.overflow = '';
}

function generateOrderId() {
  return 'AUR-' + Math.random().toString(36).substr(2, 6).toUpperCase();
}

function submitCheckout(e) {
  e.preventDefault();

  const btn = e.target.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<span class="animate-pulse">Processing...</span>';
  btn.disabled = true;

  setTimeout(() => {
    cart = [];
    saveCart();
    updateCartUI();
    closeCheckout();

    // Show success
    alert('Order placed successfully! Thank you for shopping with AURIX.');

    btn.innerHTML = originalText;
    btn.disabled = false;
    e.target.reset();
  }, 2000);
}

// ==========================================
// REVIEWS
// ==========================================

function renderReviews() {
  const container = document.getElementById('reviews-container');
  if (!container) return;

  container.innerHTML = reviews.map((review, i) => `
    <div class="testimonial-card p-8 rounded-2xl reveal reveal-delay-${(i % 5) + 1}">
      <div class="flex items-center gap-1 mb-4">
        ${renderStars(review.rating)}
      </div>
      <p class="text-gray-700 leading-relaxed mb-6 font-light">"${review.text}"</p>
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold text-sm">
          ${review.avatar}
        </div>
        <div>
          <p class="font-medium text-sm">${review.name}</p>
          <p class="text-xs text-gray-500">${review.date}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// ==========================================
// MOBILE MENU
// ==========================================

function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn?.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// ==========================================
// NEWSLETTER
// ==========================================

function subscribeNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  const btn = e.target.querySelector('button');

  btn.innerHTML = 'Subscribed!';
  btn.classList.add('bg-black', 'text-white');
  input.value = '';

  setTimeout(() => {
    btn.innerHTML = 'Subscribe';
    btn.classList.remove('bg-black', 'text-white');
  }, 3000);
}

// ==========================================
// UTILITY
// ==========================================

function formatPrice(price) {
  return '$' + price.toFixed(2);
}

// Close modals on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProductDetail();
    closeCart();
    closeCheckout();
    closeSearch();
  }
});
