const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const workoutSchema = new Schema ({
    
        day: {
            type:Date,
            default: ()=> new Date()
        },
        exercises: [
            {
              type: {
                type: String
              },
              name: {
                type: String
              },
              duration: {
                type: Number,
                default: 0
              },
              weight: {
                type: Number
              },
              reps: {
                type: Number
              }, 
              sets: {
                type: Number
              },
            }
          ], 
       

})
workoutSchema.virtual("totalDuration").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });

module.exports = mongoose.model("workouts",workoutSchema)