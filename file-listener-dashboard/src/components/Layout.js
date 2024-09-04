import React from 'react'
import { Box, CssBaseline, Toolbar, Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Header from './Header'

const Layout = ({ children }) => {
        return (
                <Box sx={{ display: 'flex' }}>
                        <CssBaseline />
                        <Header />
                        <Sidebar />
                        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                                <Toolbar />
                                {children}
                        </Box>
                </Box>
        )
}

export default Layout