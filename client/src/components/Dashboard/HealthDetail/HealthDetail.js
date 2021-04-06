import React, { useState } from 'react'
import { Container } from '@material-ui/core';
// Hook
import { useSelector } from 'react-redux';
// import component
import Hd from './Hd.js';

const HealthDetail = ({ user, currentId, setCurrentId, flag, setFlag }) => {

    // retrieve an array of healthDetail
    const HDs = useSelector((state) => state.healthDetails);
    // console.log(HDs);
    // mark UserId to compare
    const UserId = user?.userInfo?._id;
    // console.log(`user ._id token: ${user?.userInfo?._id}`);

    let H = {};
    // Looping to check whether the googleId/userID token equals to the HD created
    for (let i = 0; i < HDs.length; i++) {
        if (HDs[i]['userID'] === UserId || HDs[i]['googleId'] === UserId) {
            H = HDs[i];
            break;
        }
    }
    // console.log(H);
    return (
        <Container>
            {
                H ? (
                    <Container key={H._id}>
                        <Hd user={user} H={H} setCurrentId={setCurrentId} flag={flag} setFlag={setFlag} />
                    </Container>
                )
                    : (
                        <Container>
                            <Hd />
                        </Container>
                    )
            }
        </Container>
    );
}

export default HealthDetail;
