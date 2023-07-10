import React from "react";
import { comments } from "./commentData";
import Header from "./Header.js";
import Body from "./Body.js";
import Card from "./Card.js";

function App() {
  return (
    <div>
      <h1>this is test mf</h1>
      {comments.map((comment) => {
        return <Card key={comment.id} commentObject={comment} />;
      })}
    </div>
  );
}

export default App;
