import { MouseEventHandler } from 'react';

export interface CustomButtonProps{
    title: string;
    btnType?: 'button' | 'submit';
    containerStyles?: string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    textStyles?:string;
    rightIcon?:string;
    isDisabled?:boolean;
};


export interface SearchManufacturerProps { 
    manufacturer: string;
    setManufacturer:(manufacturer:string)=>void
}; 

export interface CarProps{
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: string;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
};