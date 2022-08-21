// function RenderTest(){ console.log("Vue sub-component render test"); return false; }
// function App(props){     
//    return  ( 
//         <div>
//              <SidebarPresenter model={props.model}  />
//              <SummaryPresenter model={props.model}  />
//              <RenderTest />
//          </div>  
//     );
// }

const App= (props)=>
            <div class="flexParent">
                <div class="sidebar" ><SidebarPresenter model={props.model} /> </div>
                <div class = "mainContent">
                <div class="mainWindow"><SummaryPresenter model={props.model} /></div>
            </div>
            </div>
