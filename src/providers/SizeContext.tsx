import { createContext, useContext, useState, useEffect } from "react";
import { ScreenTypes } from "../interfaces";
import { createSizeCtx, calculateScreenType } from "../helper";

interface SizeContextState {
  screenType: ScreenTypes;
}

const [SizeContextProvider, useSizeContext] = createSizeCtx<SizeContextState>();

export { useSizeContext };

interface Props {
  children?: React.ReactNode;
}

const SizeContext = ({ children }: Props) => {
  const [screenType, setScreenType] = useState<ScreenTypes>(
    calculateScreenType(window.innerWidth)
  );

  useEffect(() => {
    const windowEventListener = () => {
      setScreenType(calculateScreenType(window.innerWidth));
    };
    window.addEventListener("resize", windowEventListener);

    return () => {
      window.removeEventListener("resize", windowEventListener);
    };
  });

  const initialState: SizeContextState = {
    screenType: screenType,
  };

  return (
    <SizeContextProvider value={initialState}>{children}</SizeContextProvider>
  );
};

export default SizeContext;
