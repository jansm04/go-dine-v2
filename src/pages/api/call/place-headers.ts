const places_key = process.env.PLACES_KEY;

const requestHeaders: HeadersInit = new Headers();

requestHeaders.set
(
    'Content-Type', 
    'application/json; charset=UTF-8'
);
requestHeaders.set
(
    'X-Goog-Api-Key', 
    places_key ? places_key : ""
);
requestHeaders.set
(
    'X-Goog-FieldMask', 
    'places.displayName,places.formattedAddress,places.priceLevel,places.location,places.websiteUri,places.id,places.rating'
);

export default requestHeaders;