import React from 'react'
import { connect } from 'react-redux'
import Winner from '../components/Winner'
import { closeModal } from '../actions'


const mapStateToProps = (state) => ({
  winner:state.boardValue.winner
})
const mapDispatchToProps = (dispatch)  => ({
  onClose: id => dispatch(closeModal(id))
})
export default connect(mapStateToProps,mapDispatchToProps)(Winner)
