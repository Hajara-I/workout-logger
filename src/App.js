import { useState, useEffect } from "react";
import WorkoutForm from "./WorkoutForm";
import WorkoutList from "./WorkoutList";

function App() {
  // const [workouts, setWorkouts] = useState([]);

  const [workouts, setWorkouts] = useState(() => {
    // Use a callback function
    const storedWorkouts = JSON.parse(localStorage.getItem("workouts"));
    return storedWorkouts || []; // Return storedWorkouts or an empty array if null
  });

  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts)); // Save workouts to local storage
  }, [workouts]); // This runs whenever the workouts state changes

  const addWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };

  const clearWorkouts = () => {
    localStorage.removeItem("workouts"); // Remove workouts from local storage
    setWorkouts([]); // Update state to trigger re-render and clear the list
  };

  return (
    <div className="app-container">
      <p>Gym workout logger</p>
      <p>Track workouts easily</p>
      <WorkoutForm onAddWorkout={addWorkout}></WorkoutForm>
      <WorkoutList workouts={workouts}></WorkoutList>
      <button className="clear-data-button" onClick={clearWorkouts}>Clear Workout Data</button> {}
    </div>
  );
}

export default App;
