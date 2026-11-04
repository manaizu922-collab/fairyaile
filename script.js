
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

// スマホメニュー
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");

  menuToggle.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "メニューを閉じる" : "メニューを開く"
  );
});

// メニューを選択したら閉じる
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "メニューを開く");
  });
});

// フッターの年号
document.getElementById("year").textContent =
  new Date().getFullYear();
