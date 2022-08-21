function SidebarPresenter(props){   // assume a model prop



    return <SidebarView  removeDish ={id => props.model.removeFromMenu(id)}
     dishChoice={id => props.model.setCurrentDish(id)}  
     dishes={props.model.dishes}  
     guests = { props.model.numberOfGuests} 
      setGuests = { x => props.model.setNumberOfGuests(x)} 
     />; 
    
}
 
 