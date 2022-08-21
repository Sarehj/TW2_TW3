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
    ,   // comma between object entries
        // params = {type, query};
    searchDishes({type, query}){ 
       

          //search endpoint + query string
        //return DishSource.apiCall('/recipes/search?'+ new URLSearchParams(params))
       
        let searchParams = new URLSearchParams({});
          if(query)
            searchParams.append("query", query);
          if(type)
            searchParams.append("type", type);
          
        let searchText = "recipes/search";
        let searchParamString = searchParams.toString();
        if(searchParamString)
           searchText += "?";
           searchText += searchParams.toString();
  
        return this.apiCall(searchText)  
        .then(response => response.results) 
     }
    ,   
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