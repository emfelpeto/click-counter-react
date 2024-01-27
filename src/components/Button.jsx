export function Button({text, counterHandler}) {
    let nameClass;
    switch (text) {
        case '+':
             nameClass = 'plus-btn';
            break;
        case '-':
            nameClass = 'minus-btn';
            break;
        default:
            nameClass = 'reset-btn';
            break;
    }
    return (
        <button className={nameClass} onClick={counterHandler}>
            {text}
        </button>
    );
}