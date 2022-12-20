const React = require('react');



class ShowM extends React.Component{
    render(){ 
    return(
        <div>
    <link rel="stylesheet" type="text/css" href="../styles/show.css"/>
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

              
              
                <br />
                    <nav>
                        <a href='/Miscellaneous'>Return to Miscellaneous Shelf</a>    
                    </nav>      
        </div>
        )
    }
}

module.exports = ShowM;