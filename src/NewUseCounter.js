import React, { useState } from "react";

export default function NewUseCounter() {
  const [state, setState] = useState(0);

  const handleLike = () => {
    setState((currentState) => currentState + 1);
  };

  const handleTriple = () => {
    handleLike();
    handleLike();
    handleLike();
  };

  return [state, handleLike, handleTriple];
}
