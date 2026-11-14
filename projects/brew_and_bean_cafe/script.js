/* ================================
   BREW & BEAN CAFÉ
   Main JavaScript
   ================================ */

const menuData = {
  coffee: [
    { name: "House Espresso", description: "Rich, balanced and pulled fresh to order.", price: "₹140" },
    { name: "Cappuccino", description: "Velvety espresso, steamed milk and soft foam.", price: "₹180" },
    { name: "Caramel Latte", description: "Smooth espresso with milk and house caramel.", price: "₹210" },
    { name: "Cold Brew", description: "Slow-steeped for a clean, naturally sweet finish.", price: "₹190" }
  ],
  tea: [
    { name: "Masala Chai", description: "Black tea simmered with aromatic Indian spices.", price: "₹110" },
    { name: "Classic Green Tea", description: "Light, refreshing and gently brewed.", price: "₹120" },
    { name: "Peach Iced Tea", description: "Chilled tea with peach and a bright citrus finish.", price: "₹150" },
    { name: "Ginger Lemon Tea", description: "Fresh ginger, lemon and a touch of honey.", price: "₹130" }
  ],
  snacks: [
    { name: "Avocado Toast", description: "Sourdough, smashed avocado, herbs and chili flakes.", price: "₹240" },
    { name: "Paneer Croissant", description: "Buttery croissant filled with spiced paneer.", price: "₹220" },
    { name: "Classic Grilled Sandwich", description: "Toasted bread, cheese, vegetables and house sauce.", price: "₹190" },
    { name: "Café Fries", description: "Crisp golden fries with our signature dip.", price: "₹160" }
  ],
  desserts: [
    { name: "Chocolate Brownie", description: "Warm, fudgy and finished with chocolate drizzle.", price: "₹170" },
    { name: "New York Cheesecake", description: "Creamy baked cheesecake with berry compote.", price: "₹230" },
    { name: "Tiramisu", description: "Espresso-soaked layers with mascarpone cream.", price: "₹240" },
    { name: "Cinnamon Roll", description: "Soft baked roll with cinnamon and vanilla glaze.", price: "₹160" }
  ]
};

const menuGrid = document.querySelector("#menu-grid");
const menuTabs = document.querySelectorAll(".menu-tab");

function renderMenu(category) {
  menuGrid.innerHTML = menuData[category].map((item, index) => `
    <article class="menu-item" style="animation-delay:${index * 70}ms">
      <div class="menu-item-head">
        <h3>${item.name}</h3>
        <span class="menu-price">${item.price}</span>
      </div>
      <p>${item.description}</p>
    </article>
  `).join("");
}

menuTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    menuTabs.forEach(item => item.classList.remove("active"));
    tab.classList.add("active");
    renderMenu(tab.dataset.category);
  });
});

renderMenu("coffee");

/* Mobile navigation */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  });
});

/* Reveal-on-scroll animation */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach(element => revealObserver.observe(element));

/* Contact form validation */

const form = document.querySelector("#contact-form");
const status = document.querySelector(".form-status");

function showError(fieldName, message) {
  const field = document.querySelector(`#${fieldName}`);
  const wrapper = field.closest(".field");
  const error = document.querySelector(`[data-error="${fieldName}"]`);

  wrapper.classList.toggle("invalid", Boolean(message));
  error.textContent = message;
}

function validateForm() {
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  let valid = true;

  if (name.length < 2) {
    showError("name", "Please enter your name.");
    valid = false;
  } else {
    showError("name", "");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError("email", "Please enter a valid email.");
    valid = false;
  } else {
    showError("email", "");
  }

  if (message.length < 10) {
    showError("message", "Please write at least 10 characters.");
    valid = false;
  } else {
    showError("message", "");
  }

  return valid;
}

form.addEventListener("submit", event => {
  event.preventDefault();
  status.textContent = "";

  if (!validateForm()) {
    status.textContent = "Please fix the highlighted fields.";
    return;
  }

  // Front-end demo: no server is connected yet.
  // Replace this section with a fetch() request to your backend/API later.
  status.textContent = "Thanks! Your message is ready to be sent.";
  form.reset();
});

/* Clear individual validation errors while typing */

["name", "email", "message"].forEach(id => {
  document.querySelector(`#${id}`).addEventListener("input", () => {
    showError(id, "");
    status.textContent = "";
  });
});
