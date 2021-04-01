import {foo} from '@live/example-foo'
import bar from '@src/modules/bar'

//eslint-disable-next-line node/no-unsupported-features/es-syntax
export default async function(): Promise<void> {

  const a: string = foo()
  const b: number = bar()
  console.log('hi')

}
