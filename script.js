// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Close mobile menu if open
      const navbarCollapse = document.querySelector(".navbar-collapse")
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show")
      }
    }
  })
})

// Active navigation link on scroll
window.addEventListener("scroll", () => {
  let current = ""
  const sections = document.querySelectorAll("section")

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id")
    }
  })

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Animate skill bars on scroll
const animateSkills = () => {
  const skillsSection = document.querySelector(".skills-section")
  const progressBars = document.querySelectorAll(".progress-bar")

  if (!skillsSection) return

  const sectionTop = skillsSection.getBoundingClientRect().top
  const triggerPoint = window.innerHeight * 0.8

  if (sectionTop < triggerPoint) {
    progressBars.forEach((bar) => {
      const width = bar.getAttribute("data-progress")
      bar.style.width = width + "%"
    })
    window.removeEventListener("scroll", animateSkills)
  }
}

window.addEventListener("scroll", animateSkills)

// Form submission
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Thank you for your message! I will get back to you soon.")
    contactForm.reset()
  })
}

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(10, 10, 10, 0.98)"
    navbar.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.5)"
  } else {
    navbar.style.background = "rgba(10, 10, 10, 0.95)"
    navbar.style.boxShadow = "none"
  }
})

// Initialize animations on page load
document.addEventListener("DOMContentLoaded", () => {
  // Reset skill bars to 0 width
  document.querySelectorAll(".progress-bar").forEach((bar) => {
    bar.style.width = "0%"
  })
})
