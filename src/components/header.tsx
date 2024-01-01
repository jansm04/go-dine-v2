import Link from "next/link"

const Navbar = () => {
    return (
        <header>
            <div className="p-3 mt-3">
                <h1 className="italic font-extrabold text-center text-[#ddd3a1] text-3xl sm:text-4xl">
                    goDine
                </h1>
                <p className='text-center text-sm text-[#b7ad7a] py-3 px-10 sm:text-base'>
                    For all the times you want to eat out but have no idea where to go.
                </p>
            </div>
        </header>
    )
}

export default Navbar