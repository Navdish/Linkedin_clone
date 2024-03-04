import { Avatar,  Button, Divider, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import InvitationCard from '../InvitationCard/InvitationCard';
import { fetchRequests } from '../../features/Connection/connection.action';

const Recieved = () => {

  const dispatch = useDispatch()

  const handlefetch = async() => {
    dispatch(fetchRequests());
  }
  useEffect(()=> {
    handlefetch();
 }, [])

 const navigate = useNavigate();
 const requests = useSelector((state)=> state.connection.requests);


  return (
    <Stack sx={{ display: 'flex', flexDirection: 'column' }} >
      {requests?.map( req => <InvitationCard request={req}/>)}

    </Stack>
  )
}

export default Recieved