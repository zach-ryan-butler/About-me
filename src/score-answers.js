function scoreAnswer(activityAnswer, colorAnswer, popularAnswer, finalAnswer, leastAnswer) {
    
    activityAnswer = activityAnswer.toLowerCase();
    colorAnswer = colorAnswer.toLowerCase();
    popularAnswer = popularAnswer.toLowerCase();
    finalAnswer = finalAnswer.toLowerCase();
    leastAnswer = leastAnswer.toLowerCase();

    let score = 0;

    if (activityAnswer === '2') {
        score += 1;
    }

    if (colorAnswer === 'white') {
        score +=1;
    }

    if (popularAnswer === 'sleeping') {
        score += 1;
    }
    if (finalAnswer === 'black') {
        score += 1;
    }
    if (leastAnswer === 'eating') {
        score += 1;
    }

    return score;
}

export default scoreAnswer;