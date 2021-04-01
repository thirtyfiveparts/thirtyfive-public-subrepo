import test from 'ava'
import index from './index'
test('foo', async t => {
  const actual = await index()
  t.is(actual, 1)
})
