document.addEventListener('DOMContentLoaded', function() {
    const moodButtons = document.querySelectorAll('.mood-btn');
    const feedback = document.getElementById('feedback');

    moodButtons.forEach(button => {
        button.addEventListener('click', function() {
            const mood = this.getAttribute('data-mood');
            updateMood(mood);
        });
    });

    function updateMood(mood) {
        let feedbackMessage;

        switch(mood) {
            case 'happy':
                feedbackMessage = 'Great to hear that you are happy! Keep up the positive vibes! 😊';
                break;
            case 'neutral':
                feedbackMessage = 'You are feeling neutral. Consider taking a short break to clear your mind. 😐';
                break;
            case 'sad':
                feedbackMessage = 'Sorry to hear that you are feeling sad. It might help to talk to someone. 😔';
                break;
        }

        feedback.textContent = feedbackMessage;
        // Send mood data to the server for storage
        saveMoodToServer(mood);
    }

    function saveMoodToServer(mood) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'save_mood.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            if (this.status === 200) {
                console.log('Mood saved: ' + this.responseText);
            }
        };
        xhr.send('mood=' + mood);
    }
});
