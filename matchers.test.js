// toBe
test('should 10 = 10', () => {
  expect(10).toBe(10)
})

// toEqual
test('should content equal', () => {
  const a = {one: 1}
  expect(a).toEqual({one: 1})
})

// toBeNull
test('should null', () => {
  const a = null
  expect(a).toBeNull()
})

// toBeUndefined
test('should undefined', () => {
  const a = undefined
  expect(a).toBeUndefined()
})

// toBeDefined
test('should defined', () => {
  const a = 'a'
  expect(a).toBeDefined()
})

// toBeTruthy
test('should ture', () => {
  const a = true
  expect(a).toBeTruthy()
})

// toBeFalsy
test('should false', () => {
  const a = 0
  expect(a).toBeFalsy()
})

// not
test('not false', () => {
  const a = 1
  expect(a).not.toBeFalsy()
})

// 数字相关匹配器
test('should more than 10', () => {
  const count = 12
  expect(count).toBeGreaterThan(10)
})

// 浮点数
test('should 浮点数相等', () => {
  const a = 0.1
  const b = 0.2
  expect(a + b).toBeCloseTo(0.3)
})

// 字符串
test('should string', () => {
  const a = 'hellow world'
  expect(a).toMatch(/world/)
})

// 数组
test('the shopping list has beer on it', () => {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ];  
  expect(shoppingList).toContain('beer');
  expect(new Set(shoppingList)).toContain('beer');
});

// 异常
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
});
