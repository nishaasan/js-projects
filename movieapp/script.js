let selectedMovie = '';
let selectedClass = '';
let selectedPrice = 0;
let allowedSeats = 1;
let selectedSeats = [];

const rows = ['A', 'B', 'C'];
const seatGrid = document.getElementById('seatGrid');

rows.forEach(row => {
  for (let i = 1; i <= 4; i++) {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    seat.textContent = row + i;
    seat.onclick = () => toggleSeat(seat);
    seatGrid.appendChild(seat);
  }
});

function bookMovie(movieName, selectId, btn) {
  const selectedOption = document.getElementById(selectId).value;
  const [cls, price] = selectedOption.split("-");

  const seatInput = btn.parentElement.querySelector("#seats");
  allowedSeats = parseInt(seatInput.value);

  selectedMovie = movieName;
  selectedClass = cls.trim();
  selectedPrice = parseInt(price.trim());
  selectedSeats = [];

  clearSeatSelection();
  alert(`You selected ${allowedSeats} seat(s) for "${selectedMovie}" in ${selectedClass} class (₹${selectedPrice} each). Now select your seats.`);
}

function toggleSeat(seat) {
  if (seat.classList.contains('selected')) {
    seat.classList.remove('selected');
    selectedSeats = selectedSeats.filter(s => s !== seat.textContent);
  } else {
    if (selectedSeats.length < allowedSeats) {
      seat.classList.add('selected');
      selectedSeats.push(seat.textContent);
    } else {
      alert(`You can only select ${allowedSeats} seat(s).`);
    }
  }
}

function clearSeatSelection() {
  const allSeats = document.querySelectorAll('.seat');
  allSeats.forEach(seat => seat.classList.remove('selected'));
  selectedSeats = [];
}

function confirmBooking() {
  if (!selectedMovie || selectedSeats.length !== allowedSeats || !selectedClass) {
    alert("Please select movie, class, and exactly the number of seats allowed.");
    return;
  }

  const confirmation = document.getElementById("confirmation");
  const total = selectedPrice * allowedSeats;

  confirmation.innerHTML = `
    <strong>Booking Confirmed!</strong><br>
    Movie: <strong>${selectedMovie}</strong><br>
    Class: <strong>${selectedClass}</strong><br>
    Seats: <strong>${selectedSeats.join(', ')}</strong><br>
    Total Price: <strong>₹${total}</strong>
  `;

  clearSeatSelection();
  selectedMovie = '';
}
