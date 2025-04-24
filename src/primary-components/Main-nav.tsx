const Navbar = () => {
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg h-full flex justify-center py-5">
                <div>
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer">
                        <i className="fa-solid fa-bars text-black text-2xl"></i>
                    </button>
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer">
                        <i className="fa-solid fa-bars text-black text-2xl"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar;