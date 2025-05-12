const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عن الشركة",
      services: "خدماتنا",
      team: "فريق العمل",
      contact: "اتصل بنا",
    },
    aboutHeaderPox: "باسم عاطف درويش",
    headerAnimerAbout: "باسم <span>عاطف درويش</span>",
    teamSingle: {
      header: {
        title: "باسم عاطف درويش",
        breadcrumb: "باسم عاطف درويش",
      },
      personalInfo: {
        title: "المعلومات <span>الشخصية</span>",
        description: [
          "المحامي/ باسم عاطف درويش - شريك بالشركة، يحمل ترخيص محاماة رقم (32/63) من المملكة العربية السعودية.",
          "خريج كلية الأنظمة بجامعة الملك عبد العزيز عام 2007م، يتمتع بخبرة قانونية تزيد عن 15 عاماً في الممارسة المهنية.",
          "متخصص في الترافع أمام جميع المحاكم والهيئات القضائية بمختلف أنواعها، وصياغة العقود القانونية بكافة أشكالها.",
        ],
      },
      qualifications: {
        title: "المؤهلات <span>والعضويات</span>",
        description: "يتمتع المحامي باسم درويش بالمؤهلات التالية:",
        list: [
          "شريك بالشركة",
          "بكالوريوس الأنظمة - جامعة الملك عبد العزيز 2007",
          "عضو اتحاد المحامين العرب",
          "عضو اتحاد المحامين الدوليين (IBA)",
          "محكم معتمد بمركز التحكيم التجاري لدول الخليج",
          "عضو لجنة المحامين بلجنة 'تراحم' بجدة",
          "خبرة عملية منذ 2007 في كافة المجالات القانونية",
          "متخصص في الترافع القضائي بكافة أنواعه",
          "خبير في صياغة العقود القانونية",
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
    aboutHeaderPox: "Basim Atef Darwish",
    headerAnimerAbout: "Basim <span>Atef Darwish</span>",
    teamSingle: {
      header: {
        title: "Basim Atef Darwish",
        breadcrumb: "Basim Atef Darwish",
      },
      personalInfo: {
        title: "Personal <span>Information</span>",
        description: [
          "Lawyer Basim Atef Darwish, a partner in the firm, holds a lawyer’s license number (32/63) from the Kingdom of Saudi Arabia.",
          "Graduated from the College of Regulations at King Abdulaziz University in 2007, he has over 15 years of professional legal practice experience.",
          "Specialized in litigating before all courts and judicial bodies of various types and drafting legal contracts in all forms.",
        ],
      },
      qualifications: {
        title: "Qualifications <span>and Memberships</span>",
        description: "Lawyer Basim Darwish holds the following qualifications:",
        list: [
          "Partner in the firm",
          "Bachelor’s in Regulations - King Abdulaziz University, 2007",
          "Member of the Arab Lawyers Union",
          "Member of the International Bar Association (IBA)",
          "Certified Arbitrator at the GCC Commercial Arbitration Center",
          "Member of the Lawyers Committee at the 'Tarahum' Committee in Jeddah",
          "Practical experience since 2007 in all legal fields",
          "Specialized in judicial litigation of all types",
          "Expert in drafting legal contracts",
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
  // Note: The HTML uses 'about-header-pox' for the h1 instead of 'header-animer-about'
  document.querySelector(".page-header-box h1.about-header-pox").textContent =
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