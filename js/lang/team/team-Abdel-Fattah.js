const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عن الشركة",
      services: "خدماتنا",
      team: "فريق العمل",
      contact: "اتصل بنا",
    },
    aboutHeaderPox: "عبدالفتاح السيد علي",
    headerAnimerAbout: "عبدالفتاح <span>السيد علي</span>",
    teamSingle: {
      header: {
        title: "عبدالفتاح السيد علي",
        breadcrumb: "عبدالفتاح السيد علي",
      },
      personalInfo: {
        title: "المعلومات <span>الشخصية</span>",
        description: [
          "المستشار القانوني/ عبدالفتاح السيد علي، يتمتع بخبرة قانونية تزيد عن 40 عاماً في الممارسة القانونية محلياً ودولياً.",
          "حاصل على الدكتوراه في القانون الدولي من جامعة ميونخ الألمانية 2016م، ويشغل لقب سفير النوايا الحسنة للسلام بالأمم المتحدة.",
          "خبير في المنازعات المصرفية والتجارية والشرعية، وصياغة العقود بكافة أنواعها، مع خبرة واسعة في إجراءات التقاضي والتحكيم الدولي.",
        ],
      },
      qualifications: {
        title: "المؤهلات <span>والإنجازات</span>",
        description: "أبرز محطات المسيرة العلمية والمهنية للمستشار عبدالفتاح:",
        list: [
          "ليسانس الحقوق - مصر 1983",
          "ماجستير القانون - مصر 1998",
          "دكتوراه القانون الدولي - جامعة ميونخ 2016",
          "سفير النوايا الحسنة للسلام بالأمم المتحدة 2016",
          "محامي مسجل باتحاد المحامين العرب (رقم 15039)",
          "مستشار تحكيم معتمد (رقم 6066)",
          "محامٍ مسجل بأعلى درجات النقابة بالقاهرة",
          "خبرة 40+ سنة في المنازعات القانونية",
          "متخصص في المنازعات المصرفية والتجارية",
          "خبير في التنظيم الإداري وشؤون الموظفين",
          "محترف في صياغة العقود بكافة أنواعها",
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
    aboutHeaderPox: "Abdel Fattah Elsayed Ali",
    headerAnimerAbout: "Abdel Fattah <span>Elsayed Ali</span>",
    teamSingle: {
      header: {
        title: "Abdel Fattah Elsayed Ali",
        breadcrumb: "Abdel Fattah Elsayed Ali",
      },
      personalInfo: {
        title: "Personal <span>Information</span>",
        description: [
          "Legal Consultant Abdel Fattah Elsayed Ali has over 40 years of legal practice experience locally and internationally.",
          "Holds a PhD in International Law from the University of Munich, Germany (2016), and serves as a Goodwill Ambassador for Peace at the United Nations.",
          "Expert in banking, commercial, and Sharia disputes, as well as drafting contracts of all types, with extensive experience in litigation and international arbitration procedures.",
        ],
      },
      qualifications: {
        title: "Qualifications <span>and Achievements</span>",
        description:
          "Key milestones in Consultant Abdel Fattah’s academic and professional career:",
        list: [
          "Bachelor’s in Law - Egypt, 1983",
          "Master’s in Law - Egypt, 1998",
          "PhD in International Law - University of Munich, 2016",
          "Goodwill Ambassador for Peace at the United Nations, 2016",
          "Registered Lawyer with the Arab Lawyers Union (No. 15039)",
          "Certified Arbitration Consultant (No. 6066)",
          "Registered Lawyer at the highest level of the Cairo Bar Association",
          "Over 40 years of experience in legal disputes",
          "Specialized in banking and commercial disputes",
          "Expert in administrative organization and personnel affairs",
          "Professional in drafting contracts of all types",
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