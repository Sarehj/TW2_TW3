const useIntersection = (ref) => {
	const [isVisible, setState] = React.useState(false);

	React.useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setState(entry.isIntersecting);
		});

		// start observing
		ref && observer.observe(ref.current);

		//Tells the Observer to stop observing 
		return () => observer.unobserve(ref.current);
	}, []);

	return isVisible;
};
