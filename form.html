<form id="mentalHealthForm">
    <input type="number" id="mood" name="mood" placeholder="Mood Level" required>
    <input type="number" id="sleep" name="sleep" placeholder="Hours of Sleep" required>
    <input type="number" id="activity" name="activity" placeholder="Activity Level" required>
    <input type="number" id="stress" name="stress" placeholder="Stress Level" required>
    <button type="submit">Predict Mental Health</button>
</form>

<p id="result"></p>

<script>
    document.getElementById('mentalHealthForm').addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent page refresh

        // Collect user inputs
        const mood = document.getElementById('mood').value;
        const sleep = document.getElementById('sleep').value;
        const activity = document.getElementById('activity').value;
        const stress = document.getElementById('stress').value;

        // Make the POST request to your Flask backend
        fetch('/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mood, sleep, activity, stress })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = "Predicted Mental Health Score: " + data.mental_health_score;
        })
        .catch(error => console.error('Error:', error));
    });
</script>