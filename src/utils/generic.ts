/**
 * Sleep function
 * @param sec - number
 * @exsample const func = async () => {
 *  await sleep(1)
 * }
 */
const sleep = async (sec: number):Promise<void> => {
  return await new Promise((resolve) => {
    setTimeout(resolve, sec * 1000)
  })
}

const throwError = (message?:Parameters<typeof Error>[0]):never => { throw new Error(message) }

export { sleep, throwError }
