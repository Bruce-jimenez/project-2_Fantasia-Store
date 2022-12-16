const React = require('react');

class NewW extends React.Component{
    render(){
        return(
            <div>
                <h1>Weapon Creation Page</h1>
                <form action ='/Weapons' method='POST'>
                Img: <input type='text' name='Img'  />
                 <br />
                Name: <input type='text' name='Name'  />
                 <br />
                 Rarity: <input type='text' name='Rarity' />
                 <br /> 
                 Material: <input type='text' name='Material' />
                 <br />
                 Stats1: <input type='text' name='Stats1' />
                 <br />
                 Stats2: <input type='text' name='Stats2' />
                 <br />
                 Stats3: <input type='text' name='Stats3' />
                 <br />
                 Hidden_Feature: <input type='text' name='Hidden_Feature' />
                 <br />
                 Quantity_Left: <input type='number' name='Quantity_Left' />
                 <br />
                 Cost: <input type='text' name='Cost' />
                 <br />
                 <input type='Submit' name="" value='Forge New Weapon' />   
                </form>
            </div>
        )
    }
}

module.exports = NewW;