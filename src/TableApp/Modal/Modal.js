import React, { Component } from "react";
import ModalView from "./ModalView.js";
class Modal extends Component {
  state = {
    selectedItems: this.props.selectedItems,
    availableGrids: this.props.availableGrids,
  };

  deleteFromHeader = (item) => {
    this.setState((state) => ({
      selectedItems: state.selectedItems.filter((el) => {
        return el !== item;
      }),
    }));
    // this.props.deleteFromHeader(item);
  };
  addToHeader = (item) => {
    const isInArray = this.state.selectedItems.includes(item);
    if (!isInArray) {
      this.setState((state) => ({
        selectedItems: [...state.selectedItems, item],
      }));
    }

    // this.props.addToHeader(item);
  };
  applyHandle = () => {
    console.log(this.state.selectedItems);
    this.props.applyHandle(this.state.selectedItems);
  };
  inputHandle = (e) => {
    const input = e.target.value.toLowerCase();
    const showOnInput = this.props.availableGrids.filter((el) => {
      return el.toLowerCase().match(input);
    });
    console.log(showOnInput);
    this.setState(() => ({
      availableGrids: showOnInput,
    }));
  };
  render() {
    return (
      <ModalView
        closeHandle={this.props.closeHandle}
        availableGrids={this.state.availableGrids}
        selectedItems={this.state.selectedItems}
        deleteFromHeader={this.deleteFromHeader}
        applyHandle={this.applyHandle}
        addToHeader={this.addToHeader}
        inputHandle={this.inputHandle}
      />
    );
  }
}

export default Modal;
