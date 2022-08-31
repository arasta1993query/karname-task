function Box(props) {
    return (
        <div id="box" className="rounded-lg bg-[#F9F9F9] shadow-[0_3px_8px_-1px_rgba(50,50,71,0.05),0_0_1px_rgba(12,26,75,0.24)]">
            {props.children}
        </div>
    )
}

export default Box