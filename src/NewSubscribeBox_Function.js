import { React, useState } from "react";

export default function NewSubscribeBox_Function() {
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

  const handleLike = () => {
    setState((currentState) => ({
      ...state,
      like: currentState.like + 1,
    }));
  };

  const handleTriple = () => {
    handleLike();
    handleLike();
    handleLike();
  };

  return (
    <div>
      <h1>New Subscribe Box </h1>
      <p>
        <button onClick={handleSubscribe}>Subscribe</button>
        <span>{JSON.stringify(state.subscribe)}</span>
      </p>
      <p>
        <button onClick={handleLike}>Like</button>
        <span>{state.like}</span>
      </p>
      <p>
        <button>Dislike</button>
        <span></span>
      </p>
      <p>
        <button onClick={handleTriple}>Triple Like</button>
        <span>{state.like}</span>
      </p>
    </div>
  );
}
