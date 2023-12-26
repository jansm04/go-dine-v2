import openai from "./openai";
import requestHeaders from "./place-headers";

const { locations, provinces } = require('./maps');

const callAPI = async (city: string, type: string, mood: string) => {
    try {
        const ai_response = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [{
              "role": "user", 
              // PROMPT: asks for list of restaurant names ready to be parsed
              "content": `Print one line of text consisting of the 4 best ${mood} ${type} restaurants in ${city}, Canada. 
                          Include names ONLY, each separated by a '#' symbol.`,
          }]
        });
        // create array of restaurant names
        var count = 0;
        while (true) {
          const text = ai_response.choices[0].message.content;
          console.log("AI Response: " + text);
          var words = text.split('#');
          console.log(`Attempt ${count}: ${words}`);
          if (words.length == 4) 
            break;
          if (count++ == 5) {
            console.log("Error: failed to parse AI reponse string.");
            return [{
              id: 'error',
              displayName: { text: 'A problem occurred while fetching the response. Please try again.', languageCode: 'en' }
            }];
          }
        }
      
        // map array to place objects using Google Places API
        let places_set = new Set<string>();
        for (let i = 0; i < words.length; i++) {
          const name = words[i];
          const places_response = await fetch("https://places.googleapis.com/v1/places:searchText", {
            method: "POST",
            body: JSON.stringify({
              textQuery: name,
              locationBias: {
                circle: {
                  center: locations.get(city),
                  radius: 50000.0
                }
              },
              language_code: "en"
            }),
            headers: requestHeaders
          });
          if (places_response.ok) {
            const json = await places_response.json();
            if (json.places.length == 0) {
              console.log(`No place details found for ${name}.`);
              continue;
            }
            let found = false;
            for (let j = 0; j < json.places.length; j++) {
              if (json.places[j].formattedAddress.includes(provinces.get(city))) {
                let json_string = JSON.stringify(json.places[j]);
                if (places_set.has(json_string)) {
                  console.log("Duplicate placed found.");
                  continue;
                }
                places_set.add(json_string);
                found = true;
                break;
              }
            }
            if (!found) {
              console.log(`No place details found for ${name}.`);
            }
          } else {
            console.log(`An error occurred fetching the place details.`);
          } 
        }
        if (places_set.size > 0) {
          var places_array = new Array<string>();
          places_set.forEach((place) => {
            places_array.push(JSON.parse(place));
          })
          console.log(places_array);
          return places_array;
        }
        else {
          return [{
            id: 'error',
            displayName: { text: 'Could not find any results this time. Please try again.', languageCode: 'en' }
          }];
        }
    } catch (error) {
        console.log(error);
        return [{
          id: 'error',
          displayName: { text: 'A problem occurred while fetching the response. Please try again.', languageCode: 'en' }
        }];
    }    
}

export default callAPI;