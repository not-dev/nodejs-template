import { pipeline, Transform, TransformCallback } from 'stream'
import { promisify } from 'util'

/**
 * pipelineのPromiseラッパー
 */
const asyncPipeline = promisify(pipeline)

const stringifyTransform = ():Transform => new Transform({
  transform (
    chunk: Record<string, unknown>,
    _: string,
    done: TransformCallback
  ): void {
    this.push(JSON.stringify(chunk))
    done()
  },
  flush (
    done: TransformCallback
  ): void {
    done()
  },
  writableObjectMode: true
})

export { asyncPipeline, stringifyTransform }
