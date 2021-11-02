import type { TupleLTE } from '@utils'
import { isTupleLTE } from '@utils'
/**
 * 配列を分割
 * @template T 配列の要素のtype
 * @param array - 分割する配列
 * @param size - チャンクの長さ
 * @returns chunked array
 */
const arrayChunk = <T, N extends number>(array:Array<T>, size:N):TupleLTE<T, N>[] => {
  return array.reduce((chunks:TupleLTE<T, N>[], _, index) => {
    if ((index % size) === 0) {
      const chunk = array.slice(index, index + size)
      if (isTupleLTE(chunk, size)) return [...chunks, chunk]
    }
    return chunks
  }, [])
}

export { arrayChunk }
