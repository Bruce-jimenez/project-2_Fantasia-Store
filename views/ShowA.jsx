const React = require('react');


class ShowA extends React.Component{
render(){
    return(
        <div>
            <h1>Armor Show Page</h1>
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
            There is only {this.props.Armor.Quantity_Left} left at a price of 
              {this.props.Armor.Cost}.
                <br />

                    <nav>
                        <a href='/Armor'>Return to Armory</a>    
                    </nav>      
        </div>
        )
    }
}

module.exports = ShowA;