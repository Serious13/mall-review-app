export default interface Mall {
    "id": number,
    "name": string,
    "location": {
        "city": string,
        "state": string,
        "country": string,
        "coordinates": object
    },
    "size_sqft": number,
    "stores_count": number,
    "rating": number,
    "opening_hours": string,
    "amenities": string[],
    "contact": {
        "phone": string,
        "website": string
    }
}   