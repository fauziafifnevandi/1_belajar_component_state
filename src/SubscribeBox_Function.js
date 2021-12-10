import React, { useState } from "react";

// init, read, update
//share logic (fitur yg tidak dimiliki oleh class)

import useCounter from "./useCounter";

export default function SubscribeBox_Function() {
  //  useState akan mereturn array dan terdapat 2 item:
  // [0] state / value
  // [1] function untuk update state

  const [state, setState] = useState({
    subscribe: false,
    // like: 0,
    // dislike: 0,
  });

  const [like, handleLike, handleTriple] = useCounter(0);
  const [dislike, handleDislike] = useCounter(0);

  const handleSubscribe = () => {
    // setstate berjalan secara async
    setState({
      ...state,
      subscribe: !state.subscribe,
    });
  };

  //   const handleLike = () => {
  //     //  gunakan updater function / callback supaya bisa triple 3 (currentstate)
  //    callback adalah Mengoper fungsi-fungsi ke dalam komponen

  //     setState((currentState) => ({
  //       // functional komponen pada dasarnya melakukan replace,
  //       // ...state digunakan untuk merge ke state diatas, sama seperti di class komponen

  //       ...state,
  //       like: currentState.like + 1,
  //     }));
  //   };

  //   const handleTriple = () => {
  //     handleLike();
  //     handleLike();
  //     handleLike();
  //   };

  return (
    <div>
      <p>
        <button onClick={handleSubscribe}> Subscribe</button>
        <span>{JSON.stringify(state.subscribe)} </span>
      </p>
      <p>
        <button onClick={handleLike}> Like </button>
        <span>{like}</span>
      </p>
      <p>
        <button onClick={handleDislike}> Dislike </button>
        <span>{dislike}</span>
      </p>
      <p>
        <button onClick={handleTriple}> Triple Like </button>
        <span>{state.dislike}</span>
      </p>
    </div>
  );
}
