function tenStudents(scores){
    const testScores = []
    scores.filter((score)=> {
       if (score >= 70)

         testScores.push(score);
    
    })
    return testScores;


};

module.exports = tenStudents;