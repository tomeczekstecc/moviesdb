import type {NextApiRequest, NextApiResponse} from 'next'

import {SEARCH_BASE_URL, POPULAR_BASE_URL} from "../../config";

import {basicFetch} from "../../api/fetchFunctions";

import type {Movies} from "../../api/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Movies>) {
    const {page, search} = req.query; // query params
    const endpoint = search ? `${SEARCH_BASE_URL}${search}&page=${page}` : `${POPULAR_BASE_URL}&page=${page}`;
    console.log(endpoint);

    const data = await basicFetch<Movies>(endpoint);
    res.status(200).json(data);
}
