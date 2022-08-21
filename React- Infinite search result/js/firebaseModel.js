const DB_REF = 'dinnerModel' + 18;

function persistModel(model) {
	let loadingFirebase = false;

	model.addObserver(() => {
		if (loadingFirebase) return;
		firebase.database().ref(DB_REF).set({
			guests: model.numberOfGuests,
			dishes: model.dishes,
			currentDish: model.currentDish,
		});
	});

	firebase
		.database()
		.ref(DB_REF)
		.on('value', (data) => {
			loadingFirebase = true;
			try {
				if (data.val()) {
					model.setNumberOfGuests(data.val().guests || 2);
					model.setDishes(data.val().dishes || []);
					model.setCurrentDish(data.val().currentDish || null);
				}
			} catch (e) {
				console.log(e);
			} finally {
				loadingFirebase = false;
			}
		});
}
