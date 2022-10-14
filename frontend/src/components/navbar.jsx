
import { Button, Link } from "@mui/material";
import Logo from "./logo";
import '../styles/index.css'
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate=useNavigate();
    const handleStart= function(){
        navigate('/start');
    }
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
                onClick={handleStart}
                >Get Started</Button>

                </div>
        </div>
     );
}
 
export default Navbar;