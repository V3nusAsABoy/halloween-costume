import happy from './img/notnothappy.png';
import unhappy from './img/notnotunhappy.png';
import './notnotunhappy.css'

function Notnotunhappy({cleared} : {cleared: () => void}): React.JSX.Element {
    return(
    <>
        <h2>Pick the face that's not not unhappy</h2>
        <div id='faces'>
            <img src={happy}></img>
            <img src={happy}></img>
            <img src={unhappy} onClick={cleared}></img>
        </div>
    </>
    )
}

export default Notnotunhappy
