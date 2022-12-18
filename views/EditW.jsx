const React = require('react');
const DefaultLayout = require('./Default');

class EditA extends React.Component{
    render(){
        return(
            <DefaultLayout title ={"Weapons Modding Page"}>
    <link rel="stylesheet" type="text/css" href="../styles/edit.css"/>
                <form action={`/Weapons/${this.props.Weapons._id}?_method=PUT`} method="POST">
                Img: <input type='image' name='img' disabled  defaultValue={this.props.Weapons.Img} />
                 <br />
                Name: <input type='text' name='name' disabled defaultValue={this.props.Weapons.Name}/>
                 <br />
                 Rarity: <input type='text' name='Rarity' defaultValue={this.props.Weapons.Rarity} />
                 <br /> 
                 Material: <input type='text' name='Material' defaultValue={this.props.Weapons.Material} />
                 <br />
                 Stats1: <input type='text' name='Stats1' defaultValue={this.props.Weapons.Stats1} />
                 <br />
                 Stats2: <input type='text' name='Stats2' defaultValue={this.props.Weapons.Stats2} />
                 <br />
                 Stats3: <input type='text' name='Stats3' defaultValue={this.props.Weapons.Stats3} />
                 <br />
                 Hidden_Feature: <input type='text' name='Hidden_Feature' defaultValue={this.props.Weapons.Hidden_Feature} />
                 <br />
                 Quantity_Left: <input type='number' name='Quantity_Left' defaultValue={this.props.Weapons.Quantity_Left} />
                 <br />
                 Cost: <input type='text' name='Cost' defaultValue={this.props.Weapons.Cost} />
                 <br />
                 <input type='Submit' name="" value='Set the Modifications' /> 
                
                
                
                </form>    

            </DefaultLayout>
        )
    }
}
module.exports = EditA;