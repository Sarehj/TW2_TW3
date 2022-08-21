
const App= (props)=>{

  // return <div class="flexParent">

  //   <div class="sidebar">
  //     <SidebarPresenter model={props.model}/> 
  //   </div>
    


  //   <div class="mainContent"> 
  //   <Show hash="#search">
  //       <SearchPresenter model={props.model}/></Show>

  //   <Show hash="#summary">
  //       <SummaryPresenter model={props.model}/></Show> 
  //   </div>
          
  //   <div class="main-content-details">
  //   <Show hash="#details">
  //       <DetailsPresenter model={props.model}/></Show>
  //   </div>     
  
  // </div> 
  
  

  return <div class="flexParent">
        <div class="sidebar debug" ><SidebarPresenter model={props.model} /> </div>

        <div class="mainContent debug">
            <Show hash="#search"><SearchPresenter model={props.model}/></Show>
            <Show hash="#summary"><SummaryPresenter model={props.model}/></Show>
            <Show hash="#details"><DetailsPresenter model={props.model}/></Show>
        </div>
    </div>
}



 function defaultRoute(){ 
    if(!window.location.hash || ['#search','#summary','#details'].indexOf(window.location.hash)==-1) window.location.hash="#search";
 }
 defaultRoute(); // when the application loads, set the default route!


