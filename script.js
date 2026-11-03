/* =========================
   BASIC
========================= */

:root {
  --orange: #f47735;
  --orange-dark: #df5c20;
  --orange-light: #fff0e6;
  --cream: #fffaf6;
  --ink: #292723;
  --navy: #263b53;
  --muted: #716d67;
  --line: #eee4dc;
  --white: #ffffff;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  margin: 0;
  color: var(--ink);
  background: var(--white);
  font-family: "Noto Sans JP", "Yu Gothic", Meiryo, sans-serif;
  line-height: 1.9;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

img {
  max-width: 100%;
}


/* =========================
   HEADER
========================= */

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  height: 78px;
  padding: 0 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.97);
  border-bottom: 1px solid #f3e9e1;
  backdrop-filter: blur(10px);
}

.logo {
  font-size: 27px;
  font-weight: 800;
  letter-spacing: -1.2px;
  line-height: 1;
}

.logo span {
  color: var(--orange);
}

.nav {
  display: flex;
  align-items: center;
  gap: 25px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1px;
}

.nav a {
  transition: color 0.2s;
}

.nav a:hover {
  color: var(--orange);
}

.nav .nav-contact {
  padding: 11px 17px;
  color: white;
  background: var(--orange);
  border-radius: 4px;
}

.menu-toggle {
  display: none;
}


/* =========================
   HERO
========================= */

.hero {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  min-height: 650px;
  min-height: calc(100vh - 78px);
  padding: 90px 9% 105px;
  display: flex;
  align-items: center;
  background:
    url("images/hero.png") center 40% / cover no-repeat;
  color: white;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(
    90deg,
    rgba(22, 39, 57, 0.72) 0%,
    rgba(22, 39, 57, 0.43) 48%,
    rgba(22, 39, 57, 0.05) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 620px;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
}

.eyebrow span {
  width: 23px;
  height: 3px;
  background: var(--orange);
}

.hero h1 {
  margin: 22px 0;
  font-size: clamp(54px, 7vw, 86px);
  line-height: 1.25;
  letter-spacing: -3px;
}

.hero h1 span {
  color: #ffad7d;
}

.hero-lead {
  margin: 0 0 15px;
  font-size: clamp(17px, 2vw, 23px);
  font-weight: 800;
  line-height: 1.8;
}

.hero-description {
  max-width: 510px;
  margin: 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: 13px;
  line-height: 2.1;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
  margin-top: 30px;
}

.primary-button,
.secondary-button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  padding: 14px 21px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 800;
  transition: 0.2s;
}

.primary-button {
  color: white;
  background: var(--orange);
}

.primary-button:hover {
  background: var(--orange-dark);
  transform: translateY(-2px);
}

.secondary-button {
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.08);
}

.secondary-button:hover {
  background: rgba(255, 255, 255, 0.2);
}

.hero-note {
  margin-top: 24px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 11px;
}

.hero-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 48px;
  padding: 0 9%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.35);
  color: white;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1px;
}


/* =========================
   COMMON
========================= */

.section {
  padding: 100px 9%;
}

.section-topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}

.section-label {
  margin: 0;
  color: var(--orange-dark);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
}

.section-index {
  color: #a69b90;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.small-heading {
  margin: 0 0 13px;
  color: var(--orange-dark);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
}

.section-heading h2,
.about-heading h2,
.achievements h2,
.team h2,
.company h2 {
  margin: 0;
  font-size: clamp(30px, 4vw, 46px);
  line-height: 1.55;
  letter-spacing: -1px;
}

.section-intro {
  max-width: 620px;
  margin: 20px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 2.2;
}

.section-footnote {
  margin-top: 23px;
  color: var(--muted);
  font-size: 10px;
}


/* =========================
   ABOUT
========================= */

.about {
  background: white;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  gap: 9%;
  align-items: center;
  margin-top: 50px;
}

.about-heading h2 {
  font-size: clamp(32px, 4vw, 47px);
}

.about-text p {
  color: var(--muted);
  font-size: 13px;
}

.about-text .lead {
  color: var(--ink);
  font-size: 18px;
  font-weight: 800;
  line-height: 1.8;
}

.about-message {
  margin-top: 65px;
  padding: 30px 35px;
  background: var(--orange-light);
  border-left: 4px solid var(--orange);
}

.about-message span {
  color: var(--orange-dark);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
}

.about-message p {
  margin: 8px 0 0;
  font-size: clamp(19px, 2.5vw, 27px);
  font-weight: 800;
}


/* =========================
   SERVICE
========================= */

.service {
  background: var(--cream);
}

.service-main {
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  gap: 8%;
  align-items: center;
  margin-top: 55px;
  padding: 45px;
  background: white;
  border: 1px solid var(--line);
  border-radius: 8px;
}

.service-number {
  color: var(--orange-dark);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
}

.service-main h3 {
  margin: 15px 0;
  font-size: clamp(25px, 3vw, 34px);
  line-height: 1.6;
}

.service-main-text > p {
  color: var(--muted);
  font-size: 13px;
}

.status-label {
  display: inline-block;
  margin-top: 12px;
  padding: 6px 11px;
  color: var(--orange-dark);
  background: var(--orange-light);
  border-radius: 3px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1px;
}

.service-visual {
  padding: 15px;
  background: #fff5ed;
  border-radius: 8px;
}

.mockup {
  max-width: 310px;
  margin: auto;
  overflow: hidden;
  background: white;
  border: 1px solid #eee0d5;
  border-radius: 12px;
  box-shadow: 0 15px 35px rgba(70, 49, 31, 0.1);
}

.mockup-top {
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  border-bottom: 1px solid var(--line);
}

.mockup-logo {
  font-size: 17px;
  font-weight: 800;
}

.mockup-logo::first-letter {
  color: var(--orange);
}

.mockup-menu {
  color: var(--orange);
  font-size: 10px;
}

.mockup-content {
  padding: 22px;
}

.mockup-label {
  color: var(--orange-dark);
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.mockup-content h4 {
  margin: 10px 0 18px;
  font-size: 21px;
  line-height: 1.5;
}

.mockup-search {
  display: flex;
  justify-content: space-between;
  padding: 11px;
  color: #9b9189;
  background: var(--cream);
  border: 1px solid var(--line);
  border-radius: 4px;
  font-size: 10px;
}

.mockup-search span {
  color: var(--orange);
  font-size: 18px;
}

.mockup-row {
  display: flex;
  justify-content: space-between;
  padding: 13px 3px;
  border-bottom: 1px solid var(--line);
  font-size: 10px;
}

.mockup-row strong {
  color: var(--orange-dark);
}

.visual-caption {
  margin: 10px 0 0;
  color: var(--muted);
  font-size: 9px;
  text-align: center;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 25px;
}

.feature-card {
  position: relative;
  padding: 27px;
  background: white;
  border: 1px solid var(--line);
  border-radius: 6px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(80, 54, 34, 0.07);
}

.feature-index {
  color: var(--orange-dark);
  font-size: 10px;
  font-weight: 800;
}

.feature-icon {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  margin-top: 14px;
  color: var(--orange-dark);
  background: var(--orange-light);
  border-radius: 8px;
  font-size: 25px;
}

.feature-card h3 {
  margin: 17px 0 8px;
  font-size: 16px;
}

.feature-card p {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 2;
}

.service-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin-top: 25px;
  color: var(--muted);
  font-size: 11px;
}

.service-bottom span {
  flex-shrink: 0;
  padding: 5px 10px;
  color: var(--orange-dark);
  background: var(--orange-light);
  border-radius: 3px;
  font-weight: 800;
}


/* =========================
   VISION
========================= */

.vision {
  padding: 105px 9%;
  color: white;
  background: var(--navy);
}

.vision-inner {
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  gap: 9%;
  align-items: center;
}

.vision .section-label,
.vision .small-heading {
  color: #ffb17e;
}

.vision-copy h2 {
  margin: 15px 0 22px;
  font-size: clamp(30px, 4vw, 44px);
  line-height: 1.6;
}

.vision-copy > p:last-child {
  max-width: 520px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 13px;
  line-height: 2.2;
}

.vision-list {
  padding: 25px 30px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
}

.vision-item {
  display: flex;
  gap: 18px;
  padding: 17px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.17);
}

.vision-item:last-child {
  border-bottom: none;
}

.vision-item > span {
  display: grid;
  place-items: center;
  width: 39px;
  height: 39px;
  flex-shrink: 0;
  color: var(--orange-dark);
  background: white;
  border-radius: 50%;
  font-size: 11px;
  font-weight: 800;
}

.vision-item h3 {
  margin: 0;
  font-size: 14px;
}

.vision-item p {
  margin: 5px 0 0;
  color: rgba(255, 255, 255, 0.72);
  font-size: 11px;
}


/* =========================
   ACHIEVEMENTS
========================= */

.achievements {
  background: white;
}

.achievements h2 {
  margin-top: 20px;
}

.achievement-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 40px;
}

.achievement-card {
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: white;
}

.achievement-category {
  color: var(--orange-dark);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.achievement-card h3 {
  margin: 17px 0 10px;
  font-size: 17px;
}

.achievement-card p {
  min-height: 85px;
  color: var(--muted);
  font-size: 12px;
  line-height: 2;
}

.achievement-status {
  display: inline-block;
  padding: 4px 9px;
  color: var(--orange-dark);
  background: var(--orange-light);
  border-radius: 3px;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1px;
}


/* =========================
   TEAM
========================= */

.team {
  background: var(--cream);
}

.team-grid {
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  gap: 9%;
  align-items: center;
  margin-top: 35px;
}

.team-description p {
  color: var(--muted);
  font-size: 13px;
}

.team-message {
  margin-top: 55px;
  padding: 35px;
  background: white;
  border-left: 4px solid var(--orange);
}

.team-message > span:first-child {
  color: var(--orange-dark);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
}

.team-message p {
  margin: 10px 0;
  font-size: clamp(20px, 3vw, 28px);
  font-weight: 800;
}

.team-note {
  color: var(--muted);
  font-size: 11px;
}


/* =========================
   CONTACT
========================= */

.contact {
  padding: 100px 9%;
  color: white;
  background: var(--orange);
  text-align: center;
}

.contact .section-label,
.contact .small-heading {
  color: #fff0e6;
}

.contact h2 {
  margin: 15px 0;
  font-size: clamp(30px, 4vw, 46px);
  line-height: 1.6;
}

.contact-description {
  max-width: 570px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.9);
  font-size: 13px;
}

.contact-actions {
  margin-top: 30px;
}

.contact-button {
  display: inline-flex;
  align-items: center;
  gap: 30px;
  padding: 15px 25px;
  color: var(--orange-dark);
  background: white;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 800;
  transition: transform 0.2s;
}

.contact-button:hover {
  transform: translateY(-3px);
}

.contact-caution,
.social-note {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.8);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 35px;
}

.social-links a {
  padding-bottom: 3px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  font-size: 13px;
  font-weight: 800;
}

.social-links span {
  margin-left: 5px;
}


/* =========================
   COMPANY
========================= */

.company {
  background: white;
}

.company h2 {
  margin-top: 20px;
}

.company-table {
  margin-top: 35px;
  border-top: 1px solid var(--line);
}

.company-row {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 20px;
  padding: 19px 15px;
  border-bottom: 1px solid var(--line);
  font-size: 12px;
}

.company-row span {
  color: var(--muted);
}

.company-row strong {
  font-weight: 600;
}


/* =========================
   FOOTER
========================= */

.footer {
  padding: 35px 7% 25px;
  background: #242b33;
  color: white;
}

.footer-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-logo {
  font-size: 25px;
}

.footer-main p {
  color: #d5d0cb;
  font-size: 11px;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  margin-top: 30px;
  padding: 22px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.footer-links a:hover {
  color: #ffad7d;
}

.copyright {
  margin: 20px 0 0;
  color: #aaa9a7;
  font-size: 10px;
}


/* =========================
   TABLET
========================= */

@media (max-width: 1000px) {
  .header {
    padding: 0 5%;
  }

  .nav {
    gap: 13px;
    font-size: 9px;
  }

  .section,
  .vision,
  .contact {
    padding-left: 6%;
    padding-right: 6%;
  }

  .service-main {
    padding: 30px;
  }
}


/* =========================
   MOBILE
========================= */

@media (max-width: 700px) {
  html {
    scroll-padding-top: 68px;
  }

  .header {
    height: 68px;
    padding: 0 6%;
  }

  .logo {
    font-size: 25px;
  }

  .menu-toggle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    width: 42px;
    height: 42px;
    padding: 8px;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .menu-toggle span {
    width: 24px;
    height: 2px;
    background: var(--ink);
    transition: transform 0.2s;
  }

  .menu-toggle[aria-expanded="true"] span:first-child {
    transform: translateY(4px) rotate(45deg);
  }

  .menu-toggle[aria-expanded="true"] span:last-child {
    transform: translateY(-4px) rotate(-45deg);
  }

  .nav {
    position: absolute;
    top: 68px;
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 12px 7% 22px;
    background: white;
    border-bottom: 1px solid var(--line);
  }

  .nav.is-open {
    display: flex;
  }

  .nav a {
    padding: 12px 0;
    font-size: 11px;
  }

  .nav .nav-contact {
    margin-top: 8px;
    padding: 12px;
    text-align: center;
  }

  .hero {
    min-height: 690px;
    padding: 65px 7% 90px;
    background-position: 60% center;
  }

  .hero-overlay {
    background: linear-gradient(
      90deg,
      rgba(22, 39, 57, 0.72),
      rgba(22, 39, 57, 0.24)
    );
  }

  .hero h1 {
    font-size: clamp(48px, 13vw, 65px);
    letter-spacing: -2px;
  }

  .hero-lead {
    font-size: 17px;
  }

  .hero-description {
    font-size: 12px;
  }

  .hero-buttons {
    align-items: flex-start;
    flex-direction: column;
  }

  .hero-bottom {
    padding: 0 6%;
    font-size: 8px;
    gap: 10px;
  }

  .section,
  .vision,
  .contact {
    padding: 70px 7%;
  }

  .about-grid,
  .service-main,
  .vision-inner,
  .team-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .about-grid {
    margin-top: 30px;
  }

  .about-heading h2,
  .section-heading h2,
  .achievements h2,
  .team h2,
  .company h2 {
    font-size: 30px;
  }

  .about-message {
    margin-top: 35px;
    padding: 25px;
  }

  .service-main {
    padding: 25px 20px;
  }

  .service-main h3 {
    font-size: 26px;
  }

  .feature-grid,
  .achievement-grid {
    grid-template-columns: 1fr;
    gap: 13px;
  }

  .feature-card {
    padding: 23px;
  }

  .achievement-card p {
    min-height: auto;
  }

  .vision {
    padding-top: 75px;
    padding-bottom: 75px;
  }

  .vision-copy h2 {
    font-size: 30px;
  }

  .vision-list {
    padding: 18px;
  }

  .team-message {
    margin-top: 30px;
    padding: 25px 20px;
  }

  .contact h2 {
    font-size: 30px;
  }

  .company-row {
    grid-template-columns: 1fr;
    gap: 4px;
    padding: 15px 5px;
  }

  .footer {
    padding: 30px 7% 22px;
  }

  .footer-main {
    align-items: flex-start;
    flex-direction: column;
    gap: 5px;
  }

  .footer-links {
    gap: 15px;
  }
}


/* =========================
   REDUCED MOTION
========================= */

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    transition-duration: 0.01ms !important;
  }
}
