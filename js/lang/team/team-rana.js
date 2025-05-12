const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عن الشركة",
      services: "خدماتنا",
      team: "فريق العمل",
      contact: "اتصل بنا",
    },
    aboutHeaderPox: "رنا فهد السيد",
    headerAnimerAbout: "رنا <span>فهد السيد</span>",
    teamSingle: {
      header: {
        title: "رنا فهد السيد",
        breadcrumb: "رنا فهد السيد",
      },
      personalInfo: {
        title: "المعلومات <span>الشخصية</span>",
        description: [
          "المحامية/ رنا فهد السيد، محامية مرخصة بمزاولة المهنة بالمملكة العربية السعودية تحت ترخيص رقم (462574). تتمتع بخبرة عملية في المجال القانوني منذ عام 2021م.",
          "خريجة كلية الأنظمة بجامعة الملك عبد العزيز عام 2020م، تمتلك مهارات قانونية متنامية وتتميز بالجدية والالتزام في العمل.",
        ],
      },
      qualifications: {
        title: "المؤهلات <span>المهنية</span>",
        description: "تتمتع المحامية رنا السيد بالمؤهلات التالية:",
        list: [
          "ترخيص محاماة رقم (462574) - المملكة العربية السعودية",
          "بكالوريوس الأنظمة - جامعة الملك عبد العزيز 2020",
          "خبرة عملية منذ 2021م في الممارسة القانونية",
        ],
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
    aboutHeaderPox: "Rana Fahad Al-Sayed",
    headerAnimerAbout: "Rana <span>Fahad Al-Sayed</span>",
    teamSingle: {
      header: {
        title: "Rana Fahad Al-Sayed",
        breadcrumb: "Rana Fahad Al-Sayed",
      },
      personalInfo: {
        title: "Personal <span>Information</span>",
        description: [
          "Lawyer Rana Fahad Al-Sayed is a licensed attorney practicing in the Kingdom of Saudi Arabia under license number (462574). She has practical experience in the legal field since 2021.",
          "Graduated from the College of Regulations at King Abdulaziz University in 2020, she possesses growing legal skills and is distinguished by her dedication and commitment to work.",
        ],
      },
      qualifications: {
        title: "Professional <span>Qualifications</span>",
        description: "Lawyer Rana Al-Sayed holds the following qualifications:",
        list: [
          "Lawyer License Number (462574) - Kingdom of Saudi Arabia",
          "Bachelor’s in Regulations - King Abdulaziz University, 2020",
          "Practical experience in legal practice since 2021",
        ],
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
    selectedLang.teamSingle.header.breadcrumb;
  document.querySelector(".header-animer-about").innerHTML =
    selectedLang.teamSingle.header.title;

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

  // Update team single page
  // Personal Info
  const personalInfoTitle = document.querySelector(".team-personal-info h2");
  const personalInfoParagraphs = document.querySelectorAll(".team-personal-info p");

  if (personalInfoTitle) {
    personalInfoTitle.innerHTML = selectedLang.teamSingle.personalInfo.title;
  }
  personalInfoParagraphs.forEach((p, index) => {
    if (selectedLang.teamSingle.personalInfo.description[index]) {
      p.textContent = selectedLang.teamSingle.personalInfo.description[index];
    }
  });

  // Qualifications
  const qualificationsTitle = document.querySelector(".team-career-guideline h2");
  const qualificationsDescription = document.querySelector(".team-career-guideline p");
  const qualificationsListItems = document.querySelectorAll(".team-career-list ul li");

  if (qualificationsTitle) {
    qualificationsTitle.innerHTML = selectedLang.teamSingle.qualifications.title;
  }
  if (qualificationsDescription) {
    qualificationsDescription.textContent = selectedLang.teamSingle.qualifications.description;
  }
  qualificationsListItems.forEach((li, index) => {
    if (selectedLang.teamSingle.qualifications.list[index]) {
      li.textContent = selectedLang.teamSingle.qualifications.list[index];
    }
  });

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