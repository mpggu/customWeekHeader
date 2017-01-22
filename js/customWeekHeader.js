jQuery(function($) {
  var custom_week = $('.custom_week a span');

  if (!custom_week.length) {
    return console.warn('Die custom_week Klasse wurde nicht gefunden.');
  }

  /*
   * Taken and slightly abstracted from from http://techblog.procurios.nl/k/news/view/33796/14863/calculate-iso-8601-week-and-year-in-javascript.html
   */
  function getWeek() {
    var date = new Date();

    var nDay = (date.getDay() + 6) % 7;
    date.setDate(date.getDate() - nDay + 3);

    var n1stThursday = date.valueOf();
    date.setMonth(0, 1);

    if (date.getDay() !== 4) {
      date.setMonth(0, 1 + ((4 - date.getDay()) + 7) % 7);
    }

    return 1 + Math.ceil((n1stThursday - date) / 604800000);
  }

  custom_week[0].innerHTML = getWeek() & 1 ? 'Woche-A' : 'Woche-B';
});