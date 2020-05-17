import dispatcher from '../dispatcher'

export const addExample = exampleText => {

  dispatcher.dispatch({

    type: 'ADD_EXAMPLE',
    exampleText: exampleText

  })

}

export const removeExample = exampleID => {

  dispatcher.dispatch({

    type: 'REMOVE_EXAMPLE',
    exampleID: exampleID

  })

}
