

function SnackBarOption(color = 'blue') {
    return {
        position: 'bottom-left',
        style: {
            backgroundColor: color,
            color: 'white',
            fontFamily: 'Menlo, monospace',
            fontSize: '20px',
            textAlign: 'center',
            zIndex: 3,
        },
        closeStyle: {
            color: 'white',
            fontSize: '16px',
        },
    }
}

export default SnackBarOption;