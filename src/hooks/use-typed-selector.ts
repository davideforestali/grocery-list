import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store";

// this is currently the way to use useSelector hook
// with typescript, using useTypedSelector instead
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
