import Counter from "./hook";

let counter = null

beforeEach(() => {
  counter = new Counter()
})

test('should addone', () => {
  counter.addOne()
  expect(counter.num).toBe(1)
})

test('should minusone', () => {
  counter.minusOne()
  expect(counter.num).toBe(-1)
})

describe('desc conuter', () => {
  test('should addone1', () => {
    counter.addOne()
    expect(counter.num).toBe(1)
  })
  
  test('should minusone1', () => {
    counter.minusOne()
    expect(counter.num).toBe(-1)
  })
})
