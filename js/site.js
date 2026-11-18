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

  // Records index: series filter + horizontal shelf.
  // Without this script the index stays a plain wrapped grid of all 25 books.
  var filterBar = document.querySelector('.filters');
  var track = document.getElementById('index-cards');
  var cards = Array.prototype.slice.call(document.querySelectorAll('#index-cards .card'));
  var count = document.getElementById('index-count');
  var shelfNav = document.querySelector('.shelf-nav');
  var rail = document.querySelector('.shelf-rail');
  var prevBtn = shelfNav && shelfNav.querySelector('[data-shelf="prev"]');
  var nextBtn = shelfNav && shelfNav.querySelector('[data-shelf="next"]');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function updateShelf() {
    if (!track || !prevBtn) return;
    var max = track.scrollWidth - track.clientWidth;
    var x = Math.abs(track.scrollLeft);
    var atStart = x <= 2, atEnd = x >= max - 2;
    prevBtn.setAttribute('aria-disabled', String(atStart));
    nextBtn.setAttribute('aria-disabled', String(atEnd || max <= 2));
    if (rail) {
      var bar = rail.firstElementChild;
      var visible = max > 2 ? track.clientWidth / track.scrollWidth : 1;
      bar.style.width = (visible * 100) + '%';
      bar.style.transform = 'translateX(' + (max > 2 ? (x / max) * ((1 - visible) / visible) * 100 : 0) + '%)';
      rail.classList.toggle('is-full', max <= 2);
    }
  }
  function pageShelf(dir) {
    // Advance by whole cards: one viewport width, less a card's peek.
    var step = Math.max(track.clientWidth * 0.85, 160);
    track.scrollBy({ left: dir * step, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
  }

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
    if (track) { track.scrollLeft = 0; updateShelf(); }
  }

  if (track && cards.length && shelfNav) {
    document.documentElement.classList.add('has-shelf');
    shelfNav.hidden = false;
    if (rail) rail.hidden = false;
    track.setAttribute('tabindex', '0');
    track.setAttribute('aria-label', 'Books, scroll sideways for more');
    shelfNav.addEventListener('click', function (e) {
      var b = e.target.closest('[data-shelf]');
      if (!b || b.getAttribute('aria-disabled') === 'true') return;
      pageShelf(b.dataset.shelf === 'next' ? 1 : -1);
    });
    track.addEventListener('scroll', updateShelf, { passive: true });
    window.addEventListener('resize', updateShelf);
    // Covers load lazily; widths are reserved, but recheck once they arrive.
    window.addEventListener('load', updateShelf);
    updateShelf();
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
