import {useState, useEffect} from 'react';
import {getCivilization} from './../helpers/getCivilization';

export const useFetchCivil = (id) => {

    const [pueblo, setPueblo] = useState({
        data:[]
        });

    useEffect(() => {
        getCivilization(id)
        .then(civil => {
            setPueblo({
                data: civil
            })
        })
    }, [id]);

    return pueblo;

}
