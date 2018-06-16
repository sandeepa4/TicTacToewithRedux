import React from 'react'
import { connect } from 'react-redux'
import Board from '../components/Board'
import { itemClicked } from '../actions'
import { calculateWinner } from '../actions'


const mapStateToProps = (state, ownProps) => ({
  boardItems:state.boardValue.clickValues,
  winner:state.boardValue.winner
})
const mapDispatchToProps = (dispatch,state, ownProps) => ({
  onClick: id =>{ dispatch(itemClicked(id));
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Board)
