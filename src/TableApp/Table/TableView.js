import React, { Component } from "react";
import "./Table.css";
import "../../normalize.css";
import Modal from "../Modal/Modal";
import TableBlock from "./TableBlock.js";

class Table extends Component {
  state = {
    modalIsOpen: false,
  };
  handleClick = () => {
    this.setState(() => ({
      modalIsOpen: true,
    }));
  };

  closeHandle = () => {
    this.setState(() => ({
      modalIsOpen: false,
    }));
  };

  render() {
    return (
      <div className="table_parent_wrapper">
        {this.state.modalIsOpen && (
          <Modal
            closeHandle={this.closeHandle}
            availableGrids={this.props.availableGrids}
            selectedItems={this.props.tableHeader}
            deleteFromHeader={this.props.deleteFromHeader}
            applyHandle={this.props.applyHandle}
            addToHeader={this.props.addToHeader}
          />
        )}
        <div className="header_wrapper">
          <p>User Table</p>
          <button className="table_button" onClick={this.handleClick}>
            Select Grid Columns
          </button>
        </div>
        <div className="table_wrapper">
          <div className="table_line" key={Math.random()}>
            {this.props.tableHeader.map((el, ind) => {
              return (
                <TableBlock
                  key={Math.random()}
                  el={el}
                  style={{
                    backgroundColor: "rgb(2, 173, 139)",
                    color: "#ffffff",
                    fontSize: "1.25em",
                    width: this.props.tableBlockWidt,
                  }}
                />
              );
            })}
          </div>

          {this.props.users.map((tr, ind) => {
            return (
              <div className="table_line" key={Math.random()}>
                {tr.map((el) => {
                  return (
                    <TableBlock
                      key={Math.random()}
                      el={el}
                      style={
                        ind % 2 === 0
                          ? {
                              backgroundColor: "#f7f7f7",
                              width: this.props.tableBlockWidt,
                            }
                          : {
                              backgroundColor: "#ededed",
                              width: this.props.tableBlockWidt,
                            }
                      }
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Table;
