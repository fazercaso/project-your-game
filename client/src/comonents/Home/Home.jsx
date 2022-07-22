import React from 'react';
import { Text, Grid, Button } from '@geist-ui/core'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (

        <div className='game'>
            <Text b i style={{ letterSpacing: '0.9px' }}>
                <Text span type="success" font="40px">С</Text>
                <Text span type="warning" font="40px">В</Text>
                <Text span type="secondary" font="40px">О</Text>
                <Text span type="error" font="40px">Я</Text>
                <Text span style={{ color: '#ccc' }} font="40px">Ч</Text>
                <Text span type="success" ml="20px" font="40px">ОК</Text>
            </Text>
            <Grid><Button  onClick={()=>navigate('/game')} auto type="error">Играть</Button></Grid>
        </div>

    );
}

export default Home;