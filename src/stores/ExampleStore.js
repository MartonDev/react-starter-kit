import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class ExampleStore extends EventEmitter {

  constructor () {

    super()

    this.examples = ['This is the first example', 'This is the second example']

  }

  //getter
  getAll () {

    return this.examples

  }

  //setter
  addExample (exampleText) {

    this.examples.push(exampleText)
    //emiting change to listeners
    this.emit('change')

  }

  //remove an example
  removeExample (exampleID) {

    console.log(exampleID)
    this.examples.splice(exampleID, 1)
    this.emit('change')

  }

  //hande incoming actions via flux
  handleActions (action) {

    switch (action.type) {

      case 'ADD_EXAMPLE':

        this.addExample(action.exampleText)
        break

      case 'REMOVE_EXAMPLE':

        this.removeExample(action.exampleID)
        break

      default:
        break

    }

  }

}

const exampleStore = new ExampleStore()
dispatcher.register(exampleStore.handleActions.bind(exampleStore))

export default exampleStore
