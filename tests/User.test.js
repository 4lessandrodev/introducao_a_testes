const UserController = require('./../controllers/UserController');
const functions = require('./../controllers/functions');
/*

//Exemples, executar antes de cada teste ou depois de cada teste
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');
const nameCheck = () => console.log('Checking Name....');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff');
  });

  test('User is Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  });
});
*/
// toBe
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

// not
test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
test('Deve ser null', () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Deve ser falso', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqual
test('Usuario deve ter primeiro nome Brad e segundo Traversy', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Brad',
    lastName: 'Traversy'
  });
});

// Less than and greater than
test('Deve ser menor que 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test('Não pode ter a letra i em team', () => {
  expect('team').not.toMatch(/I/i);
});

// Arrays
test('Deve ter um admin no array', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

// Working with async data

// Promise
// test('User fetched name should be Leanne Graham', () => {
//   expect.assertions(1);
//   return functions.fetchUser().then(data => {
//     expect(data.name).toEqual('Leanne Graham');
//   });
// });


// Async Await
test('O nome do usuário deve ser Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});



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
