

function Button(props) {

    const style = props.link ? "rounded-md border-[#27AE60] border p-2 text-[#27AE60] text-xs font-bold relative cursor-pointer left-0 ":
    "flex items-center justify-center text-xs text-white bg-[#27AE60] py-2 px-5 cursor-pointer rounded-md"

    return (
        <button className={style} onClick={(e) => props.onClick(e)}>
            {props.children}
        </button>
    )
}

export default Button