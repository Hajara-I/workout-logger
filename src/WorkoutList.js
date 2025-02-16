import "./index.css";

function WorkoutList({ workouts }) {
  // Receive workouts as a prop
  return (
    <div className="workout-list">
      <h2>Workout Log</h2>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            {workout.exercise} - 
            {workout.exercise.toLowerCase().includes("treadmill") ? ( // Check if it's a treadmill workout
              <>
                 Time: {workout.time} mins @ Speed:{workout.speed} and Incline:{workout.incline} on {workout.date}
              </>
            ) : (
              <>
                {workout.sets} sets x {workout.reps} reps @ {workout.weight} kg
                on {workout.date}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutList;
