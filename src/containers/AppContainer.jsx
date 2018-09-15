import React, { Component } from 'react'
import { connect } from 'react-redux'
// import * as actions from './actions/actions.js'
import ViewContainer from './ViewContainer.jsx'
import RightContainer from './RightContainer.jsx'
import styles from '../visuals/styles.css'

const mapStateToProps = store => ({
  
})

const mapDispatchToProps = dispatch => ({

})

class AppContainer extends Component {

  render() {
    return (
      <div className='app-container' 
      // style={{ width: '400px', height: '700px', border: '1px'}}
      >
       <p style={{color: 'red'}}>asdfasdf</p>
        <RightContainer
          //components={pass in components from store}

        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);