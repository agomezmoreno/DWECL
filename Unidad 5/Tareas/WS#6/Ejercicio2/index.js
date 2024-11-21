window.onload = () => {
    // Load the Visualization API and the corechart package.
    google.charts.load('current', { packages: ['corechart'] });

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawCharts);

    // Variables para guardar el gráfico, los datos y el estado actual
    let barChart;
    let data;
    let currentDataSet = 0;

    // Function to draw the chart
    function drawCharts() {
      // Initial Data for the charts
      data = new google.visualization.DataTable();
      data.addColumn('string', 'Partido');
      data.addColumn('number', 'Escaños');
      data.addRows(getDataSet(0));

      // Options for the Bar Chart
      const barChartOptions = {
        title: 'Representación en el Congreso (Gráfico de Barras)',
        width: 600,
        height: 400,
        legend: { position: 'none' },
        animation: {
          duration: 1000,
          easing: 'out'
        }
      };

      // Draw the Bar Chart
      barChart = new google.visualization.BarChart(
        document.getElementById('bar_chart_div')
      );
      barChart.draw(data, barChartOptions);

      // Update the data every 10 seconds
      setInterval(updateChartData, 10000);
    }

    // Function to update the chart data
    function updateChartData() {
      // Toggle between data sets
      currentDataSet = (currentDataSet + 1) % 2;

      // Update the data
      data = new google.visualization.DataTable();
      data.addColumn('string', 'Partido');
      data.addColumn('number', 'Escaños');
      data.addRows(getDataSet(currentDataSet));

      const barChartOptions = {
        title: 'Representación en el Congreso (Actualización)',
        width: 600,
        height: 400,
        legend: { position: 'none' },
        animation: {
          duration: 1000,
          easing: 'inAndOut'
        }
      };

      // Redraw the chart with new data
      barChart.draw(data, barChartOptions);
    }

    // Function to return different data sets
    function getDataSet(setIndex) {
      const dataSets = [
        [
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
        ],
        [
          ['PP', 130],
          ['PSOE', 125],
          ['Vox', 40],
          ['Sumar', 30],
          ['ERC', 10],
          ['JUNTS', 9],
          ['EH Bildu', 8],
          ['EAJ-PNV', 6],
          ['BNG', 2],
          ['CCs', 1],
          ['UPN', 2]
        ]
      ];
      return dataSets[setIndex];
    }
  };
