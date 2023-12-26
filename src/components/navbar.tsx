import Link from "next/link"

const Navbar = () => {
    return (
        <header>
            <div className="header">
                <Link className="header-link" href="/">
                    <h1>goDine</h1>
                </Link>
                <div className='slogan'>
                    <p>Let AI help you decide where to eat.</p>
                </div>
            </div>
        </header>
    )
}

export default Navbar