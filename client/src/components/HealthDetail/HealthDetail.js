import React, { useState } from 'react'
import { Container, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Hd from './Hd.js';


const HealthDetail = ({ currentId, setCurrentId }) => {
    // retrieve an array of healthDetail 
    const HDs = useSelector((state) => state.healthDetails);
    // mark UserId to compare
    const UserId = '6031a5c9f6d2bb13d7cfe309';

    let H = {};
    // Looping
    for (let i = 0; i < HDs.length; i++) {
        if (HDs[i]['_id'] === UserId) {
            H = HDs[i];
        }
    }

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
