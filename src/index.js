import scoreAnswer from './score-answers.js';

const submitButton = document.getElementById('submit-button');
const activityInput = document.getElementById('activity-question');
const colorInput = document.getElementById('color-question');
const popularInput = document.getElementById('popular-question');
const finalInput = document.getElementById('final-question');
const leastInput = document.getElementById('least-question');
const quizResult = document.getElementById('quiz-result');

submitButton.addEventListener('click', () => {
    const activityAnswer = activityInput.value;
    const colorAnswer = colorInput.value;
    const popularAnswer = popularInput.value;
    const finalAnswer = finalInput.value;
    const leastAnswer = leastInput.value;

    if(activityAnswer.trim() === '' || colorAnswer.trim() === '' 
    || popularAnswer.trim() === '' || finalAnswer.trim() === '' 
    || leastAnswer.trim() === '') {
        alert('all answers are needed');
        return;
    }

    const score = scoreAnswer(activityAnswer, colorAnswer, popularAnswer, finalAnswer, leastAnswer);

    const message = 'You got ' + score + '/5 correct';

    quizResult.textContent = message;

});