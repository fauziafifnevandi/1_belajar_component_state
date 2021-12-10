import React, { useState } from "react";
import UseCounter from "./NewUseCounter";

export default function NewSubscribeBox_custom() {
  const [state, setState] = useState({
    subscribe: false,
    like: 0,
    dislike: 0,
  });

  const handleSubscribe = () => {
    setState({
      ...state,
      subscribe: !state.subscribe,
    });
  };

  const [like, handleLike, handleTriple] = UseCounter(0);
  const [dislike, handleDislike] = UseCounter(0);

  return (
    <div>
      <h1>Halo Dunia!</h1>
      <p>
        <button onClick={handleSubscribe}>Subscribe</button>
        <span>{JSON.stringify(state.subscribe)}</span>
      </p>
      <p>
        <button onClick={handleLike}>Like</button>
        <span>{like}</span>
      </p>
      <p>
        <button onClick={handleDislike}>Dislike</button>
        <span>{dislike}</span>
      </p>
      <p>
        <button onClick={handleTriple}>TripleLike</button>
        <span></span>
      </p>
    </div>
  );
}
