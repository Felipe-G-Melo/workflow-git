import { describe, expect, test } from '@jest/globals';
import { User } from '../src/user';

describe('deve retornar true', () => {
  test('deve retornar true', () => {
    var user = new User();
    expect(user.returnTrue()).toBe(true);
  });
});
