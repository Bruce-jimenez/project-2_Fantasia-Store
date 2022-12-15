const React = require('react');


class ShowM extends React.Component{
render(){
    return(
        <div>
            <h1>Miscellaneous Show Page</h1>
            {this.props.Miscellaneous.Name} is of {this.props.Miscellaneous.Rarity} rarity. It is made of {this.props.Miscellaneous.Materials}.
                <br />
            Stats 1: {this.props.Miscellaneous.Stats1}
                <br />
            Stats 2: {this.props.Miscellaneous.Stats2}
                <br />
            A hidden feature is {this.props.Miscellaneous.Hidden_Feature}.
                <br />
            There is only {this.props.Miscellaneous.Quantity_Left} left at a price of 
              {this.props.Miscellaneous.Cost}.
                <br />

                    <nav>
                        <a href='/Miscellaneous'>Return to Miscellaneous Shelf</a>    
                    </nav>      
        </div>
        )
    }
}

module.exports = ShowM;