document.addEventListener("DOMContentLoaded", function () {
  const contactModal = document.querySelector(".contact-modal");
  const openContactLinks = document.querySelectorAll(".open-contact");
  const closeContact = document.querySelector(".close");

  function openModal() {
    contactModal.style.display = "block";
  }

  function closeModal() {
    contactModal.style.display = "none";
  }

  openContactLinks.forEach(function (link) {
    link.addEventListener("click", openModal);
  });

  closeContact.addEventListener("click", closeModal);

  window.addEventListener("click", function (event) {
    if (event.target === contactModal) {
      closeModal();
    }
  });
});

