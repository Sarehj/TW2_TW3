function SummaryView(props)
{

     return (  
          <div>
              <h1 class= "shoppLH">Shopping list</h1>
              Dinner for <span title="nr. guests">{props.persons}</span> guests:
         {
 
           <div class ="shoppingList">
          
           <table id="ingredientList">
                <thead>
                     <tr id = "ingredientAisleQuantity">
                          <td>ingredient</td>
                          <td>Aisle</td>
                          <td>Quantity</td>
                     </tr>
                </thead>
                <tbody>{
                    props.ingredients.sort(compareIngredients).map(ingredient =>
                     <tr key = {ingredient.id}>
                          <td>{ingredient.name}</td>
                          <td>{ingredient.aisle}</td>
                          <td>{ingredient.measures.metric.amount * props.persons} {ingredient.measures.metric.unitLong}</td>
                     </tr>
                )}</tbody>
           </table>
      </div>
            
                }   
        </div> 
    );    
         
     

}


function compareIngredients(a,b){
     if(a.aisle < b.aisle)
         return -1;
     else if(a.aisle > b.aisle)
         return 1;
     

     else if(a.name < b.name)
         return -1;
     else if(a.name > b.name)
         return 1;
     else
         return 0;    
 }
 