const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عن الشركة",
      services: "خدماتنا",
      team: "فريق العمل",
      contact: "اتصل بنا",
    },
    aboutHeaderPox: "عبد الرازق عبد المنعم محمد الحفني",
    headerAnimerAbout: "عبد الرازق <span>عبد المنعم محمد الحفني</span>",
    teamSingle: {
      header: {
        title: "عبد الرازق عبد المنعم محمد الحفني",
        breadcrumb: "عبد الرازق عبد المنعم محمد الحفني",
      },
      personalInfo: {
        title: "المعلومات <span>الشخصية</span>",
        description: [
          "المستشار القانوني والمالي/ عبد الرازق عبد المنعم محمد الحفني، يتمتع بخبرة مهنية تزيد عن 23 عاماً في المجالين القانوني والمالي.",
          "حاصل على بكالوريوس التجارة من جامعة عين شمس 1995م، وليسانس الحقوق من جامعة القاهرة 2019م، مما يؤهله لتقديم استشارات متكاملة تجمع بين الجانبين القانوني والمالي.",
          "يمتلك خبرة طويلة في إدارة المنازعات المالية وتقديم الاستشارات المتخصصة للشركات والأفراد.",
        ],
      },
      qualifications: {
        title: "المسيرة <span>المهنية</span>",
        description: "أبرز محطات المسيرة المهنية للمستشار الحفني:",
        list: [
          "عضو نقابة التجاريين بمصر منذ 1996",
          "عضو جمعية المحاسبين والمراجعين القانونيين بمصر منذ 2011",
          "محاسب مالي بمكتب محمد توبان (2001-2007)",
          "مدير مالي بشركة سامح توبان وشركاه (2007-2019)",
          "مستشار مالي وقانوني بالشركة (2020-حتى الآن)",
          "خبرة 23+ سنة في المنازعات المالية والاستشارات",
          "متخصص في القضايا المالية والتجارية",
          "خبير في الجمع بين الجوانب القانونية والمحاسبية",
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
    aboutHeaderPox: "Abdelrazek Abdelmonem Mohammed Al-Hafni",
    headerAnimerAbout: "Abdelrazek <span>Abdelmonem Mohammed Al-Hafni</span>",
    teamSingle: {
      header: {
        title: "Abdelrazek Abdelmonem Mohammed Al-Hafni",
        breadcrumb: "Abdelrazek Abdelmonem Mohammed Al-Hafni",
      },
      personalInfo: {
        title: "Personal <span>Information</span>",
        description: [
          "Legal and Financial Consultant Abdelrazek Abdelmonem Mohammed Al-Hafni has over 23 years of professional experience in both legal and financial fields.",
          "Holds a Bachelor’s in Commerce from Ain Shams University (1995) and a Bachelor’s in Law from Cairo University (2019), enabling him to provide comprehensive consultations combining legal and financial aspects.",
          "Possesses extensive experience in managing financial disputes and providing specialized consultations for companies and individuals.",
        ],
      },
      qualifications: {
        title: "Professional <span>Career</span>",
        description:
          "Key milestones in Consultant Al-Hafni’s professional career:",
        list: [
          "Member of the Egyptian Commercial Syndicate since 1996",
          "Member of the Egyptian Association of Accountants and Auditors since 2011",
          "Financial Accountant at Mohammed Toban’s Office (2001-2007)",
          "Financial Manager at Sameh Toban & Partners (2007-2019)",
          "Legal and Financial Consultant at the firm (2020-present)",
          "Over 23 years of experience in financial disputes and consultations",
          "Specialized in financial and commercial cases",
          "Expert in integrating legal and accounting aspects",
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