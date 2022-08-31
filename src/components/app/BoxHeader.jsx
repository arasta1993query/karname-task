

function BoxHeader(props) {
    return (
        <div  id="box-header" className="flex items-center justify-between px-4 py-2 bg-white rounded-lg">
            {props.children}
        </div>
    )
}

export default BoxHeader