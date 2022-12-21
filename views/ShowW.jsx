const React = require('react');
const buyingWeapons = require('../models/Weapons');



class ShowW extends React.Component{

    render(){
const buyingAction = () => {

    if(this.props.Weapons.Quantity_Left > 0){
        return <div> <form action={`Weapons/buy/${buyingWeapons.id}?_method=PUT`} method="POST">
        <input type="submit" value=" Buy " />
                    </form>
                </div>
} else {
    return <h3>Out of Stock</h3>
}
}
    return(
        <div>
    <link rel="stylesheet" type="text/css" href="/styles/show.css"/>
            <h1 className='Title'>Weapons Show Page</h1>
            <img src={`${this.props.Weapons.Img}`} alt="Image of Weapon Selected" />
            <br />
    <div className='txtBody'>
            {this.props.Weapons.Name} is of {this.props.Weapons.Rarity} rarity. It is made of {this.props.Weapons.Material}.
                <br />
            Stats 1: {this.props.Weapons.Stats1}
                <br />
            Stats 2: {this.props.Weapons.Stats2}
                <br />
            Stats 3: {this.props.Weapons.Stats3}
                <br />
            A hidden feature is {this.props.Weapons.Hidden_Feature}.
                <br />
            There is only {this.props.Weapons.Quantity_Left} left at a price of {" "}
              {this.props.Weapons.Cost}.
    </div>     
                
                <br />
            {buyingAction()}
                
                
                <br />
                    <nav>
                        <a href='/Weapons'>Return to Weaponry</a>    
                    </nav>      
        </div>
        )
    }
}

module.exports = ShowW;