/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useReducer,
  PropsWithChildren,
} from "react";
import { CommentState, CommentDispatch } from "./types";
import { commentReducer, initialCommentState } from "./reducer";
const CommentStateContext = createContext<CommentState>(initialCommentState);
const CommentDispatchContext = createContext<CommentDispatch>(() => {});

export const CommentProvider: React.FC<PropsWithChildren> = ({ children }) => {
  // Create a state and dispatch with `useReducer` passing in the `taskReducer` and an initial state. Pass these as values to our contexts.
  const [state, dispatch] = useReducer(commentReducer, initialCommentState);
  return (
    <CommentStateContext.Provider value={state}>
      <CommentDispatchContext.Provider value={dispatch}>
        {children}
      </CommentDispatchContext.Provider>
    </CommentStateContext.Provider>
  );
};

// Create helper hooks to extract the `state` and `dispacth` out of the context.
export const useCommentState = () => useContext(CommentStateContext);
export const useCommentDispatch = () => useContext(CommentDispatchContext);
