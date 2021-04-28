import { useState, useEffect, useRef } from 'react';
import { getCivilizations } from './../helpers/getCivilizations';

export const useFetchApi = () => {

    const [pueblos, setPueblos] = useState({
        data: [],
        loading: false
    });

    const isMounted = useRef(true);

    useEffect( () => {
        return () => 
        isMounted.current = false;
    })

    useEffect(() => {
        setPueblos({
            data: [],
            loading: false
        })
        if(isMounted.current){

        getCivilizations()
            .then(civil => {
                setPueblos({
                    data: civil,
                    loading: true
                })
            })
        } else {
            console.log('setPueblos no se llamó');
        }
    }, []);

    return pueblos;

}
