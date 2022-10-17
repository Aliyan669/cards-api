import React from "react";
import { Container } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import CardContent from '@mui/material/CardContent';
export  function Cards() {
    const location = useLocation();
    return (
        <div>
            <Container maxWidth={"lg"} >
                <Card sx={{ maxWidth: "100%", display:{sm:"flex",xs:"block"} }}>
                    <Box sx={{width:{sm:"35%"},padding:"20px"}}>
                    <img 
                        width={"400px"} height={"400px"}
                        src={location.state.image}
                        alt="green iguana"/>
                    </Box>
                    <CardContent sx={{width:{sm:"65%"}, padding:"50px", textAlign: "left"}}>
                        <Typography gutterBottom variant="h5" component="div">
                            { location.state.title }
                        </Typography>
                       < hr />
                        <Typography  color="text.secondary"><b>Product Details:</b> {
                            location.state.description}
                        </Typography>
                       < hr />
                        <Typography  color="text.secondary"><b>Category : </b>{
                            location.state.category }
                        </Typography>
                       < hr />
                        <Typography  color="text.secondary"><b>Price : </b>{
                            location.state.price} PKR
                        </Typography>
                       < hr />
                      <Box sx={{marginTop:"50px"}}>
                        <Button variant="outlined" size="large">BUY NOW</Button>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}
