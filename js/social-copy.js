(function () {
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var input = document.createElement("textarea");
      input.value = text;
      input.style.position = "fixed";
      input.style.top = "-9999px";
      document.body.appendChild(input);
      input.select();
      var ok = false;
      try {
        ok = document.execCommand("copy");
      } catch (err) {
        ok = false;
      }
      input.remove();
      ok ? resolve() : reject();
    });
  }

  function showTip(message) {
    if (typeof anzhiyu !== "undefined" && typeof anzhiyu.snackbarShow === "function") {
      anzhiyu.snackbarShow(message, false, 2000);
    }
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest && event.target.closest("a[data-copy]");
    if (!link) return;
    event.preventDefault();
    var text = link.getAttribute("data-copy");
    copyText(text).then(
      function () {
        showTip("已复制：" + text);
      },
      function () {
        showTip("复制失败，请手动复制：" + text);
      }
    );
  });
})();
