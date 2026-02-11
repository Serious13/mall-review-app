interface location {
    city : string;
    country : string;
    coordinates : coordinates; 
}

interface coordinates {
    lat : number;
    lng : number;
}
interface contact {
    phone: string;
    website: string;
} 

export interface User {
    email : string;
    password : number;
}

export interface Mall {
    name?: string;
    location? : {};
    size_sqft?: number;
    stores_count?: number;
    rating?: number;
    opening_hours?: string;
    amenities?: string[];
    contact?: {};
}

