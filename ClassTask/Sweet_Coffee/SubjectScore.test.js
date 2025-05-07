const above80 = require('./SubjectScore');


test("test to get users that scored above 80", ()=>{
    const data = {
    user1:{name:"Tom", scores:{math: 70, english: 80}},
    user2:{name:"Jerry", scores:{math: 90, english: 60}},
    user3:{name:"Spike", scores:{math: 85, english: 88}}
    }
    let result = above80(data);
    let scoreAbove80 = {name: 'Spike', scores: { math: 85, english: 88}};
    expect(result).toEqual(scoreAbove80);
});


