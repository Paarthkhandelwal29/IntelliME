// script.js

// Function to generate random data for charts
function generateData() {
  return Array.from({ length: 12 }, () => Math.floor(Math.random() * 100));
}

// Function to create and update Chart.js instances
// Function to create and update Chart.js instances
function createChart(id, labels, data, type, noLine = false) {
  var ctx = document.getElementById(id).getContext('2d');

  // Create gradient
  var gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(45, 182, 132, 0.98)');   // Start color
  gradient.addColorStop(1, 'rgba(0, 212, 255, 1)');   // End color

  var borderGradient = ctx.createLinearGradient(0, 0, 0, 400);
  borderGradient.addColorStop(0, 'rgba(45, 182, 132, 0.98)');   // Start color
  borderGradient.addColorStop(1, 'rgba(0, 212, 255, 1)');   // End color

  var chart = noLine ? new Chart(ctx, {
      type: type,
      data: {
          labels: labels,
          datasets: [{
              label: 'Data',
              data: data,
              lineTension: 0.4,
              backgroundColor: gradient, // Use the gradient for background color
              borderColor: borderGradient, // Use the gradient for border color
              borderWidth: 3, // Adjust the line width here
              pointRadius: 0, // Remove the points
              pointHoverRadius: 0 // Remove the hover points
          }]
      },
      options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            }
          },
          maintainAspectRatio: false,
          scales: {
              y: {
                  grid: {
                     display: false
                  },
                  ticks: {
                    display: false
                  }
              },
              x: {
                  grid: {
                     display: false
                  },
                  ticks: {
                    display: false
                  }
              },
              yAxes: [{
                  gridLines: {
                      lineWidth: 0,
                      color: 'rgba(0, 0, 0, 0.05)',
                      display: false
                  },
              }],
              xAxes: [{
                  gridLines: {
                      lineWidth: 0,
                      color: 'rgba(0, 0, 0, 0.05)',
                      display: false
                  }
              }]
          },
          elements: {
            line: {
                borderColor: 'rgba(0, 212, 255, 1)', // Border color of the line
                borderWidth: 3, // Adjust the line width here
                shadowColor: gradient, // Shadow color
                shadowBlur: 20, // Shadow blur radius
                shadowOffsetX: 1, // Shadow offset X
                shadowOffsetY: 0 // Shadow offset Y
            }
        }
      }
  }) : new Chart(ctx, {
    type: type,
    data: {
        labels: labels,
        datasets: [{
            label: 'Data',
            data: data,
            lineTension: 0.4,
            backgroundColor: gradient, // Use the gradient for background color
            borderColor: borderGradient, // Use the gradient for border color
            borderWidth: 3, // Adjust the line width here
            pointRadius: 0, // Remove the points
            pointHoverRadius: 0 // Remove the hover points
        }]
    },
    options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          }
        },
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                gridLines: {
                    lineWidth: 0,
                    color: 'rgba(0, 0, 0, 0.05)',
                    display: false
                },
            }],
            xAxes: [{
                gridLines: {
                    lineWidth: 0,
                    color: 'rgba(0, 0, 0, 0.05)',
                    display: false
                }
            }]
        },
        elements: {
          line: {
              borderColor: 'rgba(0, 212, 255, 1)', // Border color of the line
              borderWidth: 3, // Adjust the line width here
              shadowColor: gradient, // Shadow color
              shadowBlur: 20, // Shadow blur radius
              shadowOffsetX: 1, // Shadow offset X
              shadowOffsetY: 0 // Shadow offset Y
          }
      }
    }
})
}



// Fetch and update data for each chart
window.onload = function () {
  var labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var revenueData = generateData();
  var ordersData = generateData();
  var visitorsData = generateData();
  var salesData = generateData();
  var returnsData = generateData();

  createChart('revenue-chart', labels, revenueData, 'line', true);
  createChart('orders-chart', labels, ordersData, 'line', true);
  createChart('visitors-chart', labels, visitorsData, 'line', true);
  createChart('sales-chart', labels, salesData, 'line');
  createChart('returns-chart', labels, returnsData, 'bar');
};
