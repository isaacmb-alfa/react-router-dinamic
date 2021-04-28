import React from 'react'
import { useParams } from 'react-router-dom';
import { useFetchCivil } from './../hooks/useFetchCivil';

export const User = () => {

    const { id } = useParams();
    const {data} = useFetchCivil(id);

    // console.log(data);

    return (
        <>
           <h1>{data.name}</h1>
            <h2>{data.expansion}</h2>
            <p>Tipo de armas {data.army_type}</p>

        </>
    )
}
