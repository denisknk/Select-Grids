import React, { Component } from "react";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ListItem from "./ListItem.js";

class Modal extends Component {
  state = {
    availableGrids: this.props.availableGrids,
    // value: "Search...",
  };
  // handeDeleteClick = (e) => {
  //   // deleteFromHeader
  //   console.log(e);
  // };
  applyHandle = () => {
    this.props.applyHandle();
    this.props.closeHandle();
  };
  onInputChange = (e) => {
    this.props.inputHandle(e);
  };
  render() {
    return (
      <div className="modal_overlay">
        <div className="modal_wrapper">
          <div className="modal_header">
            <p className="header_title">Select columns for the grid</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="times_icon"
              onClick={this.props.closeHandle}
            />
          </div>
          <div className="modal_body">
            <div className="modal_body_left_wrapper">
              <form className="modal_body_left_input">
                <input
                  type="text"
                  onChange={this.onInputChange}
                  value={this.state.value}
                  // onfocus={(e) => ""}
                />
              </form>

              <div className="modal_body_left">
                {this.props.availableGrids.map((el) => {
                  // console.log(this.props.availableGrids);
                  return (
                    <ListItem
                      item={el}
                      close={false}
                      key={el}
                      addToHeader={this.props.addToHeader}
                    />
                  );
                })}
              </div>
            </div>
            <div className="modal_body_right_wrapper">
              <div className="modal_body_right">
                {this.props.selectedItems.map((el) => {
                  return (
                    <ListItem
                      item={el}
                      close={true}
                      key={el}
                      deleteFromHeader={this.props.deleteFromHeader}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="modal_footer">
            <button className="modal_footer_button" onClick={this.applyHandle}>
              Apply
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
