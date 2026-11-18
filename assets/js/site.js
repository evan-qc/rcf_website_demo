(function () {
  // Mobile menu
  var btn = document.querySelector('[data-menu-btn]');
  var nav = document.getElementById('site-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
  }

  // Open / closed status, in the store's own time zone (America/New_York)
  var statusEl = document.querySelector('[data-open-status]');
  var dot = document.querySelector('[data-open-dot]');
  if (statusEl && window.Intl) {
    try {
      // [open hour, close hour] by weekday, 0 = Sunday
      var hours = [null, [8, 16], [8, 16], [8, 16], [8, 16], [8, 16], [8, 12]];
      var names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var fmt = function (h) { return h === 12 ? '12pm' : h > 12 ? (h - 12) + 'pm' : h + 'am'; };
      var parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York', weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false
      }).formatToParts(new Date());
      var get = function (t) { for (var i = 0; i < parts.length; i++) if (parts[i].type === t) return parts[i].value; };
      var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
      var now = (parseInt(get('hour'), 10) % 24) + parseInt(get('minute'), 10) / 60;
      var today = hours[day];
      var text;
      if (today && now >= today[0] && now < today[1]) {
        text = 'Open now · until ' + fmt(today[1]);
        if (dot) dot.classList.add('is-open');
      } else {
        var d = day, label;
        if (today && now < today[0]) { label = 'today'; }
        else {
          do { d = (d + 1) % 7; } while (!hours[d]);
          label = d === (day + 1) % 7 ? 'tomorrow' : names[d];
        }
        text = 'Closed · opens ' + label + ' at ' + fmt(hours[d][0]);
      }
      statusEl.textContent = text;
    } catch (e) { /* keep the static hours text */ }
  }

  // Demo contact form: not connected to anything yet
  var form = document.querySelector('[data-demo-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.classList.add('is-sent');
      var done = form.querySelector('.form__done');
      if (done) { done.setAttribute('tabindex', '-1'); done.focus(); }
    });
  }
})();
