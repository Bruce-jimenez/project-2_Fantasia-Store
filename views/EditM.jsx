const React = require('react');
const DefaultLayout = require('./Default');

class EditM extends React.Component{
    render(){
        return(
            <DefaultLayout title = "Misc. Modding Page">
                <form action={`/Miscellaneous/${this.props.Miscellaneous._id}?_method=PUT`} method="POST">
                
                
                
                
                </form>    
                
            </DefaultLayout>
        )
    }
}
