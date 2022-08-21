class DinnerModel{
    constructor(guests =2, dishes=[], currentDish=null, currentDishDetails=null){
       this.observers = [];
       this.numberOfGuests = guests;
       this.currentDish = currentDish;
       this.dishes=dishes;
    }
    
    setNumberOfGuests(x){
        if(x <= 0 || !Number.isInteger(x)){

            throw "Number of dinner guests cannot be zero or negative";
        }
        else {
            this.numberOfGuests = x;
        }
        this.notifyObservers();
 } 

 setDishes(dishes){
    this.dishes =[...dishes];
    this.notifyObservers();
}

setCurrentDish(id){
    if(this.currentDish===id) {
        throw("the dish id already exists")
    }
    this.currentDish = id;
    this.currentDishDetails= this.currentDishError= null;          // JS assignment expression
    if(this.currentDish!==null)      
       DishSource.getDishDetails(this.currentDish)
        .then(data => { this.currentDishDetails=data; this.notifyObservers();})
        .catch(error=> { this.currentDishError=error; this.notifyObservers();})    
}


 addToMenu(dish){
   // check whether dish id already exit or not! 
    this.dishes.forEach(d=>{
        if (d.id === dish.id) 
        throw Error("Dish already added")});
   // if not added all of dishes + new dish(at last) in new array
        this.dishes = [dish, ...this.dishes];
        this.notifyObservers();
 }


// use filter to remove from dishes the dish with the ID dishData.id
    removeFromMenu(dish){
    this.dishes =this.dishes.filter(d => d.id !== dish.id);
    this.notifyObservers();
}
 
addObserver(callback){
    this.observers = this.observers.concat(callback);
}
removeObserver(callback){
    this.observers = this.observers.filter(item => item !== callback)
}
notifyObservers(){
    this.observers.forEach(cb=>cb());
}

}

function getIngredients(dishArr) {
    const result = {}; // object used as mapping
    dishArr.forEach(d => d.extendedIngredients.forEach(i => {
        if (!result[i.id])

            result[i.id] = { ...i };

        else { result[i.id].amount = i.amount + result[i.id].amount }
    }))
    console.log(result)
    return Object.values(result);
}





 
 