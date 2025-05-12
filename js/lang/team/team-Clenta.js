const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عن الشركة",
      services: "خدماتنا",
      team: "فريق العمل",
      contact: "اتصل بنا",
    },
    aboutHeaderPox: "كلنتا إساكا",
    headerAnimerAbout: "كلنتا <span>إساكا</span>",
    teamSingle: {
      header: {
        title: "كلنتا إساكا",
        breadcrumb: "كلنتا إساكا",
      },
      personalInfo: {
        title: "المعلومات <span>الشخصية</span>",
        description: [
          "المستشارة القانونية/ كلنتا إساكا، متخصصة في القانون التجاري والدولي، حاصلة على بكالوريوس القانون من جامعة سيتي لندن.",
          "تمتلك خبرة عملية منذ عام 2020م في مجال الاستشارات القانونية والمنازعات التجارية الدولية.",
          "تعمل ضمن فريق متكامل يضم نخبة من المستشارين القانونيين المتعاونين مع الشركة وأساتذة متخصصين من الجامعات.",
        ],
      },
      qualifications: {
        title: "المؤهلات <span>والشراكات</span>",
        description: "تتمتع المستشارة كلنتا إساكا بالمؤهلات التالية:",
        list: [
          "بكالوريوس قانون تخصص تجاري ودولي - جامعة سيتي لندن",
          "خبرة عملية منذ 2020م في المجال القانوني",
          "شبكة علاقات مع أساتذة متخصصين في مجالات قانونية مختلفة",
          "تعاون مع مستشارين قانونيين متخصصين",
          "إشراف على قسم التحصيل والمتابعة المؤهل",
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
    aboutHeaderPox: "Klinta Isaka",
    headerAnimerAbout: "Klinta <span>Isaka</span>",
    teamSingle: {
      header: {
        title: "Klinta Isaka",
        breadcrumb: "Klinta Isaka",
      },
      personalInfo: {
        title: "Personal <span>Information</span>",
        description: [
          "Legal Consultant Klinta Isaka specializes in commercial and international law, holding a Bachelor’s degree in Law from City, University of London.",
          "She has practical experience since 2020 in the field of legal consultations and international commercial disputes.",
          "She works within an integrated team comprising elite legal consultants collaborating with the firm and specialized professors from universities.",
        ],
      },
      qualifications: {
        title: "Qualifications <span>and Partnerships</span>",
        description:
          "Consultant Klinta Isaka holds the following qualifications:",
        list: [
          "Bachelor’s in Law, specializing in Commercial and International Law - City, University of London",
          "Practical experience since 2020 in the legal field",
          "Network of relationships with professors specialized in various legal fields",
          "Collaboration with specialized legal consultants",
          "Supervision of the qualified collection and follow-up department",
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