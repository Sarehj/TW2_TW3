function SidebarView(props){
  return(

<div> 
   {/* Header for choose #of guests */}
   <h1 class = "headerGuests"> Number of guests</h1>
   {/* position of buttons and #of Guests */}
   <div class = "BG">
    
    {/* Sidebar button */}
   <button class = "BS" onClick = { x => props.setGuests(props.guests - 1) }
    disabled = {props.guests===1}>- </button> 
      { props.guests }
      <button class = "BS" onClick = { x => props.setGuests(props.guests + 1)}>+</button> </div> 
    
    {/* Header for list of chosen dishes */}
    <h1 class = "headerDishes">Your dishes</h1>


  {/* Table */}
  <table class = "table">
   {
    props.dishes.sort(compareDishes).map(dish =>
      <tbody key = {dish.id + Math.random()}>   {/*render the dish */}
          <tr>
              <td><button onClick = {e => props.removeDish(dish)} >x</button></td>
               {/* <a id> used to point to a specific style declaration(click on the name) in style sheet */}
              <td><a href= "ClickN" onClick = {e => {e.preventDefault(); props.dishChoice(dish.id);}}>{dish.title}</a></td>
              <td>{dish.pricePerServing}</td>
            
          </tr>
      </tbody>)}
              <tbody>
                <tr>
                  <td>Total: 
                    {Number.parseFloat(props.dishes.reduce((acc,currentValue)=>
                    acc+currentValue.pricePerServing,0)*props.guests).toFixed(2)}  {/* to render a number with a fixed number of decimals.*/}
                  </td>
                    
                </tr>
                </tbody>
                
                
                
    </table>


</div>
  );

}


const types=["starter", "main course", "dessert"];
function dishType(dish){
    if(dish.dishTypes){
    	const tp= dish.dishTypes.filter(value => types.includes(value));
    	if(tp.length)
	    return tp[0];
    }
    return "";
}



function compareDishes(a,b){
  let ai= types.indexOf(dishType(a));
  let bi= types.indexOf(dishType(b)); 
  if(ai < bi) 
      return -1;
  else if (ai > bi)
      return 1; 
  else (ai === bi)
      return 0;
}

