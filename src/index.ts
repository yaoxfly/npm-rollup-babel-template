export const test1 = async () => {
  const a = () => {
    return 1
  }
  const bb = await a()
  return bb
}

export const test2 = "hello world!";