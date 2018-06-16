import React, { Component } from "react";
import ReactDOM from "react-dom";
import './modal.css';



const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button className="button" onClick={handleClose}>close</button>
      </section>
    </div>
  );
};


class Winner extends Component {
  constructor(props) {
    super();
    console.log("Props",props);
}
  state = { show: false };
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    console.log("cl");
    this.setState({ show: false });
this.props.onClose("Close");
  };

  render() {
    const value=this.props.winner;

    var item;
    if(value=="X"){
      item= <div> Game Over.....Winner is:<span className="valx">{value}</span></div>;
      this.state.show=true;
    }
    else if(value=="O"){
      item= <div> Game Over.....Winner is:<span className="valo">{value}</span></div>;
      this.state.show=true;
    }else{
      item=<div>No Winner yet...{value}</div>
    }
    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          {item}
        </Modal>
      </main>
    );
  }
}
export default Winner;
