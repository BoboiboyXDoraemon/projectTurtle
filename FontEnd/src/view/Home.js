import React from 'react'
import {Link} from 'react-router-dom'
import useSWR from 'swr'
import axios from 'axios'
import {useValue} from '../Context'
import {Box,Button, Avatar, Card, CardMedia,  Typography, AppBar, IconButton, Toolbar} from '@mui/material'

const fetcher = url => axios.get(url).then(res => res.data)

const Home = () => {
    const {dt,setDt} = useValue()
    const { data, error } = useSWR('https://3000-boboiboyxdo-projectturt-b2z9aw2gc5p.ws-us79.gitpod.io/', fetcher)
    if (error) return <h1>error: {error.message}</h1>
    if (!data) return <h1>Loading...</h1>

    return <div>
    { 
        <AppBar position="static" sx={{height:120, backgroundColor:"#00e6e6"}}>
                <Toolbar sx={{ height:`${100}%`}}>
                    <Typography variant='h1' sx={{position:'absolute', left:100}}>BXD</Typography>
                    { dt && dt.username? 
                        <Box sx={{display:"flex",flexDirection:"row"}}>
                            <Box sx={{position:'absolute', right:250, top:-5
                            , width:100, height:100, display:"flex", alignItems:"center", justifyContent:"center",
                            flexDirection:"column" }}>
                                <Link to="/users">
                                    <Avatar src={dt.avatar} sx={{height:60, width:60}}/>
                                </Link>
                            <Typography variant='h5' sx={{position:'absolute', top:80}}>{dt.username}</Typography>
                            </Box>
                            <Button 
                              variant='outlined'
                              sx={{ border: '4px White solid', 
                              borderRadius:"25px", color:"white", "&:hover":{border: '3px #f2f2f2 solid', opacity:0.9,
                              fontSize:22 },
                              position:'absolute',height:60, width:120, 
                              right:50, top:30, fontSize:20 }} onClick={()=>{setDt({})}}>
                            Logout
                            </Button>
                        </Box> 
                        :  
                        <Link to="/login" underline="none">
                            <Button 
                              variant='outlined'
                              sx={{ border: '4px White solid', 
                              borderRadius:"25px", color:"white", "&:hover":{border: '3px #f2f2f2 solid', opacity:0.9,
                              fontSize:22 },
                              position:'absolute',height:60, width:120, 
                              right:50, top:30, fontSize:20 }}
                        >
                            Login
                            </Button>
                        </Link>
                    }
                </Toolbar>
        </AppBar> 
    } 
    {
        <Box sx={{backgroundColor:"red", height:700}}>
            <img src={"https://thumbs.gfycat.com/AbleTastyCirriped-size_restricted.gif"} sx={{
                size:100
            }}></img>
        </Box>
    }
    {
    //<Box sx={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
    //    {
    //        data.map((item, index)=> <Card key={index} sx={{border:"1px dashed black", margin: 4, width:200, alignItems:"center", justifyContent:"center"}}>
    //            <CardMedia image={item.img} sx={{width:100,height:100}}/>
    //            <Typography variant="h5">{item.name}</Typography>
    //            <Typography variant="h4">{item.price}$</Typography>
    //            <Button variant="contained">AddTocard</Button>
    //        </Card>)
    //    }
    //</Box>
    }
</div>
}


export default Home