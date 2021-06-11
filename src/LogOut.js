
function LogOut(props) {



    return (
        <div className="logOut">
            <p> Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <button onClick={props.logOut}>Logout</button>
        </div>
    );
}
export default LogOut;