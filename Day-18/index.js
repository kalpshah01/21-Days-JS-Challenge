function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}

new Chart(document.getElementById("chart"), {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [{ label: "Sales", data: [100, 200, 150, 300, 250] }],
  },
});
