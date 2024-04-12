import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/button';

export default function Nav({ }) {
    return (
        <div className="container">
            <div className="nav">
                <div className="nav-links">
                    <NavLink href="/" text="Home" />
                    <NavLink href="/about" text="About Us" />
                    <NavLink href="/portfolio" text="Portfolio" />
                </div>
                <Logo />
                <div className="nav-links" style={{ justifyContent: "flex-end" }}>
                    <NavLink href="/blog" text="Blog" />
                    <NavLink href="/contact" text="Contact" />
                    <Button title={"LETS TALK"} />
                </div>
            </div>
        </div>
    )
}

const NavLink = ({ href, text }) => {
    return (
        <Link className='nav-link' href={href}>
            {text}
        </Link>
    );
}

const Logo = () => {
    return (
        <Image src="/assets/images/logo.png" alt="poprigo-logo" width={50} height={50}  />
    );
}