import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    background: lightgray;
    width: 80vw;
    margin-top: 40px;
    padding:40px;
`

export default function Card(props) {

    const { details } = props;

    return (

        <StyledCard>
            <h1>Name : {details.name}</h1>
            <h2>Email : {details.email}</h2>
            <h3>Role : {details.role}</h3>
        </StyledCard>
    )

}