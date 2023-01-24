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

export const smoke1 = keyframes`
    0% {
        filter: blur(0px);
        transform: translateY(0px) scale(-1, 1);
        opacity: 0;
    }

    25% {
        filter: blur(3px);
        transform: translateY(-10px) scale(-1, 1.05);
        opacity: 0.5;
    }

    50% {
        filter: blur(5px);
        transform: translateY(-20px) scale(-1, 1.1);
        opacity: 1;
    }

    75% {
        filter: blur(5px);
        transform: translateY(-30px) scale(-1, 1.15);
        opacity: 0.5;
    }

    100% {
        filter: blur(7px);
        transform: translateY(-40px) scale(-1, 1.2);
        opacity: 0;
    }
`

export const smoke2 = keyframes`
    0% {
        filter: blur(0px);
        transform: translateY(0px) scale(1);
        opacity: 0;
    }

    25% {
        filter: blur(3px);
        transform: translateY(-10px) scale(1.05);
        opacity: 0.5;
    }

    50% {
        filter: blur(5px);
        transform: translateY(-20px) scale(1.1);
        opacity: 1;
    }

    75% {
        filter: blur(5px);
        transform: translateY(-30px) scale(1.15);
        opacity: 0.5;
    }

    100% {
        filter: blur(7px);
        transform: translateY(-40px) scale(1.2);
        opacity: 0;
    }
`

export const smoke3 = keyframes`
    0% {
        filter: blur(0px);
        transform: translateY(0px) scale(1);
        opacity: 0;
    }

    25% {
        filter: blur(3px);
        transform: translateY(-20px) scale(1.05);
        opacity: 0.5;
    }

    50% {
        filter: blur(5px);
        transform: translateY(-40px) scale(1.1);
        opacity: 1;
    }

    75% {
        filter: blur(5px);
        transform: translateY(-60px) scale(1.15);
        opacity: 0.5;
    }

    100% {
        filter: blur(7px);
        transform: translateY(-80px) scale(1.2);
        opacity: 0;
    }   
`