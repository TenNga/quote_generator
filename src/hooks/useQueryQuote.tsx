import { useQuery } from "react-query";
import React from "react";
import axios from "axios";

const fetchQuote = async () => {
    const BASE_URL = 'https://api.quotable.io/quotes';
    const resp = await axios.get(BASE_URL + '/random')
    return resp;
}

export const useQueryQuote = () => {
    return useQuery(['random-quote'],fetchQuote,{ enabled: false });
}