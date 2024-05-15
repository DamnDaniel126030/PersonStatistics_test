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

  it('should return ')
});

