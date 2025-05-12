const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عن الشركة",
      services: "خدماتنا",
      team: "فريق العمل",
      contact: "اتصل بنا",
    },
    aboutHeaderPox: " خدماتنا",
    headerAnimerAbout: " تواصل <span> معانا </span>",
    contact: {
      info: [
        {
          description: "يمكنكم التواصل معنا عبر البريد الإلكتروني.",
          details: "info@tobanlawfirm.com",
        },
        {
          description: "اتصل بنا للحصول على استشارتك العقارية.",
          details: "+966-12-6558999",
        },
        {
          description: "قم بزيارة مكتبنا",
          details: "شارع عبد الوهاب نشار، جدة، المملكة العربية السعودية",
        },
      ],
      form: {
        title: "تواصل معنا",
        subtitle: "تواصل <span>معنا</span> الآن",
        description:
          "تواصلوا مع توبان - محامون ومستشارون قانونيون - للحصول على حلول قانونية متكاملة. استفيدوا من خبرتنا التي تتجاوز الأربعين عاماً في تقديم الاستشارات القانونية والتمثيل القضائي، مع الالتزام بأعلى معايير المهنية والنزاهة وفقاً للأنظمة السعودية والشريعة الإسلامية.",
        placeholders: {
          firstName: "الاسم الأول",
          lastName: "الاسم الأخير",
          phone: "رقم الهاتف",
          email: "البريد الإلكتروني",
          message: "اكتب استفسارك هنا...",
        },
        submitButton: "أرسل الرسالة",
      },
    },
    footer: {
      title: "دعونا نحقق العدالة مع افضل فريق عمل في توبان",
      quickLinks: "روابط سريعة",
      workHours: "مواعيد العمل",
      contact: "تواصل معنا",
      address:
        "حي الشاطئ3/ - 3624 شارع عبد الوهاب نشار ص. ب 22393 الرمز البريدي 21495 جدة – المملكة العربية السعودية",
      copyright: "Copyright © 2025 All Rights Reserved.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Our Services",
      team: "Our Team",
      contact: "Contact Us",
    },
    aboutHeaderPox: " services",
    headerAnimerAbout: "Contact <span> Us</span>",
    contact: {
      info: [
        {
          description: "You can contact us via email.",
          details: "info@tobanlawfirm.com",
        },
        {
          description: "Call us to get your real estate consultation.",
          details: "+966-12-6558999",
        },
        {
          description: "Visit our office",
          details: "Abdul Wahab Nashar Street, Jeddah, Kingdom of Saudi Arabia",
        },
      ],
      form: {
        title: "Contact Us",
        subtitle: "Contact <span>Us</span> Now",
        description:
          "Connect with Toban - Lawyers and Legal Consultants - for comprehensive legal solutions. Benefit from our over forty years of experience in providing legal consultations and judicial representation, with a commitment to the highest standards of professionalism and integrity in accordance with Saudi regulations and Islamic Sharia.",
        placeholders: {
          firstName: "First Name",
          lastName: "Last Name",
          phone: "Phone Number",
          email: "Email Address",
          message: "Write your inquiry here...",
        },
        submitButton: "Send Message",
      },
    },
    footer: {
      title: "Let's Achieve Justice with the Best Team at Toban",
      quickLinks: "Quick Links",
      workHours: "Working Hours",
      contact: "Contact Us",
      address:
        "Al-Shati District 3/ - 3624 Abdul Wahab Nashar Street P.O. Box 22393 Postal Code 21495 Jeddah - Kingdom of Saudi Arabia",
      copyright: "حقوق النسخ محفوظة © 2025 نظام توبان القانوني",
    },
  },
};
// Function to load language
const loadLanguage = () => {
  const savedLang = localStorage.getItem("selectedLang") || "ar";
  const selectedLang = translations[savedLang];
  const langToggle = document.getElementById("language-toggle");

  // Update navigation
  document.querySelectorAll(".navbar-nav .nav-link").forEach((link, index) => {
    if (index === 0) link.textContent = selectedLang.nav.home;
    if (index === 1) link.textContent = selectedLang.nav.about;
    if (index === 2) link.textContent = selectedLang.nav.services;
    if (index === 3) link.textContent = selectedLang.nav.team;
    if (index === 4) link.textContent = selectedLang.nav.contact;
  });

  // Update footer links
  document.querySelectorAll(".footer-links ul li a").forEach((link, index) => {
    if (index === 0) link.textContent = selectedLang.nav.home;
    if (index === 1) link.textContent = selectedLang.nav.about;
    if (index === 2) link.textContent = selectedLang.nav.services;
    if (index === 3) link.textContent = selectedLang.nav.team;
    if (index === 4) link.textContent = selectedLang.nav.contact;
  });

  // Update breadcrumb and header
  document.querySelector(".breadcrumb .breadcrumb-item a").textContent =
    selectedLang.nav.home;
  document.querySelector(".breadcrumb .about-header-pox").textContent =
    selectedLang.aboutHeaderPox;
  document.querySelector(".header-animer-about").innerHTML =
    selectedLang.headerAnimerAbout;

  // Update footer
  document.querySelector(".footer-newsletter-title h2").textContent =
    selectedLang.footer.title;
  document.querySelectorAll(".footer-links h3")[0].textContent =
    selectedLang.footer.quickLinks;
  document.querySelectorAll(".footer-links h3")[1].textContent =
    selectedLang.footer.workHours;
  document.querySelectorAll(".footer-links h3")[2].textContent =
    selectedLang.footer.contact;
  document.querySelector(".footer-links.four a").textContent =
    selectedLang.footer.address;

  // Update contact information section
  const contactItems = document.querySelectorAll(".contact-info-item");
  contactItems.forEach((item, index) => {
    const description = item.querySelector(".contact-info-contant p.par-info");
    const details = item.querySelector(".contact-info-contant h3");

    if (selectedLang.contact.info[index]) {
      description.textContent = selectedLang.contact.info[index].description;
      details.textContent = selectedLang.contact.info[index].details;
    }
  });

  // Update contact form section
  const contactFormTitle = document.querySelector(".contact-us-form .section-title h3");
  const contactFormSubtitle = document.querySelector(".contact-us-form .section-title h2");
  const contactFormDescription = document.querySelector(".contact-us-form .section-title-content p");

  if (contactFormTitle) {
    contactFormTitle.textContent = selectedLang.contact.form.title;
  }
  if (contactFormSubtitle) {
    contactFormSubtitle.innerHTML = selectedLang.contact.form.subtitle;
  }
  if (contactFormDescription) {
    contactFormDescription.textContent = selectedLang.contact.form.description;
  }

  // Update form placeholders and button
  const formInputs = document.querySelectorAll(".contact-form input, .contact-form textarea");
  formInputs.forEach((input) => {
    if (input.id === "fname") input.placeholder = selectedLang.contact.form.placeholders.firstName;
    if (input.id === "lname") input.placeholder = selectedLang.contact.form.placeholders.lastName;
    if (input.id === "phone") input.placeholder = selectedLang.contact.form.placeholders.phone;
    if (input.id === "email") input.placeholder = selectedLang.contact.form.placeholders.email;
    if (input.id === "message") input.placeholder = selectedLang.contact.form.placeholders.message;
  });

  const submitButton = document.querySelector(".contact-form button.btn-default span");
  if (submitButton) {
    submitButton.textContent = selectedLang.contact.form.submitButton;
  }

  // Set checkbox state
  langToggle.checked = savedLang === "en";
  updatePageLanguage(savedLang);
};

// Function to update page language and direction
const updatePageLanguage = (lang) => {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title =
    lang === "ar"
      ? "توبان – محامون ومستشارون قانونيون"
      : "Toban - Lawyers and Legal Consultants";
};

// Event listener for language toggle
document
  .getElementById("language-toggle")
  .addEventListener("change", function () {
    const lang = this.checked ? "en" : "ar";
    localStorage.setItem("selectedLang", lang);
    loadLanguage();
    // location.reload(); // Removed to avoid reloading, as dynamic updates are handled
  });

// Initialize language on page load
document.addEventListener("DOMContentLoaded", loadLanguage);