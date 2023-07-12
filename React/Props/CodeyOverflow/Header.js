import React from "react";

function Header(props) {
  return (
    <div>
      <img profileImg={props.commentObject.profileImg} />
      <h1> username = {props.commentObject.username}</h1>
    </div>
  );
}
export default Header;
