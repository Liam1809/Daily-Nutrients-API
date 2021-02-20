import React, { useState } from 'react'
import { Container, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Hd from './Hd.js';


const HealthDetail = ({ currentId, setCurrentId }) => {
    // retrieve an array of healthDetail 
    const HDs = useSelector((state) => state.healthDetails);
    // mark UserId to compare
    const UserId = '6030f88962f7ea3138b3c0f9';

    let H = {};
    // Looping
    for (let i = 0; i < HDs.length; i++) {
        if (HDs[i]['_id'] === UserId) {
            H = HDs[i];
        }
    }
    console.log(H);

    // console.log(healthDetails);
    // H = healthDetails.map((h) => h._id === UserId && h);
    // console.log(H);

    return (
        <Container>
            {
                H ? (
                    <Container key={H._id}>
                        <Hd H={H} setCurrentId={setCurrentId} />
                    </Container>
                )
                    : (
                        <Container>
                            <Hd />
                        </Container>
                    )
            }
        </Container>

    )

}

export default HealthDetail;
