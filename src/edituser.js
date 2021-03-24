import React from "react";

function EditUser(props){
    console.log(props)
    return(
        <>
        <p>Edit: user-{props.match.params.id} </p>
        </>
    );
}

export default EditUser;