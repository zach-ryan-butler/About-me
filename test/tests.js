import scoreAnswer from '../src/score-answers.js';
const test = QUnit.test;


test('all answers wrong is 0', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const activityAnswer = 'jerry';
    const colorAnswer = 'purple';
    const popularAnswer = 'eating';
    const finalAnswer = 'apple';
    const leastAnswer = 'smith';
    const expected = 0;

    //Act 
    
    const score = scoreAnswer(activityAnswer, colorAnswer, popularAnswer, finalAnswer, leastAnswer);
    // Call the function you're testing and set the result to a const

    //Assert
    assert.equal(score, expected);
});
test('all answers correct is 5', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const activityAnswer = 'two';
    const colorAnswer = 'white';
    const popularAnswer = 'sleeping';
    const finalAnswer = 'black';
    const leastAnswer = 'eating';
    const expected = 5;

    //Act 
    
    const score = scoreAnswer(activityAnswer, colorAnswer, popularAnswer, finalAnswer, leastAnswer);
    // Call the function you're testing and set the result to a const

    //Assert
    assert.equal(score, expected);
});
