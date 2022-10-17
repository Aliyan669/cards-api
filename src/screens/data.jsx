import React from "react";
import '../App.css';
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Data() {
    const [Data, setData] = useState([])
    let navigate = useNavigate()
    let getData = () => {
        axios.get("https://fakestoreapi.com/products")
        .then((success) => {setData(success.data)})
        .catch((error) => { console.log(error) })
    }
    useEffect(() => {
        getData()
    }, [])
    return <div>
        <Container >
            <h1 className="api">RRENDER CARDS API</h1>
            <Grid container spacing={3} >
                {Data.map((e,i) => {
                    return <>  
                        <Grid item md={3} sm={6} xs={12} key={i} sx={{ margin:"20px 0px"}}>
                            <Card sx={{ maxWidth: "100%", textAlign: "left"}}>
                                <CardActionArea>
                                    <img
                                        width={270} height={220}
                                        src={e.image} />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"20px"}}>
                                            {e.title.slice(0, 35) + "..."}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{fontWeight:"bold",fontSize:"16px"}}>
                                           Price :  {e.price} RS
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px"}}>
                                            { e.description.slice(0, 65)+"..."}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions sx={{ display: "flex", margin: "10px", justifyContent: "right" }}>
                                    <Button variant="outlined" size="small" color="primary"
                                    onClick={()=>{
                                        navigate('/cards',{
                                            state:{
                                              id:e.id,
                                              title: e.title,
                                              price:e.price,
                                              rating: e.rating,
                                              image:e.image,
                                              description : e.description,
                                              category: e.category,
                                              count: e.count,
                                              rate: e.rate
                                            }
                                          })}}
                                     >
                                        SHOW DETAILS
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid></>
                })}
            </Grid>
        </Container>
    </div>
}
export default Data;