import FileAdder from "./FileAdder";
import FoodImage from './images/imageoffood.jpeg';
import LandingPage from "./landing";
import ListofThings from "./ListofThings";
import RecipesList from "./RecipesList";
function App(){ //Takes care of FileAdder
    return(
        <div style={{backgroundColor: 'powderblue'}}>
            
            <h1>AI Recipe App</h1>
            <img class = "center" src={FoodImage} alt="food on table"></img>
            <br></br>
            <div class="center">
                <h1 data-text = "Please lay out your ingredients (like shown above) and add your image:">
                 
                </h1>
                
            </div>
            
            <FileAdder ></FileAdder>
            <ListofThings></ListofThings>
        </div>
    )
}

export default App;