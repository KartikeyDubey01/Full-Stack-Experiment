import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());

const seats = new Map();
for (let i = 1; i <= 10; i++) {
  seats.set(String(i), { state: "available" });
}

const LOCK_DURATION_MS = 60 * 1000; 

function clearLock(seat) {
  if (seat.lockTimeoutId) {
    clearTimeout(seat.lockTimeoutId);
    seat.lockTimeoutId = undefined;
  }
  delete seat.lockId;
  delete seat.lockedAt;
  seat.state = "available";
}

app.get("/seats", (req, res) => {
  const result = {};
  for (const [id, seat] of seats.entries()) {
    result[id] = { state: seat.state };
  }
  res.json(result);
});

app.post("/lock/:id", (req, res) => {
  const id = String(req.params.id);
  const seat = seats.get(id);

  if (!seat) {
    return res.status(404).json({ message: `Seat ${id} does not exist.` });
  }

  if (seat.state === "booked") {
    return res.status(400).json({ message: `Seat ${id} is already booked.` });
  }

  if (seat.state === "locked") {
    return res.status(400).json({ message: `Seat ${id} is already locked.` });
  }

  seat.state = "locked";
  seat.lockId = uuidv4();
  seat.lockedAt = Date.now();

  seat.lockTimeoutId = setTimeout(() => {
    if (seat.state === "locked") {
      clearLock(seat);
      console.log(`Auto-unlocked seat ${id} after timeout.`);
    }
  }, LOCK_DURATION_MS);

  return res.status(200).json({
    message: `Seat ${id} locked successfully. Confirm within 1 minute.`,
  });
});

app.post("/confirm/:id", (req, res) => {
  const id = String(req.params.id);
  const seat = seats.get(id);

  if (!seat) {
    return res.status(404).json({ message: `Seat ${id} does not exist.` });
  }

  if (seat.state !== "locked") {
    return res
      .status(400)
      .json({ message: "Seat is not locked and cannot be booked." });
  }

  if (seat.lockTimeoutId) {
    clearTimeout(seat.lockTimeoutId);
    seat.lockTimeoutId = undefined;
  }
  seat.state = "booked";
  delete seat.lockId;
  delete seat.lockedAt;

  return res.status(200).json({ message: `Seat ${id} booked successfully!` });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Seat-locking server listening on http://localhost:${PORT}`);
});
