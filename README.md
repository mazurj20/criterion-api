# **Criterion Collection API**

##### This is a RESTful API that contains data of all the films in the Criterion Collection.

## Features:

###### Find all of the films, find all films from a certian country, search by film title, add a film, update a film, delete a film.

#### Technologies Used:

###### Express, Mongoose, NodeJS, Mongodb.

#### Root URL(returns all films):

> ###### https://criterion-api.herokuapp.com

## Endpoints


#### Find film by title

> ###### /Title{Title}


#### Find all films from a given country

> ###### /Country/{Country}

#### Update a film(find by title)

> ###### /Update/{Title}

#### Delete film(find by title)

> ###### /Delete/{Title}


###### Example: https://criterion-api.herokuapp.com/Title/Taipei%20Story :

```
{
    "_id": "5f57ff4594efcd7260ae2705",
    "Title": "Taipei Story",
    "Description": "Edward Yang’s second feature is a mournful anatomy of a city caught between the past and the present. Made in collaboration with Yang’s fellow New Taiwan Cinema master Hou Hsiao-hsien,Taipei Storychronicles the growing estrangement between a washed-up baseball player (Hou, in a rare on-screen performance) working in his family’s textile business and his girlfriend (Tsai Chin), who clings to the upward mobility of her career in property development. As the couple’s dreams of marriage and emigration begin to unravel, Yang’s gaze illuminates the precariousness of domestic life and the desperation of Taiwan’s globalized modernity.Taipei Storywas restored by The Film Foundation’s World Cinema Project at the Cineteca di Bologna/L’Immagine Ritrovata laboratory, in association with the Cinémathèque Royale de Belgique and Hou Hsiao-hsien.",
    "Director": "Edward Yang",
    "Country": "Taiwan",
    "Year": 1985,
    "Language": "Hokkien,                                          Mandarin",
    "Image": "https://s3.amazonaws.com/criterion-production/films/b8aa5bf1a2e514e781a4974edeb7f07a/khYYYxHBAKOhkTFow0fq2YBsI73A0F_large.jpg",
    "__v": 0
}

```
