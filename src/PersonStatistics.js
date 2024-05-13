export class PersonStatistics {
  #people = []

  /* 
    const people{
      id: id,
      name: name,
      age: age,
      isStudent: isStudent,
      score: score
    };
  */

  set people(value){
    this.#people = value;
  };

  constructor (people){
    this.#people = people;
  };

  getAvarageAge(){
    let ageSum = 0;
    const numOfpeople = this.#people.length

    this.#people.forEach(person => {
      ageSum += person.age;
    });

    return ageSum / numOfpeople;
  };


  getNumberOfStudents(){
    let numOfStudents = 0;

    this.#people.forEach(person => {
      if (person.isStudent){
        numOfStudents++;
      };
    });

    return numOfStudents;
  };

  getPersonWithHighestScore(){
    let personWithMostScore = this.#people[0];

    this.#people.forEach(person => {
      if (person.score > personWithMostScore.score){
        personWithMostScore = person;
      };
    });

    return personWithMostScore;
  };

  getAvarageScoreOfStudents(){
    let numOfStudents = 0;
    let scoreSum = 0;

    this.#people.forEach(person => {
      if (person.isStudent){
        numOfStudents++;
        scoreSum += person.score;
      };
    });

    return scoreSum / numOfStudents;
  };

  getOldestStudent(){
    let oldestStudent = this.#people[0];

    this.#people.forEach(person => {
      if(person.isStudent){
        if(person.age > oldestStudent.age){
          oldestStudent = person;
        };
      };
    });

    return oldestStudent;
  };

  isAnyoneFailing(){
    let failing = false;

    let i = 0;
    while (failing == false && i != this.#people.length){
      if (this.#people[i].score < 40){
        failing = true;
      }
      else{
        i++;
      }
    };

    return failing;
  };
}