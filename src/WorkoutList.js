function WorkoutList({ workouts }) {
  // Receive workouts as a prop
  return (
    <div>
      <h2>Workout Log</h2>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            {workout.exercise} - {workout.sets} sets x {workout.reps} reps @{" "}
            {workout.weight} kg on {workout.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutList;
