/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { charactersApi } from "../api";

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })


    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true,
        });
        try {
            const { data } = await charactersApi.get(url);
            setState({
                data,
                isLoading: false,
                hasError: null,
            });
        } catch (error) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
            });
        }
    }

    return {
        data:      state.data,
        isLoading: state.isLoading,
        hasError:  state.hasError,
        getFetch
    };
}