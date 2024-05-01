/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react';

export interface Comment {
    User: any;
    // User: any;
    createdAt: ReactNode;
    description: string;
    id: number;
    comment: string;
    name: string;
    // timestamp: DOMHighResTimeStamp;
}


export interface CommentListState {
    comments: Comment[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
}

export enum CommentListAvailableAction {
    FETCH_COMMENT_REQUEST = "FETCH_COMMENT_REQUEST",
    FETCH_COMMENT_SUCCESS = "FETCH_COMMENT_SUCCESS",
    FETCH_COMMENT_FAILURE = "FETCH_COMMENT_FAILURE",
    ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST",
    ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS",
    ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE",
}

export type CommentActions =
    | { type: CommentListAvailableAction.FETCH_COMMENT_REQUEST }
    | { type: CommentListAvailableAction.FETCH_COMMENT_SUCCESS, payload: Comment[] }
    | { type: CommentListAvailableAction.FETCH_COMMENT_FAILURE, payload: string }
    | { type: CommentListAvailableAction.ADD_COMMENT_REQUEST }
    | { type: CommentListAvailableAction.ADD_COMMENT_SUCCESS, payload: Comment }
    | { type: CommentListAvailableAction.ADD_COMMENT_FAILURE, payload: string };


export type CommentDispatch = React.Dispatch<CommentActions>;

export type CommentsPayload = Omit<
    Comment,
    "id" | "createdAt" | "user" | "task_id"
>;