import { Card, CardContent, CardHeader, Typography } from "@mui/material";


const GetStarted = () => {
    return ( 
        <div style={
            {
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'white',
                height:'100vh'
            }
        }>
            <Card elevation={9} sx={{width:400}}>
                <CardHeader title='About the Application'/>
                <CardContent>
                    <Typography variant='h6'sx={{color:'gray'}}>Get Started</Typography>
                    <Typography>The Application Platform is developed to create a community where peers can interact, connect and build real life solutions to problems through technology.</Typography>
                    <Typography>Peers Share their projects and ideas on the platform to showcase their work.</Typography>
                </CardContent>
            </Card>
        </div>
     );
}
 
export default GetStarted;