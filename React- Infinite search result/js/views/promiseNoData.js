function PromiseNoData(promise, data, error){
    
    return  !promise && "  "     // case "0"  
    || error && <h1>some error</h1>   // case 3 
    || !data && <img src="http://www.csc.kth.se/~cristi/loading.gif"/>;     // case 1
    
    // if(data) return false
    // return <div>
    //     {promise===null?<span>no data</span>: ''}
    //     {promise==='a promise' &&　data===undefined && error===null?'will render an image':''}
    //     {error? <span>{error}</span>:''}
    // </div>    

}
