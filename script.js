const reportList = document.getElementById("report-list");
const statusFilter = document.getElementById("status-filter");
const reportForm = document.getElementById("new-report-form");
const formStatus = document.getElementById("form-status");

function updateSummary() {
  const cards = [...reportList.querySelectorAll(".report-card")];
  document.getElementById("total-reports").textContent = String(cards.length);
  document.getElementById("in-progress").textContent = String(cards.filter(card => card.dataset.status === "Rescue in Progress").length);
  document.getElementById("rescued-count").textContent = String(cards.filter(card => card.dataset.status === "Rescued").length);
}

function applyFilter() {
  const selected = statusFilter.value;
  reportList.querySelectorAll(".report-card").forEach(card => {
    card.hidden = selected !== "all" && card.dataset.status !== selected;
  });
}

function statusClass(status) {
  if (status === "Rescued") return "status-rescued";
  if (status === "Rescue in Progress") return "status-progress";
  return "status-reported";
}

function bindStatusSelect(select) {
  select.addEventListener("change", () => {
    const card = select.closest(".report-card");
    const status = select.value;
    card.dataset.status = status;
    const badge = card.querySelector(".status");
    badge.textContent = status;
    badge.className = `status ${statusClass(status)}`;
    updateSummary();
    applyFilter();
  });
}

reportList.querySelectorAll(".report-status-select").forEach(bindStatusSelect);
statusFilter.addEventListener("change", applyFilter);

reportForm.addEventListener("submit", event => {
  event.preventDefault();
  const type = document.getElementById("animal-type").value;
  const location = document.getElementById("animal-location").value.trim();
  const condition = document.getElementById("animal-condition").value;
  const description = document.getElementById("animal-description").value.trim();
  if (!type || !location || !condition) {
    formStatus.textContent = "Please complete the animal type, location, and observed condition.";
    return;
  }

  // Use textContent for user-entered values to avoid treating them as HTML.
  const card = document.createElement("article");
  card.className = "report-card";
  card.dataset.id = `demo-${Date.now()}`;
  card.dataset.status = "Reported";

  const thumb = document.createElement("div");
  thumb.className = `animal-thumb ${type === "Cat" ? "cat-thumb" : type === "Dog" ? "dog-thumb" : "puppy-thumb"}`;
  thumb.setAttribute("aria-hidden", "true");
  thumb.textContent = type === "Cat" ? "🐈" : type === "Dog" ? "🐕" : "🐾";

  const main = document.createElement("div");
  main.className = "report-main";
  const titleRow = document.createElement("div");
  titleRow.className = "report-title-row";
  const title = document.createElement("h3");
  title.textContent = `${type} reported near ${location}`;
  const badge = document.createElement("span");
  badge.className = "status status-reported";
  badge.textContent = "Reported";
  titleRow.append(title, badge);

  const place = document.createElement("p");
  place.className = "report-location";
  place.textContent = `⌖ ${location}`;
  const desc = document.createElement("p");
  desc.className = "report-description";
  desc.textContent = `${condition}. ${description || "No additional details provided."}`;
  const meta = document.createElement("div");
  meta.className = "report-meta";
  const typeTag = document.createElement("span");
  typeTag.textContent = type;
  const sampleTag = document.createElement("span");
  sampleTag.textContent = "Local demo report";
  meta.append(typeTag, sampleTag);

  const statusLabel = document.createElement("label");
  statusLabel.className = "status-update";
  statusLabel.append(document.createTextNode("Update demo status"));
  const statusSelect = document.createElement("select");
  statusSelect.className = "report-status-select";
  statusSelect.setAttribute("aria-label", `Update status for ${type} reported near ${location}`);
  ["Reported", "Rescue in Progress", "Rescued"].forEach(value => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    statusSelect.append(option);
  });
  statusLabel.append(statusSelect);
  main.append(titleRow, place, desc, meta, statusLabel);
  card.append(thumb, main);
  reportList.prepend(card);
  bindStatusSelect(statusSelect);
  reportForm.reset();
  statusFilter.value = "all";
  applyFilter();
  updateSummary();
  formStatus.textContent = "Demo report added to this page only. No rescue service has been contacted.";
});

updateSummary();
applyFilter();
