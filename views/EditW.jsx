const React = require('react');
const DefaultLayout = require('./Default');

class EditA extends React.Component{
    render(){
        return(
            <DefaultLayout title = "Weapons Modding Page">
                <form action={`/Weapons/${this.props.Weapons._id}?_method=PUT`} method="POST">
                
                
                
                
                </form>    

            </DefaultLayout>
        )
    }
}