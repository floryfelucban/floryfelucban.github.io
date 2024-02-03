document.addEventListener("DOMContentLoaded", function () {
  const projModals = document.querySelectorAll(".proj-modal");
  const openProjLinks = document.querySelectorAll(".open-proj");
  const closeProjButtons = document.querySelectorAll(".proj-close");

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
  }

  openProjLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const modalId = link.getAttribute("data-modal-id");
      openModal(modalId);
    });
  });

  closeProjButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const modalId = button.closest(".proj-modal").getAttribute("id");
      closeModal(modalId);
    });
  });

  window.addEventListener("click", function (event) {
    projModals.forEach(function (modal) {
      if (event.target === modal) {
        const modalId = modal.getAttribute("id");
        closeModal(modalId);
      }
    });
  });
});