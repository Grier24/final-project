import React from 'react'
import { Box, Typography } from '@mui/material'
import { AiFillLinkedin, AiFillGithub, } from 'react-icons/ai'

const Footer = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            padding: '15px',
            paddingBottom: '0px',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgb(104,104,104)',
            borderTop: '2px solid black'
        }}>

            <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
                <a rel="noreferrer" style={{ textDecoration: 'none', color: 'black', padding: '7px' }} href='https://github.com/Grier24' target='_blank'>
                    <AiFillGithub size={25} />
                </a>
            </Box>
        </Box>
    )
}

export default Footer