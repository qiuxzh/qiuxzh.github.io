(function () {
  function getNav() {
    return document.querySelector(".column-nav");
  }

  function getMask() {
    var mask = document.getElementById("column-nav-mask");
    if (!mask) {
      mask = document.createElement("div");
      mask.id = "column-nav-mask";
      document.body.appendChild(mask);
    }
    return mask;
  }

  function close() {
    var nav = getNav();
    if (nav) nav.classList.remove("open");
    var mask = document.getElementById("column-nav-mask");
    if (mask) mask.classList.remove("show");
  }

  function toggle() {
    var nav = getNav();
    if (!nav) return;
    if (nav.classList.contains("open")) {
      close();
      return;
    }
    getMask().classList.add("show");
    nav.classList.add("open");
  }

  document.addEventListener("click", function (event) {
    var target = event.target;
    if (!target || !target.closest) return;

    if (target.closest("#mobile-column-button")) {
      event.preventDefault();
      toggle();
      return;
    }

    if (target.closest("#column-nav-mask")) {
      close();
      return;
    }

    if (target.closest(".column-nav .column-link")) {
      close();
    }
  });

  document.addEventListener("pjax:complete", close);
})();
