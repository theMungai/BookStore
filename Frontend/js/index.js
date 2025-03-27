document.addEventListener("DOMContentLoaded", () => {
  // Select dropdown classes
  const profile = document.querySelector(".profile");
  const dropdown = document.querySelector(".profile-dropdown");

  //Toggle dropdown visibility when profile is clicked
  profile.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("show")
  });

  // Hide dropdown when clicking anywhere outside of it
  document.addEventListener("click", (e) => {
    if (!profile.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove("show");
    }
  });
});
