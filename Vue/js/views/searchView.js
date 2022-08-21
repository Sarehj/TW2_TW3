function SearchFormView(props) {
    return (
        <div class="searchFormViewTop">
            <input onChange = { event => props.onText(event.target.value) } placeholder='Please enter type of dish here'/>

            <select onChange = { event => props.onDishType(event.target.value) }>
                <option>Choose:</option>
                {props.options.map(function(opt) { return <option>{opt}</option> })}
            </select>

            <button class = "searchButton" onClick = { () => props.onSearch() }>Search</button>
            <button class = "summaryButton" onClick={e => window.location.hash = "#summary"}>Summary</button>
        </div>
    );
}

function SearchResultsView(props) {
    return (
        <div class="searchResultView">
            <div class="searchView">
                {props.searchResults.map(function(result) {
                    return (
                        <span class="searchResult" key = {result.id} onClick = {() =>
                            {props.dishChosen(result.id); window.location.hash="#details";}}>
                            <img  class="picsInSearchResult" src = {`https://spoonacular.com/recipeImages/${result.image}`}/>
                            <h3>{result.title}</h3>
                        </span>
                    );
                })}
            </div>
        </div>
    );
}

function convertTimeHour(time) {
    return `${Math.floor(time / 60) ? Math.floor(time / 60) + " hours": ""}  ${time % 60}`;
}