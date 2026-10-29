export function scrollToSection(targetId: string): boolean {
  const element = document.getElementById(targetId);
  if (!element) return false;

  const nav = document.querySelector(".site-nav");
  const navHeight = nav instanceof HTMLElement ? nav.offsetHeight : 64;
  const top = element.getBoundingClientRect().top + window.scrollY - navHeight - 16;

  window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  return true;
}
