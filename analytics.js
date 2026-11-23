/* GoatCounter analytics: page views + link clicks (no cookies).
   Set GC_CODE to your GoatCounter site code (the "xyz" in xyz.goatcounter.com). */
(function () {
  var GC_CODE = 'venanzio';
  if (GC_CODE === 'YOURCODE') return;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://' + GC_CODE + '.goatcounter.com/count');
  document.head.appendChild(s);

  // Count every link click (papers, CV, social/profile icons, external links).
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || !window.goatcounter || !window.goatcounter.count) return;
    var url = new URL(a.href, location.href);
    if (url.origin === location.origin && url.pathname === location.pathname) return; // in-page anchors
    var path = url.origin === location.origin ? decodeURIComponent(url.pathname) : url.href;
    var label = (a.getAttribute('aria-label') || a.title || a.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 120);
    window.goatcounter.count({
      path: 'click: ' + path,
      title: label || path,
      event: true
    });
  });
})();
