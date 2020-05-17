import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ExampleStore from '../stores/ExampleStore'
import * as ExampleActions from '../actions/ExampleActions'

export default class Home extends Component {

  constructor () {

    super()

    this.state = {

      examples: ExampleStore.getAll(),
      addExampleVal: ''

    }

    this.getExamples = this.getExamples.bind(this)

  }

  componentDidMount () {

    ExampleStore.on('change', this.getExamples)

  }

  componentWillUnmount () {

    ExampleStore.removeListener('change', this.getExamples)

  }

  getExamples () {

    this.setState({ examples: ExampleStore.getAll() })

  }

  handleChange (e) {

    this.setState({ addExampleVal: e.target.value })

  }

  addExample () {

    ExampleActions.addExample(this.state.addExampleVal)
    this.setState({ addExampleVal: '' })

  }

  removeExample (exampleID) {

    ExampleActions.removeExample(exampleID)

  }

  render () {

    return (

      <div>

        <h1>Home</h1>
        <Link to="/about">About</Link>

        <br/>Examples

        <ul>

          {this.state.examples.map((value, index) => {

            return <li key={index}>{value} <button exampleid={index} onClick={() => this.removeExample(index)}>Remove</button></li>

          })}

        </ul>

        <input type="text" onChange={this.handleChange.bind(this)} value={this.state.addExampleVal} />
        <button onClick={this.addExample.bind(this)}>Add</button>

      </div>

    )

  }

}
