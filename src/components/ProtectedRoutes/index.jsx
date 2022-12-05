import { Outlet, useNavigate } from "react-router-dom";

import React, { useEffect } from 'react'
import { StyledText } from "../../styles/typhography";

const ProtectedRoutes = ({user}) => {

    const navigate = useNavigate()

    useEffect(() => {
        if(!user){
            navigate("/")
        }
    }, [])
  return (
    <>
        { user ? <Outlet /> : <StyledText tag="h1" color="black" textAlign="center">Carregando...</StyledText>}
    </>
  )
}

export default ProtectedRoutes