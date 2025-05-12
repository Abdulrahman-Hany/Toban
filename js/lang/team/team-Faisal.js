const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عن الشركة",
      services: "خدماتنا",
      team: "فريق العمل",
      contact: "اتصل بنا",
    },
    aboutHeaderPox: "فيصل بخيت الحربي",
    headerAnimerAbout: "فيصل <span>بخيت الحربي</span>",
    teamSingle: {
      header: {
        title: "فيصل بخيت الحربي",
        breadcrumb: "فيصل بخيت الحربي",
      },
      personalInfo: {
        title: "المعلومات <span>الشخصية</span>",
        description: [
          "المحامي/ فيصل بخيت الحربي - شريك في الشركة، يتمتع بخبرة قانونية تزيد عن 15 عاماً في الممارسة القانونية بالمملكة العربية السعودية.",
          "خبير في القانون التجاري الدولي والمنازعات المصرفية، معتمد كمحكم وموثق من وزارة العدل السعودية، ومسجل عقاري معتمد لدى الهيئة العامة للعقار.",
          "يمتلك خبرة واسعة في الترافع أمام جميع المحاكم والهيئات القضائية بمختلف تخصصاتها، وصياغة العقود بكافة أنواعها.",
        ],
      },
      qualifications: {
        title: "المؤهلات <span>والخبرات</span>",
        description: "يتمتع المحامي فيصل الحربي بسجل أكاديمي ومهني متميز يشمل:",
        list: [
          "ترخيص محاماة رقم ٣٤/١١٣ - المملكة العربية السعودية.",
          "موثق معتمد من وزارة العدل ٣٩/١١٥٩ - المملكة العربية السعودية.",
          "بكالوريوس الأنظمة - جامعة الملك عبد العزيز – ٢٠٠٧ م.",
          "ماجستير في القانون التجاري الدولي ٢٠١١ م - جامعة أكسفورد بروكس بالمملكة المتحدة.",
          "عمل كمحاضر متعاون في جامعة جدة لمدة خمس سنوات.",
          "عمل كمحاضر متعاون لدى جامعة الأعمال والتكنولوجيا.",
          "محكم معتمد لدى وزارة العدل السعودية.",
          "عمل موثق معتمد لدى شركة الراجحي المصرفية للاستثمار.",
          "مسجل عقاري معتمد لدى الهيئة العامة للعقار.",
          "خبرة عملية منذ عام ٢٠٠٧م في مجالات قانونية مختلفة ومتنوعة داخل المملكة بالإضافة إلى الترافع أمام جميع المحاكم والهيئات واللجان القضائية (شرعية/إدارية/مصرفية/تجارية/عمالية) ولجان التحكيم وصياغة وإعداد العقود بكافة أنواعها وأغراضها.",
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
    aboutHeaderPox: "Faisal Bukhait Al-Harbi",
    headerAnimerAbout: "Faisal <span>Bukhait Al-Harbi</span>",
    teamSingle: {
      header: {
        title: "Faisal Bukhait Al-Harbi",
        breadcrumb: "Faisal Bukhait Al-Harbi",
      },
      personalInfo: {
        title: "Personal <span>Information</span>",
        description: [
          "Lawyer Faisal Bukhait Al-Harbi, a partner in the firm, has over 15 years of legal practice experience in the Kingdom of Saudi Arabia.",
          "Expert in international commercial law and banking disputes, certified as an arbitrator and notary by the Saudi Ministry of Justice, and a certified real estate registrar with the General Authority for Real Estate.",
          "Possesses extensive experience in litigating before all courts and judicial bodies across various specializations and drafting contracts of all types.",
        ],
      },
      qualifications: {
        title: "Qualifications <span>and Experience |span>",
        description:
          "Lawyer Faisal Al-Harbi has a distinguished academic and professional record, including:",
        list: [
          "Licensed Lawyer No. 34/113 – Kingdom of Saudi Arabia.",
          "Certified Notary by the Ministry of Justice No. 39/1159 – Kingdom of Saudi Arabia.",
          "Bachelor's Degree in Law – King Abdulaziz University, 2007.",
          "Master’s Degree in International Commercial Law, 2011 – Oxford Brookes University, United Kingdom.",
          "Served as a part-time lecturer at the University of Jeddah for five years.",
          "Served as a part-time lecturer at the University of Business and Technology.",
          "Certified Arbitrator by the Saudi Ministry of Justice.",
          "Served as a certified notary for Al Rajhi Bank.",
          "Certified Real Estate Registrar by the General Real Estate Authority.",
          "Practical legal experience since 2007 in various legal fields within the Kingdom, including representation before all courts, authorities, and judicial committees (Sharia/Administrative/Banking/Commercial/Labor), arbitration panels, and drafting all types of contracts for various purposes.",
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
  const personalInfoParagraphs = document.querySelectorAll(
    ".team-personal-info p"
  );

  if (personalInfoTitle) {
    personalInfoTitle.innerHTML = selectedLang.teamSingle.personalInfo.title;
  }
  personalInfoParagraphs.forEach((p, index) => {
    if (selectedLang.teamSingle.personalInfo.description[index]) {
      p.textContent = selectedLang.teamSingle.personalInfo.description[index];
    }
  });

  // Qualifications
  const qualificationsTitle = document.querySelector(
    ".team-career-guideline h2"
  );
  const qualificationsDescription = document.querySelector(
    ".team-career-guideline p"
  );
  const qualificationsListItems = document.querySelectorAll(
    ".team-career-list ul li"
  );

  if (qualificationsTitle) {
    qualificationsTitle.innerHTML =
      selectedLang.teamSingle.qualifications.title;
  }
  if (qualificationsDescription) {
    qualificationsDescription.textContent =
      selectedLang.teamSingle.qualifications.description;
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
