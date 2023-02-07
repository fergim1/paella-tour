import { Box, Drawer } from '@mui/material';
import { ContentDrawer } from './ContentDrawer';


const SideBar = ({
    mobileOpen,
    handleDrawerToggle,
    window
}) => {

    const container = window !== undefined ? () => window().document.body : undefined;
    const drawerWidth = 330;

    return (
        <Box component="nav">
            <Drawer
                anchor='left'
                container={ container }
                variant='temporary'
                open={ mobileOpen }
                onClose={ handleDrawerToggle }
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    '& .MuiPaper-root': { backgroundColor: '#060606'},
                }}
            >
                <ContentDrawer
                    handleDrawerToggle = { handleDrawerToggle }
                />
            </Drawer>
        </Box>
  )
}

export { SideBar }


