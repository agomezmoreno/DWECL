window.onload = () => {
    google.charts.load('current', {'packages':['geochart'],});
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['France', 100.0],
          ['Spain', 85.2],
          ['United States', 65.5],
          ['Italy', 57.2],
          ['Turkey', 55.2],
          ['Mexico', 42.2],
          ['United Kingdom', 37.2],
          ['Germany', 34.8],
          ['Greece', 32.7],
          ['Austria', 30.9]
        ]);

        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }
}