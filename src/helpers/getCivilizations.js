

export const getCivilizations = async () => {

    const url = `https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations`;
    const res = await fetch(url);
    const { civilizations } = await res.json();

    const civilization = civilizations.map(item => {
        return {
            id: item.id,
            name: item.name,
            expansion: item.expansion
        }
    });
    return civilization;
}
