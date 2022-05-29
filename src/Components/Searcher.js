import { useState } from "react";
import axios from 'axios';
import Typography from '@mui/material/Typography';
import ButtonComp from "./ButtonComp";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Searcher = (props) => {
    const geocoder = new window.google.maps.Geocoder();
    const { setCenter } = props;
    const [ip, setIp] = useState("");

    const onSearch = async () => {
        const response = await axios.get(`https://7p7v0akdw6.execute-api.eu-west-1.amazonaws.com/dev?ip=${ip}`, {
            // method: 'GET', // *GET, POST, PUT, DELETE, etc.
            // mode: 'cors', // no-cors, *cors, same-origin
            // headers: {
            //     //     'Content-Type': 'application/json',
            //         //  "authorizationToken": `YovelHameleh`,
            //         //  "x-api-key": `DgDXLKNk039QJEIRf9xzU11j068M3c1h1A2r9YjQ`,
            //       //      "Access-Control-Allow-Origin": '*',
            //     //     "Access-Control-Allow-Headers": '*',
            //     //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            // },
            //   redirect: 'follow', // manual, *follow, error
            // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-
        });
        const location = { lat: response.data.locationData.lat, lng: response.data.locationData.lng };
        geocoder
            .geocode({ location })
            .then((result) => {
                const { results } = result;
                // const firstResult = results[0];
                // const location = firstResult.geometry.location;
                const lat = response.data.locationData.lat;
                const lng = response.data.locationData.lng;
                setCenter({ lat, lng });
            })
            .catch((e) => {
                alert("Geocode was not successful for the following reason: " + e);
            });
    };

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '30ch',marginLeft:'67px' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField sx={{justifyContent:'center'}} id="outlined-basic" label="IP address" variant="outlined" 
                 type="text"
                value={ip}
                onChange={(e) => setIp(e.target.value)} 
                />
            </Box>


            <Stack spacing={2} direction="row">
                <Button sx={{ color: 'white', background: '#7551E9', borderRadius: '10px', marginLeft: '108px', marginTop: '10px' }} variant="contained" onClick={onSearch}>Get your Location</Button>
            </Stack>
        </>
    );
};
export default Searcher;
