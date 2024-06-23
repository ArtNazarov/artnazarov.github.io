const host = "https://fleek.ipfs.io/ipfs/QmYeNpu3m3LAkJdSXJMWta8zt4nmBzq4AQYU6rP46qx88x"; // заменить на нужный хост
const navLinks = document.querySelectorAll(".nav-menu"); // выбираем все элементы с классом nav-menu
navLinks.forEach(link => {
  const oldHref = link.getAttribute("href"); // получаем старое значение href
  link.setAttribute("href", host + oldHref); // устанавливаем новое значение href
});console.log("test");
