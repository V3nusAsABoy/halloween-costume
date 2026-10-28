function Verifybutton({cleared} : {cleared: () => void}): React.JSX.Element {
    return(
    <>
        <button onClick={cleared}>I am human</button>
    </>
    )
}

export default Verifybutton
