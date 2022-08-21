const DB_REF = 'dinnerModel' + 18;

function persistModel(model) {
    let loadingFromFirebase = false;
    
    model.addObserver(function () {
        if (loadingFromFirebase) return;
        firebase.database().ref(DB_REF).set({
            guests: model.numberOfGuests,
            currentDish: model.currentDish,
            dishes: model.dishes,
        });
    });
    firebase.database()
        .ref(DB_REF)
        .on("value", function (data) {
            loadingFromFirebase = true;
            try {
                if (data.val()) {
                    model.setNumberOfGuests(data.val().guests);
                    model.setCurrentDish(data.val().currentDish || null);
                    model.setDishes(data.val().dishes || []);
                }
            } catch (e) {
                console.log(e);
            }
            finally {loadingFromFirebase = false; }           
        });
}
