const React = require('react');
const DefaultLayout = require('./Default');

class EditM extends React.Component{
    render(){
        return(
           
            <DefaultLayout title ={"Miscellaneous Modding Page"}>
    <link rel="stylesheet" type="text/css" href="/styles/edit.css" />
    <img src={`${this.props.Miscellaneous.Img}`} alt="Image of Item Selected" />
                <form action={`/Miscellaneous/${this.props.Miscellaneous._id}?_method=PUT`} method="POST">
            <div className='modifyItems'>

                <div className='imageClear'>
                Img: <input type='image' name='img' disabled  defaultValue={this.props.Miscellaneous.Img} />
                </div>
                 
                 <br />
                Name: <input type='text' name='name' disabled defaultValue={this.props.Miscellaneous.Name}/>
                 <br />
                 Rarity: <input type='text' name='Rarity' defaultValue={this.props.Miscellaneous.Rarity} />
                 <br /> 
                 Material: <input type='text' name='Material' defaultValue={this.props.Miscellaneous.Material} />
                 <br />
                 Stats1: <input type='text' name='Stats1' defaultValue={this.props.Miscellaneous.Stats1} />
                 <br />
                 Stats2: <input type='text' name='Stats2' defaultValue={this.props.Miscellaneous.Stats2} />
                 <br />
                 Hidden_Feature: <input type='text' name='Hidden_Feature' defaultValue={this.props.Miscellaneous.Hidden_Feature} />
                 <br />
                 Quantity_Left: <input type='number' name='Quantity_Left' defaultValue={this.props.Miscellaneous.Quantity_Left} />
                 <br />
                 Cost: <input type='text' name='Cost' defaultValue={this.props.Miscellaneous.Cost} />
            </div>
                 <br />
                 <input type='Submit' name="" value='Set the Modifications' /> 
                
                
                
                </form>    

            </DefaultLayout>
           
        )
    }
}
module.exports = EditM;