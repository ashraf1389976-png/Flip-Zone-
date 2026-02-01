// Line Chart
new Chart(document.getElementById("lineChart"), {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [{
      label: "Visitors",
      data: [120, 190, 300, 250, 320],
      borderColor: "#7a5cff",
      fill: false
    }]
  }
});

// Bar Chart
new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels: ["Zone A", "Zone B", "Zone C"],
    datasets: [{
      label: "Visitors",
      data: [80, 150, 100],
      backgroundColor: "#ff4fd8"
    }]
  }
});
