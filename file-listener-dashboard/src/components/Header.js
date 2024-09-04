import React from 'react'
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material'
import { Notifications, AccountCircle } from '@mui/icons-material'

const Header = () => {
        return (
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                        <Toolbar>
                                <Typography variant="h6" noWrap component="div">
                                        File Watcher Dashboard
                                </Typography>
                                <Box sx={{ flexGrow: 1 }} />
                                <IconButton color="inherit">
                                        <Notifications />
                                </IconButton>
                                <IconButton color="inherit">
                                        <AccountCircle />
                                </IconButton>
                        </Toolbar>
                </AppBar>
        )
}

export default Header