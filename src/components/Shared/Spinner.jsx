import React, { Component } from 'react'
import loading from '../../assets/loading.svg'

export default class Spinner extends Component {
  render() {
    return (
      <div className='flex items-center justify-center h-screen'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}