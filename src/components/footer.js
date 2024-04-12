import BorderButton from "./borderButton";

export default function Footer({ title }) {
    return (
        <div className="footer">
            <div className="container">
                <div className='footer-title-cover'>
                    <div>
                        {/* <div className="footer-logo" /> */}
                        <h1 className="footer-title-text"> Let’s work together</h1>
                        <p className="footer-description-text">Have an idea that could be the Next Big Thing? Or<br />you’re not sure where to start?</p>
                        <BorderButton title="Let’s Do it" type="white" />
                        {/* <p className="footer-description-text do-it">Let’s Do it</p> */}
                    </div>
                </div>

                <div className='divider' />

                <div className="footer-box-container">
                    <ListItem title="Company" list={companyLinks} />

                    <ListItem title="Services" list={services} />

                    <ListItem title="we are hiring" list={developers} />
                    <ListItem title="Contact Info" list={contactInfo} extra={<FooterIcon />} />
                </div>
                <div className='divider' />
                <p className="copyrightYear">&copy; <span className="copyrightYear"></span> poprigo technolabs. All rights reserved.</p>
            </div>
        </div>
    )
}

const FooterIcon = () => (
    <div className="icon-container">
        <div className="facebook"><i className="fab fa-facebook"></i></div>
        <div className="instagram"><i className="fab fa-instagram"></i></div>
        <div className="dribbble"><i className="fab fa-dribbble"></i></div>
        <div className="linkedin"><i className="fab fa-linkedin"></i></div>
    </div>
)

const ListItem = ({ title, list = [], extra }) => {
    return (
        <div className='footer-box'>
            <h1>{title}</h1>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.title}</a>
                    </li>
                ))}
            </ul>
            {extra}
        </div>
    )
}

const companyLinks = [
    { href: '', title: 'Work' },
    { href: '', title: 'About' },
    { href: '', title: 'Services' },
    { href: '', title: 'Contact' },
    { href: '', title: 'Blog' },
    { href: '', title: 'Careers' }
];


const developers = [
    { href: '', title: 'Flutter Developers' },
    { href: '', title: 'Node JS Developers' },
    { href: '', title: 'iOS Developers' },
    { href: '', title: 'Python Developers' },
    { href: '', title: 'Laravel Developers' }
];

const services = [
    { href: '', title: 'AI & ML' },
    { href: '', title: 'UI/UX Design Services' },
    { href: '', title: 'Mobile App Development' },
    { href: '', title: 'Website Development' },
    { href: '', title: 'Software Development' },
    { href: '', title: 'Shopify Expertise' },
    { href: '', title: 'Front-end Excellence' }
];

const contactInfo = [
    { href: 'tel:+919714154356', title: '+91 9714154356' },
    { href: 'mailto:poprigo23@gmail.com', title: 'poprigo23@gmail.com' }
];
