/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_ENDPOINT } from "../../config/constants";

export const addMember = async (dispatch: any, args: any) => {
    try {
        console.log(args);
        const token = localStorage.getItem("authToken") ?? "";
        const response = await fetch(`${API_ENDPOINT}/users`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(args)
        });
        if (!response.ok) {
            throw new Error("failed to create a Members");
        }
        const data = await response.json();

        if (data.errors && data.errors.length > 0) {
            return { ok: false, error: data.errors[0].message };
        }
        dispatch({ type: 'ADD_MEMBER_SUCCESS', payload: data.user });

        return { ok: true }
    }
    catch (error) {
        console.error("operation failed", error);
        return { ok: false, error };
    }
}
export const deleteMembers = async (dispatch: any, id: string) => {
    try {

        const token = localStorage.getItem("authToken") ?? "";
        const response = await fetch(`${API_ENDPOINT}/users/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();

        if (data.errors && data.errors.length > 0) {
            return { ok: false, error: data.errors[0].message };
        }
        if (!response.ok) {
            throw new Error("failed to remove a Member");
        }
        dispatch({ type: 'DELETE_MEMBER_SUCCESS', payload: data });

        return { ok: true }
    }
    catch (error) {
        console.error("operation failed", error);
        return { ok: false, error };
    }
}

export const fetchMembers = async (dispatch: any) => {
    console.log("Type and value of dispatch:", typeof dispatch, dispatch);
    const token = localStorage.getItem("authToken") ?? "";

    try {
        dispatch({ type: "FETCH_MEMBERS_REQUEST" });
        const response = await fetch(`${API_ENDPOINT}/users`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
        });
        const data = await response.json();
        console.log(data)
        dispatch({ type: "FETCH_MEMBERS_SUCCESS", payload: data });

    } catch (error) {
        console.log('Error fetching members:', error);
        dispatch({ type: "FETCH_MEMBERS_FAILURE" });
    }
};