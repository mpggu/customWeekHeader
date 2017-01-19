(function() {
  var custom_week = jQuery('.custom_week a span');

  if (!custom_week) {
    return console.warn('Die custom_week Klasse wurde nicht gefunden.');
  }

  /*
   * Taken and slightly abstracted from from http://javascript.about.com/library/blweekyear.htm
   */
  function getWeek() {
    var now = new Date();
    var firstOfJan = new Date(now.getFullYear(), 0, 1);
    return Math.ceil( (((now - firstOfJan) / 86400000) + firstOfJan.getDay() + 1) / 7);
  }

  custom_week[0].innerHTML = getWeek() & 1 ? 'Woche-A' : 'Woche-B';
})();
