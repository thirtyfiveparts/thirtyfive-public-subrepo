import index from './index'

//import test from 'ava'
//test('foo', async t => {
//  const actual = await index()
//  t.is(actual, 1)
//})

test('foo', async () => {
  console.log('hi')
  console.log(index)
  const actual = await index()
  console.log(actual)
  expect(actual).toBe(1)
})
