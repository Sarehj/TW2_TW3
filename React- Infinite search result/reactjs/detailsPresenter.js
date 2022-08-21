function DetailsPresenter({ model}){ 

    const [currentDishDetails, setCurrentDishDetails]=React.useState();
    const [currentDishError, setCurrentDishError]=React.useState();
    const [currentDish, setCurrentDish]=React.useState();
    const [dishes, setDishes]=React.useState([]);

    React.useEffect( function(){  
        const listener = function(){
            setCurrentDishDetails(model.currentDishDetails);
            setCurrentDishError(model.currentDishError);
            setCurrentDish(model.currentDish);
            setDishes(model.dishes);
        }
        
        model.addObserver(listener); 
        return function(){ model.removeObserver(listener) }
    }, [])

    return  PromiseNoData(currentDish, currentDishDetails, currentDishError) || 
        <DetailsView 
            dishes={model.dishes}
            dish={currentDishDetails} 
            people={model.numberOfGuests} 
            dishAdded={(dish)=> model.addToMenu(dish)}
            isDishInMenu={(undefined === dishes.find(d => model.currentDish === d.id))?false:true} />
       
    }
     