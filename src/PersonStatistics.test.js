import { beforeEach, afterEach, it, expect, describe, vi } from 'vitest';
import { PersonStatistics } from './PersonStatistics';

let personStatistics = new PersonStatistics();

beforeEach(() => {
  personStatistics = new PersonStatistics();
})

describe('getAvarageAge', () => {
  it('should return 0 if the array is empty', () => {

    expect(personStatistics.getAvarageAge()).toEqual(0);
  })
})

