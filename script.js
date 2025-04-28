const texts = ["WELCOME TO MY PORTFOLIO", "JAVA PROGRAMMER", "FRONT-END DESIGNER", "CLOUD ANALYST"];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100; 
const eraseSpeed = 50;   
const delayBetweenTexts = 1500; 
const animatedText = document.querySelector(".animated-text");

const carousel = document.querySelector('.carousel');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: 320, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -320, behavior: 'smooth' });
  });

  // Autoplay: Scroll every 4 seconds
  setInterval(() => {
    carousel.scrollBy({ left: 320, behavior: 'smooth' });
  }, 4000);

function changeResume(type) {
    const resumeMap = {
        web: "/resumes/Web.pdf",
        devops: "/resumes/DevOps.pdf",
        android: "resumes/Android.pdf"
    };

    const resumeFrame = document.getElementById("resumeFrame");
    const downloadLink = document.getElementById("downloadLink");

    resumeFrame.src = resumeMap[type];
    downloadLink.href = resumeMap[type];
}


function typeText() {
    if (charIndex === 0) {
        animatedText.innerHTML = ""; 
    }

    if (charIndex < texts[textIndex].length) {
        animatedText.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, delayBetweenTexts);
    }
}

function eraseText() {
    if (charIndex > 0) {
        animatedText.innerHTML = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, eraseSpeed);
    } else {
        textIndex = (textIndex + 1) % texts.length; 
        setTimeout(typeText, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeText();
});

document.getElementById("slideDownBtn").addEventListener("click", function() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});


window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
        navbar.innerHTML = `
            <div class="profile-section">
                <img src="Nav2.jpg" alt="Profile Picture" class="profile-img">
                <div class="profile-name">Prince Raj</div>
            </div>

            <!-- Social Media Links Moved Up -->

            <div class="social-links">
                <a href="https://www.linkedin.com/in/itsmeprince09/" target="_blank" class="linkedin">
                    <i class="bi bi-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/the_prince.09_/" target="_blank" class="instagram">
                    <i class="bi bi-instagram"></i>
                </a>
                 <a href="https://github.com/theprince09" target="_blank" class="github">
                    <i class="bi bi-github"></i>
                </a>
                <a href="https://leetcode.com/u/the_prince_09/" target="_blank" class="leetcode">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" width="24" height="24">
                </a>
        </div>
            <!-- Navigation Links Now Appear Below Social Links -->

            <div class="nav-links">
            <a href="#"><i class="bi bi-house-door"></i> Home</a>
            <a href="#about"><i class="bi bi-person"></i> About</a>
            <a href="#skills"><i class="bi bi-briefcase"></i> Skills</a>
            <a href="#projects"><i class="bi bi-folder"></i> Projects</a>
            <a href="#resume"><i class="bi bi-code-slash"></i> Resume</a>
            <a href="#contact"><i class="bi bi-envelope"></i> Contact</a>
        </div>
        <div class="devlopertag">
            Developed by <a href="https://www.linkedin.com/in/itsmeprince09/" target="_blank" class="devlopertag-link">Prince</a><br>
            © Copyright <span class="devlopertag-highlight">Prince</span>
        </div>

        `;
    } else {
        navbar.classList.remove("scrolled");
        navbar.innerHTML = `
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <div>
                <img src="Nav2.jpg" alt="Profile Picture" class="profile-img">
            </div>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
        `;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); // Get all sections
    const navLinks = document.querySelectorAll(".nav-links a"); // Get all nav links

    window.addEventListener("scroll", () => {
        let current = "";
        
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100; // Adjust based on your layout
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
});
