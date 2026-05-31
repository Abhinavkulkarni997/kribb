import {create} from "zustand";

export type PropertyType="apartment" | "house" | "villa" | "studio" | null;

interface FilterState{
    search:string;
    type:PropertyType;
    bedrooms:number|null;
    minPrice:number|null;
    maxPrice:number|null;

    setSearch:(value:string)=>void;
    setType:(value:PropertyType)=>void;
    setBedrooms:(value:number|null)=>void;
    setMinPrice:(value:number|null)=>void;
    setMaxPrice:(value:number|null)=>void;
    resetFilters:()=>void;
}

export const useFilterStore=create<FilterState>
</FilterState>((set))