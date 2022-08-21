
function Show({hash, children}){  
  const [route, setRoute]= React.useState(window.location.hash);
  React.useEffect(()=> {
    window.addEventListener("hashchange", 
               ()=> setRoute({}));
    return () => window.removeEventListener("hashchange",
    ()=> setRoute(window.location.hash)) ;
  }, []); 
 
  return hash===window.location.hash?children: false;
} 