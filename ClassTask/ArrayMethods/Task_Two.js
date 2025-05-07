function scoreIncrease(scores){
    const addedScores = []
    scores.map((score)=> {
       score += 5
        addedScores.push(score);
    
    })
    return addedScores;


};

module.exports = scoreIncrease;