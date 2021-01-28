import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
        <div>
        <h3>Next.js</h3>
        </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/home"><a>Contact</a></Link>
        </nav>
     );
}
 
export default Navbar;