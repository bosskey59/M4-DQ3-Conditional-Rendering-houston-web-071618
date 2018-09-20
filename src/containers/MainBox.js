import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  state = {
    id: "profile"
  }
  setID=(id)=>{
    this.setState({
      id: id
    })
  }//setID

  render() {
    console.log(this.state.id)
    let detailsToDisplay = <div>Hi, I'm a div!</div>
    switch(this.state.id){
      case "profile":
      console.log("Profile hit")
        detailsToDisplay = Profile()
        break;
      case "photo":
      console.log("Photo hit")
        detailsToDisplay = Photos()
        break;
      case "cocktail":
        detailsToDisplay = Cocktails()
        break;
      case "pokemon":
        detailsToDisplay = Pokemon() //is broken AF
        break;
      default:
        detailsToDisplay = <div>Hi, I'm a div!</div>
    }//switch
    /*
    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?
    */


    return (

      <div>
        <MenuBar setID={this.setID} id={this.state.id}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
