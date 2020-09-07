import React, { Component } from "react";
import TableView from "./TableView.js";
class Table extends Component {
  state = {
    tableBlockWidt: "100%",
    tableHeader: ["ID", "First Name", "Last Name", "Password"],
    availableGrids: [
      "ID",
      "First Name",
      "Last Name",
      "Password",
      "Email",
      "Birthday",
      "Phone",
      "Country",
    ],
    gridsToShow: [],
    usersObj: [
      {
        ID: "1",
        "First Name": "Tony",
        "Last Name": "Smith",
        Password: 123,
        Email: "tonysmith@gmail.com",
        Birthday: "01.05.1996",
        Phone: "+1809365498761",
        Country: "USA",
      },
      {
        ID: "2",
        "First Name": "Gill",
        "Last Name": "Lopes",
        Password: 321,
        Email: "gilllopes@gmail.com",
        Birthday: "07.09.2000",
        Phone: "+1589632547890",
        Country: "Canada",
      },
      {
        ID: "3",
        "First Name": "Lily",
        "Last Name": "Brock",
        Password: 132,
        Email: "lilybrock@gmail.com",
        Birthday: "28.06.1995",
        Phone: "+6103256984568",
        Country: "Australia",
      },
      {
        ID: "4",
        "First Name": "Ava",
        "Last Name": "Cohen",
        Password: 231,
        Email: "avacohen@gmail.com",
        Birthday: "11.08.1997",
        Phone: "+445698541268",
        Country: "United Kingdom",
      },
    ],
    toRemove: [],
    toAdd: [],
  };

  componentDidMount() {
    const gridsToShow = this.createUsersMatrix(this.state.tableHeader);
    this.setState(() => ({
      gridsToShow: gridsToShow,
    }));
  }
  createUsersMatrix = (selected) => {
    // console.log("selected", selected);
    const gridsToShow = [];
    for (let i = 0; i < this.state.usersObj.length; i++) {
      const user = [];
      selected.forEach((elem) => {
        return user.push(this.state.usersObj[i][elem]);
      });
      gridsToShow.push(user);
    }
    return gridsToShow;
  };
  deleteFromHeader = (remove) => {
    this.setState((state) => ({
      toRemove: [...state.toRemove, remove],
    }));
  };
  addToHeader = (add) => {
    this.setState((state) => ({
      toRemove: [...state.toAdd, add],
    }));
  };
  applyHandle = (selected) => {
    const gridsToShow = this.createUsersMatrix(selected);
    let width = "";
    console.log("before if", selected.length);
    if (selected.length < 5 && selected.length > 1) {
      width += 100 / (selected.length - 1);
      width += "%";
    }
    if (selected.length <= 1) {
      width = "100%";
    }
    if (selected.length > 4) {
      width += 100 / selected.length + "%";
    }
    console.log(width);

    this.setState(() => ({
      tableHeader: selected,
      gridsToShow: gridsToShow,
      tableBlockWidt: width,
    }));
  };
  render() {
    return (
      <TableView
        tableHeader={this.state.tableHeader}
        availableGrids={this.state.availableGrids}
        deleteFromHeader={this.deleteFromHeader}
        applyHandle={this.applyHandle}
        addToHeader={this.addToHeader}
        users={this.state.gridsToShow}
        tableBlockWidt={this.state.tableBlockWidt}
      />
    );
  }
}

export default Table;
