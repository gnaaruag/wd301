import { Reducer } from "react";
import { CommentListState, CommentActions, CommentListAvailableAction } from "./types";

export const initialState: CommentListState = {
  comments: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const commentReducer: Reducer<CommentListState, CommentActions> = (
  state = initialState,
  action
): CommentListState => {
  switch (action.type) {
    case CommentListAvailableAction.FETCH_COMMENT_REQUEST:
      return { ...state, isLoading: true };
    case CommentListAvailableAction.FETCH_COMMENT_SUCCESS:
      return { ...state, isLoading: false, comments: action.payload };
    case CommentListAvailableAction.FETCH_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case CommentListAvailableAction.ADD_COMMENT_REQUEST:
      return { ...state, isLoading: true };
    case CommentListAvailableAction.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: [action.payload,...state.comments],
      };
    case CommentListAvailableAction.ADD_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};