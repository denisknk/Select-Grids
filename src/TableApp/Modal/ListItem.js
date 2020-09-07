import React from "react";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const ListItem = ({ item, close, deleteFromHeader, addToHeader }) => {
  return (
    <div className="list_item_wrapper">
      {item}
      {!close && (
        <FontAwesomeIcon
          icon={faLongArrowAltRight}
          className="list_item_icon"
          onClick={() => addToHeader(item)}
        />
      )}
      {close && (
        <FontAwesomeIcon
          icon={faTimes}
          className="list_item_icon"
          onClick={() => deleteFromHeader(item)}
        />
      )}
    </div>
  );
};

export default ListItem;
