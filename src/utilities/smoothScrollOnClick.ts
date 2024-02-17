const smoothScrollOnClick = (event: React.MouseEvent) => {
  event.preventDefault();

  const href = event.currentTarget.getAttribute("href");

  if (href) {
    const section = document.querySelector(href);
    section?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

export default smoothScrollOnClick;
