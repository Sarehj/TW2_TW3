class DinnerModel{
    constructor(guests =2, dishes=[], currentDish=null){
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
 } 

 setDishes(dishes){
    this.dishes = dishes;
}

setCurrentDish(id){
    this.currentDish = id;
}


 addToMenu(dish){
   // check whether dish id already exit or not! 
    this.dishes.forEach(d=>{
        if (d.id === dish.id) 
        throw Error("Dish already added")});
   // if not added all of dishes + new dish(at last) in new array
        this.dishes = [dish, ...this.dishes];
 }


// use filter to remove from dishes the dish with the ID dishData.id
    removeFromMenu(dish){
    this.dishes =this.dishes.filter(d => d.id !== dish.id);}
 

// removeFromMenu(i){
//     if(this.currentDish &&this.currentDish.id ==i.id){
//         this.currentDish.splice(0,this.currentDish.length);
//     }
//     var index = this.dishes.findIndex(item=>item.id==i.id)

//     if(index!=-1)  this.dishes.splice(index,1)
// }


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





 
 