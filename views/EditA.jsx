const React = require('react');
const DefaultLayout = require('./Default');

class EditA extends React.Component{
    render(){
        return(
            <DefaultLayout title = "Armor Modding Page">
                <form action={`/Armor/${this.props.Armor._id}?_method=PUT`} method="POST">
                Img: <input type='image' name='img' disabled  defaultValue={this.props.Armor.Img} />
                 <br />
                Name: <input type='text' name='name' disabled defaultValue={this.props.Armor.Name}/>
                 <br />
                 Rarity: <input type='text' name='Rarity' defaultValue={this.props.Armor.Rarity} />
                 <br /> 
                 Material: <input type='text' name='Material' defaultValue={this.props.Armor.Material} />
                 <br />
                 Stats1: <input type='text' name='Stats1' defaultValue={this.props.Armor.Stats1} />
                 <br />
                 Stats2: <input type='text' name='Stats2' defaultValue={this.props.Armor.Stats2} />
                 <br />
                 Stats3: <input type='text' name='Stats3' defaultValue={this.props.Armor.Stats3} />
                 <br />
                 Hidden_Feature: <input type='text' name='Hidden_Feature' defaultValue={this.props.Armor.Hidden_Feature} />
                 <br />
                 Quantity_Left: <input type='number' name='Quantity_Left' defaultValue={this.props.Armor.Quantity_Left} />
                 <br />
                 Cost: <input type='text' name='Cost' defaultValue={this.props.Armor.Cost} />
                 <br />
                 <input type='Submit' name="" value='Finish setting up the Modifications' /> 
                
                
                
                </form>    

            </DefaultLayout>
        )
    }
}
module.exports = EditA;