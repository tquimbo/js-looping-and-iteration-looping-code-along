function writeCards(people, occasion) {
    let arr = [];
  
    for (let i = 0; i < people.length; i++) {
      arr.push(`Thank you, ${people[i]}, for the wonderful ${occasion} gift!`);
    }
    return arr;
  }
  




function countDown(number) {
    while(number >= 0) {
      console.log(number--);
    }
  }
  