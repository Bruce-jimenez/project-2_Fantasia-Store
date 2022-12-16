const React = require('react');
const DefaultLayout = require('./Default');

class IndexM extends React.Component{
    render(){
        return(
            <DefaultLayout title ={"Miscellaneous Index"}>
                <h1>Miscellaneous Page</h1>
                <ul>
                    {this.props.Miscellaneous.map((Miscellaneous, i) =>{
                        return(
                            <li>
                                The <a href = {`/Miscellaneous/${Miscellaneous.id}`}> {Miscellaneous.Name} </a> is {" "}
                                is of {Miscellaneous.Rarity} Rarity.
                                <br />
                                It is made of {Miscellaneous.Material}.
                                <br />
                                Stats 1: {Miscellaneous.Stats1}
                                <br />
                                Stats 2: {Miscellaneous.Stats2}
                                <br />
                                A hidden feature is {Miscellaneous.Hidden_Feature}.
                                <br />
                                There is only {Miscellaneous.Quantity_Left} left at a price of {" "}
                                {Miscellaneous.Cost}.
                                <br />
                                <a href = {`/Miscellaneous/${Miscellaneous._id}/edit`}>Modifications</a>
                                <form action = {`/Miscellaneous/${Miscellaneous._id}?_method=DELETE`} method="POST">
                                    <input type="Submit" value="DELETE"/>
                                </form>

                            </li>
                        );
                    })}
                </ul>

<nav>
    <a href='/Miscellaneous/NewM'>Create a New Item</a>
</nav>


            </DefaultLayout>
        )
    }
}

module.exports = IndexM;