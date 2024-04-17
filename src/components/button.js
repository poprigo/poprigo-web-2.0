import Link from 'next/link';

export default function Button({ title, link }) {
    return (
        <div className="talk-btn">
            <Link className='talk-btn-text' href={link}>
                {title}
            </Link>
        </div>
    )
}