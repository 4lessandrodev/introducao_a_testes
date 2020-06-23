const UserController  = require('./../controllers/UserController');

test('Somar dois valores', async () => {
  let result = await UserController.somar([1, 2]);
  expect(result).toBe(3);
  expect(result).not.toBeNull();
  expect(result).toBeDefined();
  expect(result).not.toBeUndefined();
});

test('Somar dois valores sendo 1 dos valores zero', async () => {
  let result = await UserController.somar([0, 2]);
  expect(result).toBe(2);
  expect(result).not.toBeNull();
  expect(result).toBeDefined();
  expect(result).not.toBeUndefined();
});

test('Somar passando apenas um valor', async () => {
  let result = await UserController.somar([2]);
  expect(result).toBe(2);
  expect(result).not.toBeNull();
  expect(result).toBeDefined();
  expect(result).not.toBeUndefined();
});

test('Somar passando um array de string', async () => {
  let result = await UserController.somar(['2', '5', '3']);
  expect(result).toBe(10);
  expect(result).not.toBeNull();
  expect(result).toBeDefined();
  expect(result).not.toBeUndefined();
});

test('Somar passando um array', async () => {
  let result = await UserController.somar([4,6,8,10]);
  expect(result).toBe(28);
  expect(result).not.toBeNull();
  expect(result).toBeDefined();
  expect(result).not.toBeUndefined();
});

test('Somar valores passando um array com uma letra', async () => {
  let result = await UserController.somar([4,'l',4,10]);
  expect(result).toBe(18);
  expect(result).not.toBeNull();
  expect(result).toBeDefined();
  expect(result).not.toBeUndefined();
});

test('Somar dois valores fora de uma array', async () => {
  let result = await UserController.somar(1,2);
  expect(result).toBe('Informe um array de números');
  expect(result).not.toBeNull();
  expect(result).toBeDefined();
  expect(result).not.toBeUndefined();
});
