// Open links to other sites in a new tab. Re-runs after each instant navigation.
document$.subscribe(function () {
  document.querySelectorAll("a[href^='http']").forEach(function (link) {
    if (link.hostname === location.hostname) return
    link.target = "_blank"
    link.rel = "noopener"
    if (link.closest(".md-content") && !link.querySelector("img, svg")) {
      link.classList.add("external-link")
    }
  })
})
