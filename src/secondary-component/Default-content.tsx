
function Defaultcontent() {
    return (
        <>
            <div className="flex items-center flex-row w-[75%] p-2 rounded-3xl" style={{ backgroundColor: "#E9EDF6" }}>
                <i className="fa-solid fa-magnifying-glass ps-2 pe-2 text-black"></i>
                <input type="text" placeholder="Search mail" className="w-[75%] p-2 rounded-3xl placeholder:text-black outline-0 text-black" />
            </div>

        </>
    )
}

export default Defaultcontent