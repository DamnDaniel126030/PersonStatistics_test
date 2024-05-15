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
    if (this.#people.length == 0){
      return 0;
    };

    let ageSum = 0;
    const numOfpeople = this.#people.length

    this.#people.forEach(person => {
      ageSum += person.age;
    });

    return ageSum / numOfpeople;
  };


  getNumberOfStudents(){
    if (this.#people.length == 0){
      return 0;
    };

    let numOfStudents = 0;

    this.#people.forEach(person => {
      if (person.isStudent){
        numOfStudents++;
      };
    });

    return numOfStudents;
  };

  getPersonWithHighestScore(){
    if (this.#people.length == 0){
      return 0;
    };

    let personWithMostScore = this.#people[0];

    this.#people.forEach(person => {
      if (person.score > personWithMostScore.score){
        personWithMostScore = person;
      };
    });

    return personWithMostScore;
  };

  getAvarageScoreOfStudents(){
    if (this.#people.length == 0){
      return 0;
    };

    let numOfStudents = 0;
    let scoreSum = 0;

    
    this.#people.forEach(person => {
      if (person.isStudent){
        numOfStudents++;
        scoreSum += person.score;
      };
    });

    if (numOfStudents == 0){
      return 0;
    };

    return scoreSum / numOfStudents;
  };

  getOldestStudent(){
    if (this.#people.length == 0){
      return 0;
    };

    let oldestStudent = this.#people[0];

    this.#people.forEach(person => {
      if(person.isStudent){
        if(person.age > oldestStudent.age){
          oldestStudent = person;
        };
      };
    });

    if (!oldestStudent.isStudent){
      return 0;
    }
    else{
      return oldestStudent;
    }
  };

  isAnyoneFailing(){
    if (this.#people.length == 0){
      return 0;
    };

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