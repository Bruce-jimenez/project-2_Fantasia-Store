const React = require('react');

class NewA extends React.Component{
    render(){
        return(
            <div className='formBody'>
    <link rel="stylesheet" type="text/css" href="/styles/new.css"/>
                <h1>Armor Creation Page</h1>
                <form action ='/Armor' method = 'POST'>
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
                 <input type='Submit' name="" value='Forge New Armor' />   
                </form>
            </div>
        )
    }
}

module.exports = NewA;