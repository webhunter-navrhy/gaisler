// Přepínání fotek v galerii položky.
(function () {
  document.querySelectorAll('[data-galerie]').forEach(function (g) {
    var snimky = g.querySelectorAll('.snimek');
    var tlacitka = g.querySelectorAll('.nahled');
    tlacitka.forEach(function (t, i) {
      t.addEventListener('click', function () {
        snimky.forEach(function (s, j) { s.hidden = i !== j; });
        tlacitka.forEach(function (b, j) { b.setAttribute('aria-pressed', i === j ? 'true' : 'false'); });
      });
    });
  });
})();
