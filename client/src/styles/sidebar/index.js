import styled from "@emotion/styled"
import { Drawer, Stack, Link, Box, List, Divider, Typography, IconButton, ListItem, ListItemButton, ListItemText } from "@mui/material"


// export const BoxDrawer = styled(Box)(()=>({
// }))

// export const DrawerLeft = styled(Drawer)(({theme, drawerwidth})=>({
//     display: 'none',
//     '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerwidth },
//     '& .MuiPaper-root': { backgroundColor: '#060606'},
//     [theme.breakpoints.down('sm')]: {
//         display: 'block',
//     }
// }))

export const ContainerDrawer = styled(Box)(()=>({
    height: '100%',
    textAlign: 'center',
}))

export const WrapperLogo = styled(Box)(()=>({
   margin: '8px',
}))

export const Logo = styled('img')(()=>({
    width: '150px'
 }))

export const Line = styled(Divider)(()=>({
    backgroundColor: '#686868',
}))


export const ListItems = styled(List)(()=>({
    height: '60%',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-around',
    alignItems: 'center',
 }))

 export const OneItem = styled(ListItem)(()=>({
 }))

 export const OneItemButton = styled(ListItemButton)(()=>({
    textAlign: 'center',
}))

export const OneItemText = styled(ListItemText)(()=>({
}))


 export const LinkItem = styled(Link)(()=>({
    textDecoration: 'none',
 }))

 export const Item = styled(Typography)(()=>({
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    letterSpacing: '4px',
 }))

 export const Flag = styled(IconButton)(()=>({
 }))

export const WrapperIcons = styled(Stack)(()=>({
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '16%',
}))

export const WrapperSocial = styled(Stack)(()=>({
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px'
}))

export const WrapperFlags = styled(Stack)(()=>({
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
}))

export const Instagram = styled(Link)(()=> ({
    fontSize: '22px',
    color: "white",
    cursor: 'pointer',
}))

export const TripAdvisor = styled(Link)(()=> ({
    fontSize: '26px',
    color: "white",
    marginLeft: '20px',
    cursor: 'pointer',
}))