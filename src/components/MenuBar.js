import React from 'react'
import MainBox from '../containers/MainBox.js'

const MenuBar = (props) => {

  /*
  The 'a' tags below are the menu items. Think about the way a menu
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?
  */
  const passClassName = (e) => {
    // console.log(e.target.id)
    props.setID(e.target.id)
  }//passClassName
  return (
    //changed className from "item a"

    <div className="ui four item menu">
      <a onClick={passClassName}className={"item " + (props.id==="profile"?"active":null)} id="profile">
        <i className="user large icon" id="profile"/>
      </a>

      <a onClick={passClassName}className={"item " + (props.id==="photo"?"active":null)} id="photo">
        <i className="photo large icon" id="photo"/>
      </a>

      <a onClick={passClassName}className={"item " + (props.id==="cocktail"?"active":null)} id="cocktail">
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a onClick={passClassName}className={"item " + (props.id==="pokemon"?"active":null)} id="pokemon">
        <i className=" themeisle large icon" id="pokemon"/>
      </a>

    </div>

  )

}

export default MenuBar
