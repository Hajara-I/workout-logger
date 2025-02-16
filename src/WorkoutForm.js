import { useState } from "react";

function WorkoutForm({ onAddWorkout }) {
  const [formData, setFormData] = useState({
    exercise: "",
    sets: "",
    reps: "",
    weight: "",
    date: "",
    time: "",
    speed: "",
    incline: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddWorkout(formData);

    setFormData({
      exercise: "",
      sets: "",
      reps: "",
      weight: "",
      date: "",
      time: "",
      speed: "",
      incline: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="workout-form">
      <label htmlFor="exercise">Exercise:</label>
      <input
        type="text"
        id="exercise"
        name="exercise"
        value={formData.exercise}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="sets">Sets:</label>
      <input
        type="number"
        id="sets"
        name="sets"
        value={formData.sets}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="reps">Reps:</label>
      <input
        type="number"
        id="reps"
        name="reps"
        value={formData.reps}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="weight">Weight (kg):</label>
      <input
        type="number"
        id="weight"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="time">Time:</label>
      <input
        type="text"
        id="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="speed">Speed:</label>
      <input
        type="text"
        id="speed"
        name="speed"
        value={formData.speed}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="incline">Incline:</label>
      <input
        type="text"
        id="incline"
        name="incline"
        value={formData.incline}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Add Workout</button>
    </form>
  );
}

export default WorkoutForm;
