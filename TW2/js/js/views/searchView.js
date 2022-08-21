function SearchFormView(props){
    return (
    <div>
        <input onChange={ e => props.onText(e.target.value) }></input>
        <select onChange = { e => {console.log(e); props.onDishType(e.target.value);}}> 
            <option>Choose:</option> 
             {props.options.map( function(opt){
                return <option value={opt}>{opt}</option> 
            })}
        </select>
        <button onClick={ event => props.onSearch() } >Search!</button>
    </div>
    );
}

function SearchResultsView(props){ 
    
    return <div class="searchView">
       {
       props.searchResults.map(item => 
        <span class="searchResult" onClick = {e => {props.dishChoice(item.id)}}>
        <img src={'https://spoonacular.com/recipeImages/'+item.image} class="picsInSearchResult"></img>
        <div>{item.title}</div>
    </span>
)}
</div>
}

