/* Jeffery Sealing — small, progressive enhancements. The page works without this file. */
(function () {
  'use strict';

  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.hidden = false;
    var setOpen = function (open, returnFocus) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
      if (!open && returnFocus) toggle.focus();
    };
    toggle.addEventListener('click', function () { setOpen(!nav.classList.contains('is-open')); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { e.preventDefault(); setOpen(false, true); }
    });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('is-open') && !nav.contains(e.target) && e.target !== toggle) setOpen(false);
    });
  }

  // Records index filter
  var filterBar = document.querySelector('.filters');
  var cards = Array.prototype.slice.call(document.querySelectorAll('#index-cards .card'));
  var count = document.getElementById('index-count');
  function applyFilter(name) {
    var shown = 0;
    cards.forEach(function (card) {
      var match = name === 'all' || card.dataset.group === name;
      card.hidden = !match;
      if (match) shown++;
    });
    if (filterBar) {
      filterBar.querySelectorAll('button').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.dataset.filter === name));
      });
    }
    if (count) count.textContent = 'Showing ' + shown + ' of ' + cards.length + ' books';
  }
  if (filterBar && cards.length) {
    filterBar.hidden = false;
    filterBar.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-filter]');
      if (b) applyFilter(b.dataset.filter);
    });
    // Links elsewhere on the page can open the index already filtered.
    document.querySelectorAll('a[data-filter]').forEach(function (a) {
      a.addEventListener('click', function () { applyFilter(a.dataset.filter); });
    });
  }

  // Reveal-on-arrival for the red string and the declassified Pigeon file.
  // Fires as soon as any part of the element reaches the lower fifth of the screen,
  // so tall elements and short screens can't leave the redaction bars stuck on.
  var targets = document.querySelectorAll('.connected, .dossier');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('in-view'); io.unobserve(entry.target); }
      });
    }, { threshold: 0, rootMargin: '0px 0px -20% 0px' });
    targets.forEach(function (t) { io.observe(t); });
  } else {
    targets.forEach(function (t) { t.classList.add('in-view'); });
  }

  // The trailer plays on this page. The external YouTube link remains a fallback.
  var trailerButton = document.querySelector('[data-play-trailer]');
  var trailerFrame = document.getElementById('jeffery-trailer-player');
  if (trailerButton && trailerFrame) {
    trailerButton.addEventListener('click', function () {
      // A direct user gesture permits autoplay in browsers that support it.
      // Visitors can also press Play in YouTube's native embedded controls.
      if (trailerFrame.src.indexOf('autoplay=1') === -1) {
        trailerFrame.loading = 'eager';
        trailerFrame.src += '&autoplay=1';
      }
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
