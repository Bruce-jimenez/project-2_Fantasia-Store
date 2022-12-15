const React = require('react');
const DefaultLayout = require('./Default');

class EditA extends React.Component{
    render(){
        return(
            <DefaultLayout title = "Armor Modding Page">
                <form action={`/Armor/${this.props.Armor._id}?_method=PUT`} method="POST">
                
                
                
                
                </form>    

            </DefaultLayout>
        )
    }
}
