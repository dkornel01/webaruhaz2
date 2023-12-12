
function Kep(props){
    
    return(
        <div className="kep">
            <img src={props.src}></img>
            <p>nev: {props.nev}</p>
            <p>ár: {props.ar}</p>
            <button type="submit">vasarlas</button>
        </div>
    )
}
export default Kep