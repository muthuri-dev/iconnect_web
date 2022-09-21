import { Grid } from '@mui/material';
import teams from '../assets/svgs/team.svg';

const Teams = () => {
    return ( 
        <div className="team">
            <Grid>
                <Grid items sx={{display:{xs:'none',md:'block'}}}>
                   <img src={teams} alt="teams" width='420'/>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default Teams;