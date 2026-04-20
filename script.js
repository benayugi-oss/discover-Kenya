function changeWelcomeText() {
  const welcomeText = document.getElementById("welcome-text");

  if (welcomeText) {
    welcomeText.textContent = "Karibu Kenya! Explore the beauty, culture, and adventure.";
  }
}

function toggleFacts() {
  const facts = document.getElementById("fun-facts");

  if (facts) {
    facts.classList.toggle("hidden");
  }
}

function respondToPlace() {
  const input = document.getElementById("place-input");
  const response = document.getElementById("place-response");

  if (!input || !response) return;

  const place = input.value.trim().toLowerCase();

  if (place === "maasai mara") {
    response.textContent = "Great choice! Maasai Mara is famous for wildlife and safaris.";
  } else if (place === "nairobi") {
    response.textContent = "Nice pick! Nairobi is a lively city full of culture and history.";
  } else if (place === "mombasa") {
    response.textContent = "Awesome! Mombasa is known for its beaches and coastal culture.";
  } else if (place === "") {
    response.textContent = "Please type a place first.";
  } else {
    response.textContent = "That sounds interesting! Kenya has many amazing places to explore.";
  }
}
