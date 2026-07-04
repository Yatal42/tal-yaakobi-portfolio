export function scrollToSection(targetId: string): boolean {
  const element = document.getElementById(targetId);
  if (!element) return false;

  const nav = document.querySelector(".retro-nav");
  const navHeight = nav instanceof HTMLElement ? nav.offsetHeight : 40;
  const heading = element.querySelector(
    ".contact-block-title, .retro-section-title, h1, h2"
  );
  const target = heading instanceof HTMLElement ? heading : element;
  const top =
    target.getBoundingClientRect().top + window.scrollY - navHeight - 10;

  window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  return true;
}
