
function Log(props) {

    return (
        <div className="log">
            <p>Натисніть на кнопку для зеєстрації через гугл</p>
            <button onClick={props.log}>Login</button>
        </div>
    );
}
export default Log;