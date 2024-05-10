import { CarProps } from "@/types";


export async function fetchCars() { 
    const headers = {
        'X-RapidAPI-Key': '13a273e64emshd8290ca9e7d9f8cp15f461jsn9729713eaaa3',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    };
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera', {
        headers:headers,
    });

    const result = await response.json();
    return result;

};

export const calculateCarRent = (city_mpg:number,year:number) => { 
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
    return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getImage');
    const { make, year, model } = car;
    console.log(car)
    url.searchParams.append('customer', 'hrjavascript-mastery');
    //url.searchParams.append('target', 'minicompact');
    url.searchParams.append('make', "toyota");
    url.searchParams.append('modelFamily', 'corolla');
    //url.searchParams.append('zoomType', 'fullscreen');
    //url.searchParams.append('modelYear', `${year}`);
    //url.searchParams.append('angle', `${angle}`);
    return `${url}`;
} 