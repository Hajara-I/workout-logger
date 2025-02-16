import "./index.css";

function WorkoutList({ workouts, setWorkouts }) {
  const handleDelete = (index) => {
    const confirmed = window.confirm("Are you sure you want to delete this workout?"); // Confirm dialog
    if (confirmed) { // Only delete if the user confirms
      const updatedWorkouts = [...workouts];
      updatedWorkouts.splice(index, 1);
      localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
      setWorkouts(updatedWorkouts);
    }
  };

  return (
    <div className="workout-list">
      <h2>Workout Log</h2>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            {workout.exercise} -
            {workout.exercise.toLowerCase().includes("treadmill") ? ( // Check if it's a treadmill workout
              <>
                Time: {workout.time} mins @ Speed:{workout.speed} and Incline:
                {workout.incline} on {workout.date}
              </>
            ) : (
              <>
                {workout.sets} sets x {workout.reps} reps @ {workout.weight} kg
                on {workout.date}
              </>
            )}
            <button
              className="delete-workout-item"
              onClick={() => handleDelete(index)}
            >
              X {/* Or use a delete icon here */}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutList;
