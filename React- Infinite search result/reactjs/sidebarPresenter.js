function SidebarPresenter({model}){

  const [guests, setGuests]=React.useState(0);
  const [dishes, setDishes]=React.useState([]);

  React.useEffect( function(){  
    const listener = function(){
      setGuests(model.numberOfGuests);
      setDishes(model.dishes)
    }

    model.addObserver(listener); 
    return function(){ model.removeObserver(listener) }
      }, [])
  
  return <SidebarView    
    dishes={dishes}
    removeDish={id => model.removeFromMenu(id)}
    dishChoice = {id=> {model.setCurrentDish(id); window.location.hash="#summary"}}
    model={model}
    guests={guests}
    setGuests = { x => model.setNumberOfGuests(x)} 
  ></SidebarView>
}