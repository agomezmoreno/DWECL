window.onload = () => {
      // Load the Visualization API and the corechart package.
      google.charts.load('current', { packages: ['corechart'] });

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawCharts);

      // Function to draw both charts
      function drawCharts() {
        // Data for the charts
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Partido');
        data.addColumn('number', 'Escaños');
        data.addRows([
          ['PP', 137],
          ['PSOE', 121],
          ['Vox', 33],
          ['Sumar', 31],
          ['ERC', 7],
          ['JUNTS', 7],
          ['EH Bildu', 8],
          ['EAJ-PNV', 5],
          ['BNG', 1],
          ['CCs', 1],
          ['UPN', 1]
        ]);

        // Options for the Bar Chart
        var barChartOptions = {
          title: 'Representación en el Congreso (Gráfico de Barras)',
          width: 600,
          height: 400,
          legend: { position: 'none' },
        };

        // Draw the Bar Chart
        var barChart = new google.visualization.BarChart(
          document.getElementById('bar_chart_div')
        );
        barChart.draw(data, barChartOptions);

        // Options for the Pie Chart
        var pieChartOptions = {
          title: 'Representación en el Congreso (Gráfico de Sectores)',
          width: 600,
          height: 400,
        };

        // Draw the Pie Chart
        var pieChart = new google.visualization.PieChart(
          document.getElementById('pie_chart_div')
        );
        pieChart.draw(data, pieChartOptions);
      }
}