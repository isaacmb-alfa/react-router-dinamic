



export const getCivilization = async (id) => {

    const url = `https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`;
    const res = await fetch(url);
    const datos = await res.json();

    return datos;

}
