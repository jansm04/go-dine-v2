import Link from "next/link"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="signature">
                Created by {<Link className="gh-link" href='https://github.com/jansm04'>Jan S.</Link>} in November 2023
            </div>
        </footer>
    )
}

export default Footer