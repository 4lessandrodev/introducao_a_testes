const UserController  = require('./../controllers/UserController');

test('Somar dois valores', () => {
  expect(UserController.somar(1, 2)).toBe(3);
  expect(UserController.somar(1, 2)).not.toBeNull();
  expect(UserController.somar(1, 2)).toBeDefined();
  expect(UserController.somar(1, 2)).not.toBeUndefined();
});
