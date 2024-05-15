import { beforeEach, afterEach, it, expect, describe, vi } from 'vitest';
import { PersonStatistics } from './PersonStatistics';

let personStatistics = new PersonStatistics();

beforeEach(() => {
  personStatistics = new PersonStatistics([]);
})

describe('getAvarageAge', () => {
  it('should return 0 if the array is empty', () => {
    expect(personStatistics.getAvarageAge()).toEqual(0);
  });

  it('if there is only 1 person, should return that person\'s age', () => {
    personStatistics.people = [{
      id: 1,
      name: "Suri",
      age: 21,
      isStudent: true,
      score: 70
    }];
    expect(personStatistics.getAvarageAge()).toEqual(21);
  });

  it('should return avarage age', () => {
    personStatistics.people = [{
      id: 1,
      name: "Suri",
      age: 21,
      isStudent: true,
      score: 70
    }, {
      id: 2,
      name: "Viktor",
      age: 23,
      isStudent: true,
      score: 50
    }, {
      id: 3,
      name: "Dóri",
      age: 20,
      isStudent: true,
      score: 75
    }];
    expect(personStatistics.getAvarageAge()).toEqual((21 + 23 + 20) / 3);
  });
});

describe('getNumberOfStudents', () => {
  it('should return 0 if the array is empty', () => {
    expect(personStatistics.getNumberOfStudents()).toEqual(0);
  });

  it('should return 1 if the only person in the array has isStudent as true', () => {
    personStatistics.people = [{
      id: 1,
      name: "Suri",
      age: 21,
      isStudent: true,
      score: 70
    }];
    expect(personStatistics.getNumberOfStudents()).toEqual(1);
  });

  it('should return 0 if every person in the array has isStudent as false', () => {
    personStatistics.people = [{
      id: 1,
      name: "Suri",
      age: 21,
      isStudent: false,
      score: 70
    }, {
      id: 2,
      name: "Viktor",
      age: 23,
      isStudent: false,
      score: 50
    }, {
      id: 3,
      name: "Dóri",
      age: 20,
      isStudent: false,
      score: 75
    }];
    expect(personStatistics.getNumberOfStudents()).toEqual(0);
  });
});


describe('getPersonWithHighestScore', () => {
  it('should return 0 if the array is empty', () => {
    expect(personStatistics.getPersonWithHighestScore()).toEqual(0);
  });

  it('if there is only 1 person, should return that person\'s score', () => {
    personStatistics.people = [{
      id: 1,
      name: "Suri",
      age: 21,
      isStudent: true,
      score: 70
    }];
    expect(personStatistics.getPersonWithHighestScore().score).toEqual(70);
  });

  it('should return the highest score of all the people', () => {
    personStatistics.people = [{
      id: 1,
      name: "Suri",
      age: 21,
      isStudent: false,
      score: 70
    }, {
      id: 2,
      name: "Viktor",
      age: 23,
      isStudent: false,
      score: 50
    }, {
      id: 3,
      name: "Dóri",
      age: 20,
      isStudent: false,
      score: 75
    }];
    expect(personStatistics.getPersonWithHighestScore().score).toEqual(75);
  });
});

describe('getAvarageScoreOfStudents', () => {
  it('should return 0 if the array is empty', () => {
    expect(personStatistics.getAvarageScoreOfStudents()).toEqual(0);
  })

  it('should return 0 if every person has isStudent as false', () =>{
    personStatistics.people = [{
      id: 1,
      name: "Suri",
      age: 21,
      isStudent: false,
      score: 70
    }, {
      id: 2,
      name: "Viktor",
      age: 23,
      isStudent: false,
      score: 50
    }, {
      id: 3,
      name: "Dóri",
      age: 20,
      isStudent: false,
      score: 75
    }];
    expect(personStatistics.getAvarageScoreOfStudents()).toEqual(0);
  });

  it('if there is only one person who has isStudent as true, return that person\'s score', () => {
    personStatistics.people = [{
      id: 1,
      name: "Suri",
      age: 21,
      isStudent: true,
      score: 70
    }, {
      id: 2,
      name: "Viktor",
      age: 23,
      isStudent: false,
      score: 50
    }, {
      id: 3,
      name: "Dóri",
      age: 20,
      isStudent: false,
      score: 75
    }];
    expect(personStatistics.getAvarageScoreOfStudents()).toEqual(70);
  });

  it('should return the avarage score if everyone has isStudent as true', () => {
    personStatistics.people = [{
      id: 1,
      name: "Suri",
      age: 21,
      isStudent: true,
      score: 70
    }, {
      id: 2,
      name: "Viktor",
      age: 23,
      isStudent: true,
      score: 50
    }, {
      id: 3,
      name: "Dóri",
      age: 20,
      isStudent: true,
      score: 75
    }];
    expect(personStatistics.getAvarageScoreOfStudents()).toEqual((70 + 75 + 50) / 3);
  });

  it('should return avarage score even if not everyone has isStudent as true', () => {
    personStatistics.people = [{
      id: 1,
      name: "Suri",
      age: 21,
      isStudent: true,
      score: 70
    }, {
      id: 2,
      name: "Viktor",
      age: 23,
      isStudent: true,
      score: 50
    }, {
      id: 3,
      name: "Dóri",
      age: 20,
      isStudent: false,
      score: 75
    }];
    expect(personStatistics.getAvarageScoreOfStudents()).toEqual(60);
  });
});

describe('getOldestStudent', () => {
  it('should return 0 if the array is empty', () => {
    expect(personStatistics.getOldestStudent()).toEqual(0);
  });

  it('should return 0 if every person has isStudent as false', () => {
    personStatistics.people = [{
      id: 1,
      name: "Suri",
      age: 21,
      isStudent: false,
      score: 70
    }, {
      id: 2,
      name: "Viktor",
      age: 23,
      isStudent: false,
      score: 50
    }, {
      id: 3,
      name: "Dóri",
      age: 20,
      isStudent: false,
      score: 75
    }];
    expect(personStatistics.getOldestStudent()).toEqual(0)
  });

  it('if only 1 person has isStudent as true, should return that person\'s age', () => {
    personStatistics.people = [{
      id: 1,
      name: "Suri",
      age: 21,
      isStudent: true,
      score: 70
    }, {
      id: 2,
      name: "Viktor",
      age: 23,
      isStudent: false,
      score: 50
    }, {
      id: 3,
      name: "Dóri",
      age: 20,
      isStudent: false,
      score: 75
    }];
    expect(personStatistics.getOldestStudent().age).toEqual(21);
  });

  it('should return the oldest person\'s age if more than 1 person has isStudent as true', () => {
    personStatistics.people = [{
      id: 1,
      name: "Suri",
      age: 21,
      isStudent: true,
      score: 70
    }, {
      id: 2,
      name: "Viktor",
      age: 23,
      isStudent: true,
      score: 50
    }, {
      id: 3,
      name: "Dóri",
      age: 20,
      isStudent: false,
      score: 75
    }];
    expect(personStatistics.getOldestStudent().age).toEqual(23);
  });

  it('should return the oldest person\'s age if everyone has isStudent as true', () => {
    personStatistics.people = [{
      id: 1,
      name: "Suri",
      age: 21,
      isStudent: true,
      score: 70
    }, {
      id: 2,
      name: "Viktor",
      age: 23,
      isStudent: true,
      score: 50
    }, {
      id: 3,
      name: "Dóri",
      age: 20,
      isStudent: true,
      score: 75
    }];
    expect
  })
});