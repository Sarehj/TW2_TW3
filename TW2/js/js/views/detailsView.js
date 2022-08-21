function DetailsView(props) {
    
    function addToMenu(dish){
        if(props.isDishInMenu){
            alert('exist in  menu')   //display a virtual alert box
        }
        else{
            }
    }

    function cancel(){
         console.log('cancel')
    }

    return <div class="detailView">
            {
                
                
                props.dish? <div class="flex">
                    <div>
                <div class="imgandprice">
                    <img class="imgView" src={props.dish.image}></img>
                    <div class= "priceguests">
                        <div>Price: {props.dish.pricePerServing}</div>
                        <div>for {props.people || 0} guests: {(props.people * props.dish.pricePerServing).toFixed(2)}</div>
                    </div>
                </div>
                

                <div class="instructions">
                    {
                        props.dish.extendedIngredients.map(item => {
                            return <div>{item.name}: {item.measures.metric.amount} {item.measures.metric.unitShort}</div>
                        })
                    }
                </div>
                <div class="summary" >
                    {
                        props.dish.analyzedInstructions[0].steps.map(item => {
                            return <div>{item.number}. {item.step}</div>
                        })
                    }
                </div>
                
                {/* <div id = "recipeInstruction">{item.number}{props.dish.instructions}</div> */}
    

                <div id = "dishMoreInformation">
                <a href={props.dish.sourceUrl}>More information</a>
                </div>

        </div>
        
            <button class="addBtn" onClick={e=>addToMenu(props.dish)}>add to menu</button>
            <button id="cancel" onClick={cancel}>cancel</button>
        </div>:''
    }
</div> 
    
}
