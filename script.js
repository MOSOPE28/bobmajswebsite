const navLinks = document.querySelectorAll("#navbar a");
const currentPath = window.location.pathname;

navLinks.forEach((link) => {
  // Remove any previous active class
  link.classList.remove("active");

  // If link href matches current page, add active
  if (link.getAttribute("href") === currentPath.split("/").pop()) {
    link.classList.add("active");
  }

  // Add click listener (optional, for mobile menu)
  link.addEventListener("click", function () {
    document.getElementById("navbar").classList.remove("show");
  });
});
