function SidebarView(props) {
    return (
        <div class="sidebarView">
            <h1 class = "headerGuests"> Number of guests</h1>
            <div class="BG">
               
                <button  class = "BS"
                    disabled={props.guests <= 1}
                    onClick={() => props.setGuests(props.guests - 1)}>-
                </button>

                <span> {props.guests} </span>

                <button class="BS"
                    onClick={() => props.setGuests(props.guests + 1)}>+
                </button>
            </div>


            <h1 class = "headerDishes">Your dishes</h1>
            <table class="table">
                <tbody>
                    {[...props.dishes].sort(compareDishes).map((dish) => {
                        return (
                            <tr id={dish.id}>
                                <td>
                                    <button class="removeDish" onClick={() => props.removeDish(dish.id)}>
                                        X
                                    </button>
                                </td>

                                <td>
                                    <a href="details" onClick={(e) => {
                                            e.preventDefault();
                                            props.dishChoice(dish.id);
                                            window.location.hash = "#details";}}>
                                        {dish.title}
                                    </a>
                                </td>

                                
                                <td>{dish.pricePerServing}</td>
                            </tr>
                        );
                    })}
             </tbody>
             <tbody>
                    <tr>
                        <td class="totalText">Total: </td>
                        <td></td>
                        <td class="dishPrice totalText">
                            {`$${props.dishes
                                .reduce(
                                    (accumulator, value) =>
                                        accumulator +
                                        value.pricePerServing * props.guests,
                                    0
                                )
                                .toFixed(2)}`}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

const types = ["starter", "main course", "dessert"];
function dishType(dish) {
    if (dish.dishTypes) {
        const tp = dish.dishTypes.filter((value) => types.includes(value));
        if (tp.length) return tp[0];
    }
    return "";
}

function compareDishes(a, b) {
    let ai = types.indexOf(dishType(a));
    let bi = types.indexOf(dishType(b));
    if (ai < bi) return -1;
    if (ai > bi) return 1;
    return 0;
}

const VueSidebarLocalState = {
    data() {
        return { number: 2 };
    },
    render() {
        return (
            <SidebarView
                guests={this.number}
                setGuests={(guestsAmount) => (this.number = guestsAmount)}
            />
        );
    },
};

function ReactSidebarLocalState() {
    const [num, setNumber] = React.useState(2);
    return <SidebarView guests={num} setGuests={(x) => setNumber(x)} />;
}
