tailwind.config = {
    darkMode: 'class', 
  };
  // darkmode 
  function toggleDark() {
    const html = document.documentElement;
    const icon = document.getElementById("themeToggle").firstElementChild;
  
    html.classList.toggle("dark");
  
    if (html.classList.contains("dark")) {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
      icon.classList.replace("text-yellow-500", "text-blue-300");
    } else {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
      icon.classList.replace("text-blue-300", "text-yellow-500");
    }
  }
  
  // Sidebar
  function openSidebar() {
    document.getElementById("sidebar").classList.remove("-translate-x-full");
  }
  
  
  function closeSidebar() {
    document.getElementById("sidebar").classList.add("-translate-x-full");
  }
  
  // Sahifalarni boshqarish va sarlavhani yangilash
  function navigateTo(id) {
    // Barcha bo‘limlarni yashirish
    document.querySelectorAll('.section-box').forEach(el => el.classList.add('hidden'));
  
    // Faqat tanlangan bo‘limni ko‘rsatish
    const section = document.getElementById(id);
    if (section) section.classList.remove('hidden');
  
  // sarlavhalar
    const titles = {
      patients: "Be’morlar",
      hr: "HR bo‘limi",
      price: "Narxlar",
      sms: "SMS xabarlar",
      users: "Foydalanuvchilar",
      reports: "Hisobotlar",
      calendar: "Kalendar",
      debtors: "Qarzdorlar",
      anketa:"Anketa",
      maxsus:"Maxsus price"
    };
  
    const sectionTitle = document.getElementById("sectionTitle");
    if (sectionTitle && titles[id]) {
      sectionTitle.textContent = titles[id];
    }
  
    if (window.innerWidth < 768) {
      closeSidebar();
    }
  }
  