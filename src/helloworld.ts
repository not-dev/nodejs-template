const helloWorld = {
  msg: 'Hello World',
  init: (arg?:string):void => {
    if (arg) { helloWorld.msg = arg }
    console.log(`${helloWorld.msg} is Ready`)
  },
  show: ():boolean => {
    try {
      alert(helloWorld.msg)
      return true
    } catch {
      return false
    }
  }
}

helloWorld.init()

export default helloWorld
