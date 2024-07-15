import React from "react";

const ListItems = ({ children, className, onClick }) => {
  return (
    <li onClick={onClick} className={className}>
      {children}
    </li>
  );
};

export default ListItems;
