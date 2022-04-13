
function SelectAction( {nazevSkladu} ) {
    return (
        <div>
            <p>{nazevSkladu}</p>
            <p>Vyber akci: </p>
            <p><button>Nová inventura</button></p>
            <p><button>Historie inventur</button></p>
        </div>
    )
}

export default SelectAction