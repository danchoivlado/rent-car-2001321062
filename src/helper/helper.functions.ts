import { createContext, useContext } from "react";
import { ScreenTypes } from "../interfaces";

export const createSizeCtx = <T>() => {
  const SizeContext = createContext<T | undefined>(undefined);
  const useSizeContext = () => {
    const currentContext = useContext(SizeContext);
    if (!currentContext) {
      throw new Error("Context initial value was not provided");
    }
    return currentContext;
  };

  return [SizeContext.Provider, useSizeContext] as const;
};

export const calculateScreenType = (screenSize: number): ScreenTypes => {
  if (screenSize < 768) return ScreenTypes.SM;
  if (screenSize < 992) return ScreenTypes.MD;
  return ScreenTypes.LG;
};
