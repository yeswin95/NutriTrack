async function fetchNutrition() {
    const query = document.getElementById("food-query").value;
    const resultDiv = document.getElementById("nutrition-result");
  
    const response = await fetch("https://trackapi.nutritionix.com/v2/natural/nutrients", {
      method: "POST",
      headers: {
        "x-app-id": "80501faf",
        "x-app-key": "de2967e5a90a942370948fb27c783872",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query })
    });
  
    const data = await response.json();
    const food = data.foods?.[0];
    if (food) {
      resultDiv.innerHTML = `
        <p><strong>Food:</strong> ${food.food_name}</p>
        <p><strong>Calories:</strong> ${food.nf_calories}</p>
        <p><strong>Protein:</strong> ${food.nf_protein} g</p>
        <p><strong>Carbs:</strong> ${food.nf_total_carbohydrate} g</p>
        <p><strong>Fat:</strong> ${food.nf_total_fat} g</p>
      `;
    } else {
      resultDiv.innerHTML = "<p>Could not find nutrition info. Try a different food.</p>";
    }
  }