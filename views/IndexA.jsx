const React = require('react');
const DefaultLayout = require('./Default');

class IndexA extends React.Component{
    render(){
        return(
            <DefaultLayout title ={"Armor Page"}>
    <link rel="stylesheet" type="text/css" href="/styles/index.css"/>
                
                <ul>
                    {this.props.Armor.map((Armor, i) =>{
                        return(
                            
                            <div id='formation'>
                                <a href = {`/Armor/${Armor.id}`} className= "Naming"> {Armor.Name} </a> is {" "}
                                is of {Armor.Rarity} Rarity.
                                <br />
                                It is made of {Armor.Material}.
                                <br />
                                Stats 1: {Armor.Stats1}
                                <br />
                                Stats 2: {Armor.Stats2}
                                <br />
                                Stats 3: {Armor.Stats3}
                                <br />
                                A hidden feature is {Armor.Hidden_Feature}.
                                <br />
                                There is only {Armor.Quantity_Left} left at a price of {" "}
                                {Armor.Cost}.
                                <br />
                                <a href = {`/Armor/${Armor._id}/edit`} className="Modding">Modifications</a>
                                
                                <form action = {`/Armor/${Armor._id}?_method=DELETE`} method="POST">
                                    <input type="Submit" value="DELETE"/>
                                </form>
                            </div>
                          
                        );
                    })}
                </ul>

<nav>
    <a href='/Armor/NewA' className='create'>Forge New Armor</a>
</nav>


            </DefaultLayout>
        )
    }
}

module.exports = IndexA;