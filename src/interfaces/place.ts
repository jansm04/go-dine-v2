interface Place {
    id: string,
    formattedAddress: string,
    location: {
        longitude: number,
        latitude: number
    },
    rating: number,
    websiteUri: string,
    priceLevel: string,
    displayName: {
        text: string,
        languageCode: string
    }
};

export default Place;