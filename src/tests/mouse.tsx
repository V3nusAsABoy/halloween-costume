import mouse from './img/mouse.png';
import {useEffect, useState} from 'react';

function Mouse({cleared} : {cleared: () => void}): React.JSX.Element {

    const [mouseVisibility, setMouseVisibility] = useState(false);
    const [timer] = useState(Math.floor(Math.random() * (20000 - 5000 + 1) + 5000));

    useEffect(() => {
    const timeout = setTimeout(() => {
        setMouseVisibility(true);
    }, timer)
    return () => clearTimeout(timeout);
    }, [mouseVisibility]);

    return(
    <>
        <h2>Click the mouse when it appears</h2>
        { mouseVisibility &&
        <img src={mouse} onClick={cleared} style={{width: '15rem', cursor: 'pointer'}}/>
        }
    </>
    )
}

export default Mouse
