// Services Data (Knowledge Base)
const services = [
  {
    id: 1,
    title: "Doctor Consultation",
    price: 500,
    keywords: ["fever", "pain", "doctor", "medicine", "sick"],
    doctors: ["Dr. Sharma", "Dr. Mehta"],
    slots: ["10 AM", "2 PM", "6 PM"]
  },
  {
    id: 2,
    title: "Home Nursing",
    price: 800,
    keywords: ["elderly", "care", "home", "nurse", "bedridden"],
    nurses: ["Nurse Anjali", "Nurse Ravi"],
    slots: ["Morning", "Evening"]
  },
  {
    id: 3,
    title: "Yoga for Seniors",
    price: 300,
    keywords: ["yoga", "fitness", "exercise", "stress"],
    trainers: ["Trainer Neha", "Trainer Arjun"],
    slots: ["Mon-Wed-Fri 7AM", "Tue-Thu 6PM"]
  }
];

let selectedService = null;

// Load Services on Screen
function loadServices() {
  const container = document.getElementById("services");
  container.innerHTML = "";

  services.forEach(service => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${service.title}</h3>
      <p>Price: ₹${service.price}</p>
      <button onclick="bookService(${service.id})">Book</button>
    `;

    container.appendChild(div);
  });
}

// Booking Selection
function bookService(id) {
  selectedService = services.find(s => s.id === id);

  document.getElementById("bookingForm").style.display = "block";
  document.getElementById("serviceTitle").innerText =
    "Booking: " + selectedService.title;
}

// Confirm Booking
function confirmBooking() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  if (!name || !phone) {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("booking", JSON.stringify({
    name,
    phone,
    service: selectedService.title
  }));

  document.getElementById("message").innerText =
    "Booking Confirmed for " + selectedService.title;
}

//  AI Recommendation (RAG-style)
function handleAI() {
  const query = document.getElementById("userQuery").value.toLowerCase();

  let bestService = null;

  //  Retrieval logic
  services.forEach(service => {
    service.keywords.forEach(keyword => {
      if (query.includes(keyword)) {
        bestService = service;
      }
    });
  });

  //  Generate Response
  if (bestService) {
    let response = `<b>Recommended Service:</b> ${bestService.title}<br><br>`;

    if (bestService.doctors) {
      response += `👨‍⚕️ <b>Available Doctors:</b><br>${bestService.doctors.join(", ")}<br><br>`;
    }

    if (bestService.nurses) {
      response += `👩‍⚕️ <b>Available Nurses:</b><br>${bestService.nurses.join(", ")}<br><br>`;
    }

    if (bestService.trainers) {
      response += `🧘 <b>Trainers:</b><br>${bestService.trainers.join(", ")}<br><br>`;
    }

    response += `⏰ <b>Available Slots:</b><br>${bestService.slots.join(", ")}`;

    document.getElementById("aiResult").innerHTML = response;

    // Auto open booking
    bookService(bestService.id);

  } else {
    document.getElementById("aiResult").innerHTML =
      " No matching service found. Try different keywords.";
  }
}

// 🚀 Load services when page opens
loadServices();
