import ErrorArray from '../js/ErrorArray';
import ErrorRepository from '../js/ErrorRepository';

test('Check error 1 - Wrong type character', () => {
  const error1 = new ErrorRepository();
  const received = error1.translate(1);
  const result = 'Wrong type character';
  expect(received).toBe(result);
});

test('Check error 2 - Character already exist', () => {
  const error1 = new ErrorRepository(Object.entries(ErrorArray));
  const received = error1.translate(2);
  const result = 'Character already exist';
  expect(received).toBe(result);
});

test('Unknown error', () => {
  const error2 = new ErrorRepository();
  const received = error2.translate(5);
  const result = 'Unknown error';
  expect(received).toBe(result);
});
