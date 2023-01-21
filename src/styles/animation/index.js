import { keyframes } from "@mui/system";


export const trackingInContractBck = keyframes`
    0% {
        letter-spacing: 1em;
        -webkit-transform: translateZ(400px);
                transform: translateZ(400px);
        opacity: 0;
    }
    40% {
        opacity: 0.6;
    }
    100% {
        -webkit-transform: translateZ(0);
                transform: translateZ(0);
        opacity: 1;
    }
`


export const textFocusIn = keyframes`
    0% {
        -webkit-filter: blur(12px);
                filter: blur(12px);
        opacity: 0;
    }
    100% {
        -webkit-filter: blur(0px);
                filter: blur(0px);
        opacity: 1;
    }
`