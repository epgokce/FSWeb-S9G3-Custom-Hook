import React, { useState } from "react";

function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  const toggleHandler = (e) => {
    e.preventDefault();
    setValue(!value);
  };

  return [value, toggleHandler];
}
export default useToggle;