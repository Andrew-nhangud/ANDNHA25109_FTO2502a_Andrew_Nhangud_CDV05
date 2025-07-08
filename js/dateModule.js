// js/dateModule.js
export function updateDate() {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Africa/Johannesburg",
  };
  const date = new Date().toLocaleDateString("en-US", options);
  document.getElementById("current-date").innerText = date;
}
