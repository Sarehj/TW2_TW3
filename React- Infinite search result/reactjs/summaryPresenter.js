function SummaryPresenter({model}){
    
  const [number, setNumber]=React.useState();
  const [dishes, setDishes]=React.useState();

  React.useEffect( function(){  
    const listener = function(){
      setNumber(model.numberOfGuests);
      setDishes(model.dishes)
    }
    model.addObserver(listener); 
    return function(){ model.removeObserver(listener) }
      }, [])
  
  return <SummaryView    
  persons={model.numberOfGuests} 
        guests={model.numberOfGuests} 
          menu={model.dishes} 
          model={model}
          ingredients = {getIngredients(model.dishes)}> 

  </SummaryView>
}