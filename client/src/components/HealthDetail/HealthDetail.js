import React, { useState } from 'react'
import { Container, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import HD from './HD.js';


const HealthDetail = ({ setCurrentId }) => {
    // retrieve an array of healthDetail 
    const healthDetails = useSelector((state) => state.healthDetail);
    // mark UserId to compare
    const UserId = '6030f88962f7ea3138b3c0f9';

    let H = {};
    // Looping
    for (let i = 0; i < healthDetails.length; i++) {
        if (healthDetails[i]['_id'] === UserId) {
            H = healthDetails[i];
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
                        <HD H={H} setCurrentId={setCurrentId} />
                    </Container>
                )
                    : (
                        <Container>
                            <HD />
                        </Container>
                    )
            }
        </Container>

    )

}

export default HealthDetail;
