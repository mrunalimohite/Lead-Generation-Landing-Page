const menu = document.getElementById("menu-toggle");
const icon = menu.querySelector("i"); // target icon properly
const navbar = document.getElementById("navList");

menu.onclick = () => {
    navbar.classList.toggle("active");

    // Toggle icon on <i>, not div
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
};

// Close menu on link click
document.querySelectorAll(".navLinks").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});


//smooth scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navLinks");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        // Adjust the offset (150px) to trigger the highlight slightly earlier
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        
        // Check if the link's href matches the current section ID
        if (link.getAttribute("href").includes(current) && current !== "") {
            link.classList.add("active");
        }
    });
});

//scroll to top button
const scrollBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  // Show button after scrolling down 400px
  if (window.pageYOffset > 400) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  // Smooth scroll to the hero section (id="home")
  document.getElementById("home").scrollIntoView({
    behavior: "smooth"
  });
});


// Amination
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150; // Triggers when element is 150px into view

      if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
      }
  }
}
// Listen for scroll events
window.addEventListener("scroll", reveal);
// Run once on load to catch elements already in view
reveal();

// contact from 
const form = document.getElementById("inquire-form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        businessType: document.getElementById("BusinessType").value,
        monthlyBudget: document.getElementById("monthlyBudget").value,
        message: document.getElementById("message").value
    };

    fetch("YOUR_GOOGLE_SCRIPT_URL", {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(res => alert("✅ We will contact You soon!"))
    .catch(err => alert("Error"));
});