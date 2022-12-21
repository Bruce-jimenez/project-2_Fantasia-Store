const React = require('react');
const buyingMisc = require('../models/Miscellaneous');



class ShowM extends React.Component{
    render(){ 
        const buyingAction = () => {

            if(this.props.Miscellaneous.Quantity_Left > 0){
                return <div> <form action={`Miscellaneous/buy/${buyingMisc.id}?_method=PUT`} method="POST">
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
            <h1>Miscellaneous Show Page</h1>
            <img src={`${this.props.Miscellaneous.Img}`} alt="Image of Item Selected" />
            <br />
            {this.props.Miscellaneous.Name} is of {this.props.Miscellaneous.Rarity} rarity. It is made of {this.props.Miscellaneous.Material}.
                <br />
            Stats 1: {this.props.Miscellaneous.Stats1}
                <br />
            Stats 2: {this.props.Miscellaneous.Stats2}
                <br />
            A hidden feature is {this.props.Miscellaneous.Hidden_Feature}.
                <br />
            There is only {this.props.Miscellaneous.Quantity_Left} left at a price of {" "}
              {this.props.Miscellaneous.Cost}.
                <br />

                {buyingAction()}
              
                <br />
                    <nav>
                        <a href='/Miscellaneous'>Return to Miscellaneous Shelf</a>    
                    </nav>      
        </div>
        )
    }
}

module.exports = ShowM;