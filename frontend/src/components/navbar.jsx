
import { Button, Link } from "@mui/material";
import Logo from "./logo";
import '../styles/index.css'


const Navbar = () => {
    return ( 
        <div className='nav'>
                <Logo/>
                <div>
                    <Link className={"link"} href="/home"color='white' underline='none' variant='body1'>Home</Link>
                    <Link className={"link"} href="/home"color='white' underline='none' variant='body1'>Teams</Link>
                    <Link className={"link"} href="/home"color='white' underline='none' variant='body1'>Groups</Link>
                    <Link className={"link"} href="/home"color='white' underline='none' variant='body1'>Projects</Link>


                <Button
                variant='contained'
                color='secondary'
                >Get Started</Button>

                </div>
        </div>
     );
}
 
export default Navbar;