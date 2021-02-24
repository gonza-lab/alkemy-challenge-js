import { useCallback, useEffect, useRef, useState } from 'react';

const useInputEffect = () => {
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = useCallback(() => setIsFocus(true), []);
  const onBlur = useCallback(() => setIsFocus(false), []);

  return { onFocus, onBlur, isFocus };
};

export default useInputEffect;
