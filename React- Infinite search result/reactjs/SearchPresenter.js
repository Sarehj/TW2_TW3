function SearchPresenter({model}){  

    const [txt, setTxt]=React.useState();
    const [dishType, setDishType]=React.useState();
    const [data, setData]=React.useState();
    const [error, setError]=React.useState();
    const [promise, setPromise]=React.useState();

    
    const [promiseMore, setPromiseMore]=React.useState();
    const [searchQuery, setSearchQuery] = React.useState('');
	const [searchType, setSearchType] = React.useState('');

    React.useEffect(function(){ 
        const promise = DishSource.searchDishes({})
        .then(setData)
        .catch(setError);
        setPromise(promise);
    }, []);


    React.useEffect(() => {
		if (promiseMore) {
			if (data) {
				const currentPromise = promise;
				promiseMore
					.then((d) => {
						if (currentPromise === promise) setData([...data, ...d]);
					})
					.catch((e) => {
						if (currentPromise === promise) {
							setData(null);
							setError(e);
						}
					})
					.finally(() => {
						if (currentPromise === promise) setPromiseMore(null);
					});
			} else {
				setError('Cannot get more data');
			}
		}
	}, [promiseMore]);




    return  <div>
        <SearchFormView options={["starter", "main course", "dessert"]}
            onSearch={()=> {
                setError(null);
                setData(null);

                const promise = DishSource.searchDishes({ query: txt, type: dishType })
                    .then(setData)
                    .catch(setError)

                setPromise(promise)

                setSearchQuery(txt);
				setSearchType(dishType);

            }} 
            onText={setTxt}    
            onDishType={setDishType} />

        { PromiseNoData(promise, data, error) || (
        <SearchResultsView 
        searchResults={data} 
        dishChosen={id=> {model.setCurrentDish(id); window.location.hash="#details"}}
   	    
        promisingMore={!!promiseMore}
		onBottomScroll={(offset) => {
						setPromiseMore(
							DishSource.searchDishes({
								query: searchQuery,
								type: searchType,
								offset,
							})
						);
					}}
                    />
             )}
    </div>
    
}
 