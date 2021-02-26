import * as path from 'path'

import pkg from '../package.json'

const root = path.dirname(__dirname)

const dir = {
  src: path.join(root, 'src'),
  build: path.join(root, 'bin')
}

const prefix = pkg.name

export { prefix }
export default dir
