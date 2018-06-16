import React from 'react'
import PropTypes from 'prop-types'
import BoardItem from './BoardItem';

const Board = ({onClick, boardItems,winner}) => {

  let boardRow=[];
  let item=  Object.assign(boardItems);
  console.log("st",boardItems);
  var cur;
  for (var i = 0; i < 10; i++) {
    let boardItem=[];
    let str="";
    for (var j = 0; j < 10; j++) {
      cur=i*10+j;
      str=""+item[cur].value;
      boardItem.push(<td><BoardItem onClick={(i)=>onClick(i)} titem={item[cur]}></BoardItem></td>);
    }
   boardRow.push(<tr> {boardItem} </tr>);
    }

    return (
      <div className="Table">
      <table><tbody>
      {boardRow}</tbody></table>
            </div>
    );
  }

  export default Board
