import { runCallback } from './mock'


test('should runCallback ', () => {
  const func = jest.fn()
  runCallback(func)
  expect(func).toBeCalled()
})

test('should runCallback2 ', () => {
  const func = jest.fn()
  runCallback(func)
  runCallback(func)
  expect(func.mock.calls.length).toBe(2)
})


