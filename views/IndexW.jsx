const React = require('react');
const DefaultLayout = require('./Default');

class IndexW extends React.Component{
    render(){
        return(
            <DefaultLayout title ={"Weapons Page"}>
    <link rel="stylesheet" type="text/css" href="/styles/index.css"/>
                
                <ul>
                    {this.props.Weapons.map((Weapons, i) =>{
                        return(
                     
                        <div id='formation'>
                                <a href = {`/Weapons/${Weapons.id}`} className= "Naming"> {Weapons.Name} </a> is {" "}
                                is of {Weapons.Rarity} Rarity.
                                <br />
                                It is made of {Weapons.Material}.
                                <br />
                                Stats 1: {Weapons.Stats1}
                                <br />
                                Stats 2: {Weapons.Stats2}
                                <br />
                                Stats 3: {Weapons.Stats3}
                                <br />
                                A hidden feature is {Weapons.Hidden_Feature}.
                                <br />
                                There is only {Weapons.Quantity_Left} left at a price of {" "} 
                                {Weapons.Cost}.
                                <br />
                                <a href = {`/Weapons/${Weapons._id}/edit`} className="Modding">Modifications</a>
                                <form action = {`/Weapons/${Weapons._id}?_method=DELETE`} method="POST">
                                    <input type="Submit" value="DELETE"/>
                                </form>
                            </div>
                        
                        );
                    })}
                </ul>

<nav>
    <a href='/Weapons/NewW' className='create'>Forge New Weapon</a>
</nav>


            </DefaultLayout>
        )
    }
}

module.exports = IndexW;