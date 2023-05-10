import React from 'react'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner';

export default function LoadingScreen() {
  return (
    <Container className='loadingContainer' style={{textAlign:"center"}}>
        <Spinner style={{color: 'rgba(59,7,11,255)'}}animation="border" className='iconSpinner' role='status'/>
    </Container>
  )
}
