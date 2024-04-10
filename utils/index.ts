

export async function fetchCars() { 
    const headers = {
        'X-RapidAPI-Key': '13a273e64emshd8290ca9e7d9f8cp15f461jsn9729713eaaa3',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    };
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers:headers,
    });

    const result = await response.json();
    return result;

};