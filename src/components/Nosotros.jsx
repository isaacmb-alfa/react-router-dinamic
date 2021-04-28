import React from 'react';
import {Link} from "react-router-dom";
import { useFetchApi } from '../hooks/useFetchApi';

export const Nosotros = () => {

const {data, loading} = useFetchApi();


    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    loading && data.map(item => (
                        <li key={item.id}>
                            <Link to={`/nosotros/${item.id}`}>
                                {item.name} - {item.expansion}
                            </Link>
                        </li>
                    ))
                  
                }
            </ul>
        </div>
    )
}
