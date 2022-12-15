const React = require('react');
const DefaultLayout = require('./Default');

class IndexW extends React.Component{
    render(){
        return(
            <DefaultLayout title ={"Weapons Index"}>
                <h1>Weapons Page</h1>
                <ul>
                    {this.props.Weapons.map((ArWeaponsmor, i) =>{
                        return(
                            <li>
                                The <a href = {`/Weapons/${Weapons.id}`}> {Weapons.Name} </a> is {" "}
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
                                There is only {Weapons.Quantity_Left} left at a price of 
                                {Weapons.Cost}.
                                <br />
                                <a href = {`/Weapons/${Weapons._id}/edit`}>Modifications</a>
                                <form action = {`/Weapons/${Weapons._id}?_method=DELETE`} method="POST">
                                    <input type="Submit" value="DELETE"/>
                                </form>

                            </li>
                        );
                    })}
                </ul>

<nav>
    <a href='/Weapons/NewW'>Forge New Weapon</a>
</nav>


            </DefaultLayout>
        )
    }
}

module.exports = IndexW;