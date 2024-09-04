import React from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Dashboard, Folder, Settings } from '@mui/icons-material'

const Sidebar = () => {
        const drawerWidth = 240

        return (
                <Drawer sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box'
                        }
                }}
                        variant="permanent"
                        anchor="left"
                >
                        <List>
                                <ListItem button>
                                        <ListItemIcon>

                                                <Dashboard />
                                        </ListItemIcon>
                                        <ListItemText primary="Dashboard" />
                                </ListItem>
                                <ListItem button>
                                        <ListItemIcon>
                                                <Folder />
                                        </ListItemIcon>
                                        <ListItemText primary="Files" />

                                </ListItem>
                                <ListItem button>
                                        <ListItemIcon>
                                                <Settings />
                                        </ListItemIcon>
                                        <ListItemText primary="Settings" />
                                </ListItem>
                        </List>
                </Drawer>
        )
}

export default Sidebar