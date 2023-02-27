import styled from "@emotion/styled";
import {
    IconButton,
} from "@mui/material";

export const WrapperAlertText = styled('span')(({theme})=> ({
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'start',
    flexDirection: 'row',
    padding: '0 50px 0 50px',
    [theme.breakpoints.down('sm')]: {
        padding: '0',
    }
}))

export const IconAlert = styled(IconButton)(() => ({
    color: '#ff4141',
    padding: '0 8px 0 0'
}))
