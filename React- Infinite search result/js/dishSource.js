//We calling our API to get first 15 results.
const ELEM_PER_SEARCH = 15;

const  DishSource={   // JS object creation literal
    apiCall(params) {
     return fetch(BASE_URL+params, {
             "method": "GET",              // HTTP method
             "headers": {                  // HTTP headers
          'X-Mashape-Key' : API_KEY,
  "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          }
     })
        //check http response    
        .then(HTTPError)

       // from HTTP response headers to HTTP response data
       .then(response => response.json())   ;

    }
    ,   

   searchDishes(params = {}) {
		return DishSource.apiCall(
			'/recipes/search?' + new URLSearchParams({ number: ELEM_PER_SEARCH, ...params })
		).then((data) => data.results);
	},


    getDishDetails(id){ 
       return DishSource.apiCall("recipes/" + id + "/information")
        // catch errors
         .catch(console.error);

        }
};



 function HTTPError(response) {
    if(response.ok)
       return response;
    throw Error(response.statusText);
  }