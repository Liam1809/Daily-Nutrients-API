import React, { useState } from 'react'
import { Container, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import HD from './HD.js';


const HealthDetail = ({ setCurrentId }) => {
    const healthDetails = useSelector((state) => state.healthDetail);

    const UserId = '6030565e9fd171256f07a6aa';
    let H = {};
    for (let i = 0; i < healthDetails.length; i++) {
        if (healthDetails[i]['_id'] === UserId) {
            H = healthDetails[i];
        }
    }
    // console.log(H);

    return (
        <Container>
            {
                H ? (
                    <Container key={H._id}>
                        <HD H={H} setCurrentId={setCurrentId} />
                    </Container>
                ) : (
                        <Container>
                            <HD />
                        </Container>
                    )
                // healthDetails.map((H) => (
                //     H._id === UserId ? (
                //         <Container key={H._id}>
                //             <HD H={H} setCurrentId={setCurrentId} />
                //         </Container>
                //     ) : (

                //         )
                // ))
            }
        </Container>

    )

}

export default HealthDetail;
