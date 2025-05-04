const Secondnavbar = () => {
    return (
        <>
            <div className="max-w-sm h-full pt-5">
                <div className="flex items-center mt-1 justify-center">
                    <i className=" text-3xl bi bi-envelope-at  text-black"></i>
                    <p className="text-3xl text-black capitalize ms-3 font-normal" style={{ fontFamily: "sans-serif" }}>gmail</p>
                </div>
                <button className=" text-white font-bold py-2 px-4 mt-12 rounded cursor-pointer">
                    <i className="fa-solid fa-wand-magic text-black text-2xl"></i>
                </button>
            </div>
        </>
    )
}

export default Secondnavbar;