function SearchFormView(props){
    return (
    <div>
        <input placeholder='Please enter type of dish here' onChange={ e => props.onText(e.target.value) }></input>
        <select onChange = { e => {console.log(e); props.onDishType(e.target.value);}}> 
            <option>Choose:</option> 
             {props.options.map( function(opt){
                return <option value={opt}>{opt}</option> 
            })}
        </select>
        <button class = "searchButton" onClick={ event => props.onSearch() } >Search!</button>
        <button class = "summaryButton" onClick={ event =>  window.location.hash="#summary" } > Summary </button>
    </div>
    );
}

function SearchResultsView({ searchResults, dishChosen, promisingMore, onBottomScroll }){ 
    const ref = React.useRef();
	const inViewPort = useIntersection(ref, '0px');

	if (inViewPort && !promisingMore && searchResults.length < 600) {
		onBottomScroll(searchResults.length);
	}

    return(
        <>
    <div class="searchView">
       { searchResults.map(item => 
        <span class="searchResult" onClick = {e => {dishChosen(item.id)}}>
        <img src={'https://spoonacular.com/recipeImages/'+item.image} class="picsInSearchResult"></img>
        <div>{item.title}</div>
    </span>
)}
    </div>
        {promisingMore && <img src="http://www.csc.kth.se/~cristi/loading.gif" height={80} />}
			<div class="searchEnd" ref={ref} />

            </>
	);
}

