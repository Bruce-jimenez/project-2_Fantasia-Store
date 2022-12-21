const React = require('react');
const buyingArmor = require('../models/Armor');



class ShowA extends React.Component{
render(){
    const buyingAction = () => {

        if(this.props.Armor.Quantity_Left > 0){
            return <div> <form action={`Armor/buy/${buyingArmor.id}?_method=PUT`} method="POST">
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
            <h1>Armor Show Page</h1>
            <img src={`${this.props.Armor.Img}`} alt="Image of Armor Selected" />
            <br />
            {this.props.Armor.Name} is of {this.props.Armor.Rarity} rarity. It is made of {this.props.Armor.Material}.
                <br />
            Stats 1: {this.props.Armor.Stats1}
                <br />
            Stats 2: {this.props.Armor.Stats2}
                <br />
            Stats 3: {this.props.Armor.Stats3}
                <br />
            A hidden feature is {this.props.Armor.Hidden_Feature}.
                <br />
            There is only {this.props.Armor.Quantity_Left} left at a price of {" "}
              {this.props.Armor.Cost}.
                <br />

                {buyingAction()}

                <br />
                    <nav>
                        <a href='/Armor'>Return to Armory</a>    
                    </nav>      
        </div>
        )
    }
}

module.exports = ShowA;