import { useEffect, useState } from 'react';

const useInputEffect = () => {
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);

  return { onFocus, onBlur, isFocus };
};

export default useInputEffect;
