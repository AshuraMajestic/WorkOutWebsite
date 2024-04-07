document.getElementById('generate-plan').addEventListener('click', function () {
  var calories = document.getElementById('calories').value;
  var gender = document.getElementById('gender').value;
  var age = document.getElementById('age').value;

  var mealPlan = generateMealPlan(calories, gender, age);

  document.getElementById('meal-plan').innerText = mealPlan;
});

function generateMealPlan(calories, gender, age) {
  var plan = "Your meal plan for today:\n";
  if (age == 'kid' && calories >= 1000 && calories <= 2200) {


    plan += "- Breakfast: \nHalf a cup of cooked oatmeal with mashed bananas or berries.\nA small glass of whole milk or an appropriate dairy alternative.\n";
    plan += "- Lunch: \nWhole grain bread with a protein source and vegetable fillings.\nA side of raw vegetables.\nA small portion of fruit.\nWater or milk.\n";
    plan += "- Dinner: \nBaked or grilled fish/chicken/tofu.\nSteamed or roasted vegetables (e.g., broccoli, carrots, or sweet potatoes).\nA small portion of cooked whole grains (e.g., brown rice or quinoa).\nWater or milk.\n";
  }
  else if (age == 'teen' && calories >= 1800 && calories <= 3200) {


    plan += "- Breakfast: \nA bowl of whole grain cereal with low-fat milk or a dairy alternative.\nSliced fruits (e.g., banana or berries).\nA boiled egg or a serving of Greek yogurt.\nWater or a glass of 100% fruit juice (without added sugar).\n";
    plan += "- Lunch: \nWhole grain crackers with a small portion of cheese.\nBaby carrots or cucumber slices with a portion of hummus.\nWater or herbal tea.\n";
    plan += "- Dinner: \nGrilled or baked lean protein.\nSteamed or roasted vegetables.\nA small serving of cooked whole grains \nWater or a glass of milk.\n";
  }
  else if (age == 'adult' && calories >= 1800 && calories <= 3800) {


    plan += "- Breakfast: \nScrambled eggs or tofu scramble with mixed vegetable\nA side of fresh fruit\nA cup of green tea or black coffee.\n";
    plan += "- Lunch: \nGreek yogurt or a dairy-free alternative.\nA small portion of granola or a homemade trail mix\nWater or herbal tea.\n";
    plan += "- Dinner: \nGrilled salmon or roasted tempeh.\nSautéed or steamed vegetables.\nA mixed green salad with avocado, cherry tomatoes, and a lemon-olive oil dressing.\nWater or herbal tea.\n";
  }
  else if (age == 'senior' && calories >= 1200 && calories <= 2400) {


    plan += "- Breakfast: \nA bowl of oatmeal made with low-fat milk\nSliced fruits such as berries or a small banana.\nA tablespoon of nuts or seeds for added crunch and nutrition.\nA cup of herbal tea or decaffeinated coffee.\n";
    plan += "- Lunch: \nA small handful of unsalted nuts or trail mix.\nSliced apples or celery sticks with peanut butter.\nWater or herbal tea.\n";
    plan += "- Dinner: \nBaked or grilled fish (salmon, tilapia, or cod)\nMashed sweet potatoes or roasted butternut squash.\nSteamed or sautéed leafy greens such as spinach or kale.\nA side of legumes (e.g., lentils or chickpeas).\nWater or herbal tea\n";
  }
  else {
    plan += "\n Looks like you have entered a imaginary number. Please refrain yourself from showignsuch type of behvaiour\n";

  }

  return plan;
}