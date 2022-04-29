const Header = ({handleDarkMode}) => {

    return ( 
        <div className="header"> 
        <h1>Notes</h1>
        <button className="toggle-button" onClick={() =>  handleDarkMode((isPressed) => !isPressed)}>Toggle Mode</button>
        </div>
     );
}
 
export default Header;