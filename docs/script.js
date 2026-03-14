// AI-assisted: Used ChatGPT to help explain structure for hamburger menu, form validation, filtering, accordion logic, and Fetch API usage

document.addEventListener("DOMContentLoaded", () => {
  setupHamburgerMenu();
  setupBackToTop();
  setupContactForm();
  setupMerchRendering();
  setupAccordion();
  fetchQuote();
});

function setupHamburgerMenu() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (!hamburger || !navLinks) {
    return;
  }

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!expanded));
  });

  const links = navLinks.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove("show");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove("show");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });
}

function setupBackToTop() {
  const backToTopButton = document.getElementById("backToTop");

  if (!backToTopButton) {
    return;
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

function setupContactForm() {
  const form = document.getElementById("contactForm");

  if (!form) {
    return;
  }

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const topicInput = document.getElementById("topic");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const topicError = document.getElementById("topicError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("successMessage");

  function validateName() {
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Please enter your name.";
      return false;
    }

    nameError.textContent = "";
    return true;
  }

  function validateEmail() {
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {
      emailError.textContent = "Please enter your email.";
      return false;
    }

    if (!emailPattern.test(emailValue)) {
      emailError.textContent = "Please enter a valid email address.";
      return false;
    }

    emailError.textContent = "";
    return true;
  }

  function validateTopic() {
    if (topicInput.value === "") {
      topicError.textContent = "Please select a topic.";
      return false;
    }

    topicError.textContent = "";
    return true;
  }

  function validateMessage() {
    if (messageInput.value.trim() === "") {
      messageError.textContent = "Please enter a message.";
      return false;
    }

    if (messageInput.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters long.";
      return false;
    }

    messageError.textContent = "";
    return true;
  }

  nameInput.addEventListener("input", validateName);
  emailInput.addEventListener("input", validateEmail);
  topicInput.addEventListener("change", validateTopic);
  messageInput.addEventListener("input", validateMessage);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isTopicValid = validateTopic();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isTopicValid && isMessageValid) {
      successMessage.textContent = "Thanks! We'll get back to you soon.";
      form.reset();
      nameError.textContent = "";
      emailError.textContent = "";
      topicError.textContent = "";
      messageError.textContent = "";
    } else {
      successMessage.textContent = "";
    }
  });
}

function setupMerchRendering() {
  const merchContainer = document.getElementById("merchContainer");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("searchInput");

  if (!merchContainer) {
    return;
  }

  const merchItems = [
    {
      name: "SMG T-Shirt",
      category: "tops",
      price: "$35",
      description: "Classic black tee with SMG branding.",
      image: "images/tshirt.png"
    },
    {
      name: "SMG Hoodie",
      category: "tops",
      price: "$70",
      description: "Heavyweight hoodie for everyday wear.",
      image: "images/hoodie.webp"
    },
    {
      name: "Reflective Skull Cap",
      category: "headwear",
      price: "$25",
      description: "Reflective finish with satin-lined interior.",
      image: "images/hoodie.webp"
    },
    {
      name: "Logo Beanie",
      category: "headwear",
      price: "$28",
      description: "Warm knit beanie with clean front logo.",
      image: "images/tshirt.png"
    },
    {
      name: "SMG Tote Bag",
      category: "accessories",
      price: "$22",
      description: "Everyday carry tote with printed SMG design.",
      image: "images/tshirt.png"
    },
    {
      name: "Sticker Pack",
      category: "accessories",
      price: "$10",
      description: "Set of branded vinyl stickers.",
      image: "images/hoodie.webp"
    }
  ];

  let activeFilter = "all";
  let searchTerm = "";

  function renderMerch() {
    merchContainer.innerHTML = "";

    const filteredItems = merchItems.filter((item) => {
      const matchesFilter = activeFilter === "all" || item.category === activeFilter;

      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });

    if (filteredItems.length === 0) {
      merchContainer.innerHTML = "<p>No merch items match your search.</p>";
      return;
    }

    filteredItems.forEach((item) => {
      const card = document.createElement("article");
      card.classList.add("merch-card");

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p><strong>Category:</strong> ${item.category}</p>
        <p><strong>Price:</strong> ${item.price}</p>
        <p>${item.description}</p>
      `;

      merchContainer.appendChild(card);
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      renderMerch();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      searchTerm = event.target.value.toLowerCase().trim();
      renderMerch();
    });
  }

  renderMerch();
}

function setupAccordion() {
  const accordionButtons = document.querySelectorAll(".accordion-btn");

  if (accordionButtons.length === 0) {
    return;
  }

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const panel = button.nextElementSibling;
      const isOpen = button.classList.contains("active");

      accordionButtons.forEach((btn) => {
        btn.classList.remove("active");
        if (btn.nextElementSibling) {
          btn.nextElementSibling.style.display = "none";
        }
      });

      if (!isOpen) {
        button.classList.add("active");
        panel.style.display = "block";
      }
    });
  });
}

async function fetchQuote() {
  const quoteStatus = document.getElementById("quote-status");
  const quoteText = document.getElementById("quote-text");
  const quoteAuthor = document.getElementById("quote-author");

  if (!quoteStatus || !quoteText || !quoteAuthor) {
    return;
  }

  quoteStatus.textContent = "Loading quote...";

  try {
    const response = await fetch("https://api.quotable.io/random");

    if (!response.ok) {
      throw new Error("Quote request failed.");
    }

    const data = await response.json();

    quoteStatus.textContent = "";
    quoteText.textContent = `"${data.content}"`;
    quoteAuthor.textContent = `— ${data.author}`;
  } catch (error) {
    quoteStatus.textContent = "Sorry, the quote could not be loaded right now.";
    quoteText.textContent = "";
    quoteAuthor.textContent = "";
  }
}