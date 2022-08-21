function DetailsView(props) {
    return (
        <div class="detailView">
            <div class="imgandprice">
                <img class="imgView" src={props.dish.image}/>
               
                <div class="priceguests">
                    <div>Price: {props.dish.pricePerServing}</div>
                    <div>for {props.people || 0} guests: {(props.people * props.dish.pricePerServing).toFixed(2)}</div>
                </div>
                
                <div class = "Twobtn">
                     <button class="addBtn" onClick = {() => { props.dishAdded(props.dish); window.location.hash="#search"}} disabled = {!props.isDishInMenu === undefined}>Add to menu</button>
                    <button  id="cancel" onClick = {() => window.location.hash="#search"}>Cancel</button>
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

                <div id = "dishMoreInformation">
                <a href={props.dish.sourceUrl}>More information</a>
                </div>

              
        </div>
    );
}

function removeHTMLTags(string) {
    var div = document.createElement("div");
    div.innerHTML = string;
    return div.textContent || div.innerText || "";
}

function dishTypeText(array) {
    var text = "";
    for (var i = 0; i < array.length; i++) {
        text += array[i];
        if (i < array.length - 1) {
            text += "/";
        }
    }
    return text;
}

function tabMenu(event, desiredTab) {
    var tab = document.getElementsByClassName("tab-content");
    var links = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tab.length; i++) {
        tab[i].style.display = "none";
        links[i].className = links[i].className.replace(" active", "");
    }
    document.getElementById(desiredTab).style.display = "block";
    event.currentTarget.className += " active";
}
