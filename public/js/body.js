document.getElementById('generate-plan').addEventListener('click', function() {
    var gender = document.getElementById('gender').value;
    var age = document.getElementById('age').value;
  
    var mealPlan = generateMealPlan(gender,age);
  
    document.getElementById('meal-plan').innerText = mealPlan;
  });
  
  function generateMealPlan( gender,age) {
    var plan = "BE CONSISTENT EVERYDAY::\n";
    if (gender=='male' && age=='gain') {
      
  
      plan += "- Warm-up: 5-10 minutes of light cardio (e.g., jogging in place, jumping jacks)\n";
      plan += "- Squats: 3 sets of 8-10 repetitions\n";
      plan += "- Push-ups: 3 sets of 8-10 repetitions\n";
      plan += "- Dumbbell Lunges: 3 sets of 8-10 repetitions per leg\n";
      plan += "- Dumbbell Shoulder Press: 3 sets of 8-10 repetitions\n";
      plan += "- Bent-Over Rows: 3 sets of 8-10 repetitions\n";
      plan += "- Bicep Curls: 3 sets of 8-10 repetitions\n";
      plan += "- Tricep Dips: 3 sets of 8-10 repetitions\n";
      plan += "- Plank: 3 sets, holding for 30-60 seconds each\n";
      plan += "\n===============================================================\n";
      plan += "- Remember to adjust the weight and repetitions according to your fitness level. It's essential to focus on proper form and gradually increase the intensity of your workouts over time. Additionally, don't forget to prioritize rest days to allow your muscles to recover and grow.\n";
      
    }
    else if (gender=='female' && age=='gain') {
      
  
      plan += "- Warm-up: 5-10 minutes of light cardio (e.g., jogging in place, jumping jacks)\n";
      plan += "- Bodyweight Squats: 3 sets of 8-10 repetitions\n";
      plan += "- Push-ups: 3 sets of 8-10 repetitions\n";
      plan += "- Lunges: 3 sets of 8-10 repetitions per leg\n";
      plan += "- Dumbbell Shoulder Press: 3 sets of 8-10 repetitions\n";
      plan += "- Dumbbell Rows: 3 sets of 8-10 repetitions\n";
      plan += "- Bicep Curls: 3 sets of 8-10 repetitions\n";
      plan += "- Tricep Dips: 3 sets of 8-10 repetitions\n";
      plan += "- Plank: 3 sets, holding for 30-60 seconds each\n";
      plan += "\n===============================================================\n";
      plan += "- Remember to adjust the weight and repetitions according to your fitness level. It's essential to focus on proper form and gradually increase the intensity of your workouts over time. Additionally, don't forget to prioritize rest days to allow your muscles to recover and grow.\n";
      
    }
    else if (gender=='male' && age=='lose') {
        plan += "- Warm-up: 5-10 minutes of light cardio (e.g., jogging, jumping rope)\n";
        plan += "\n1] Circuit Training:\n";
        plan += "- Squats: 3 sets of 12-15 repetitions \n";
        plan += "- Push-ups: 3 sets of 12-15 repetitions\n";
        plan += "- Walking Lunges: 3 sets of 12-15 repetitions per leg\n";
        plan += "- Dumbbell Shoulder Press: 3 sets of 12-15 repetitions\n";
        plan += "- Bent-Over Rows: 3 sets of 12-15 repetitions\n";
        plan += "- Bicep Curls: 3 sets of 12-15 repetitions\n";
        plan += "- Tricep Dips: 3 sets of 12-15 repetitions\n";
        plan += "- Plank: Hold for 30-60 seconds, repeat 3 times\n";
        plan += "\n2] Cardiovascular Exercise:\n";
        plan += "- 30 minutes of moderate-intensity aerobic exercise (e.g., brisk walking, cycling, swimming)\n";
        plan += "\n\n===========================================================";
        plan += "\n\n- Remember to adjust the weight and repetitions based on your fitness level. Combine this exercise routine with a balanced and nutritious diet to achieve your weight loss goals. Consult with a healthcare professional or certified trainer for personalized guidance and support.";
    }
    else if (gender=='female' && age=='lose') {
        plan += "- Warm-up: 5-10 minutes of light cardio (e.g., jogging, jumping rope)\n";
        plan += "\n1] Circuit Training:\n";
        plan += "- Bodyweight Squats: 3 sets of 12-15 repetitions \n";
        plan += "- Push-ups (modified or standard): 3 sets of 12-15 repetitions\n";
        plan += "- Walking Lunges: 3 sets of 12-15 repetitions per leg\n";
        plan += "- Dumbbell Shoulder Press: 3 sets of 12-15 repetitions\n";
        plan += "- Bent-Over Rows: 3 sets of 12-15 repetitions\n";
        plan += "- Bicep Curls: 3 sets of 12-15 repetitions\n";
        plan += "- Tricep Dips: 3 sets of 12-15 repetitions\n";
        plan += "- Plank: Hold for 30-60 seconds, repeat 3 times\n";
        plan += "\n2] Cardiovascular Exercise:\n";
        plan += "- 30 minutes of moderate-intensity aerobic exercise (e.g., brisk walking, cycling, swimming)\n";
        plan += "\n\n===========================================================";
        plan += "\n\n- Remember to adjust the weight and repetitions based on your fitness level. Combine this exercise routine with a balanced and nutritious diet to achieve your weight loss goals. Consult with a healthcare professional or certified trainer for personalized guidance and support.";
    }
    else{
      plan += "\n Always remeber you have to be consistent.\n";
      
    }
    
    return plan;
  }