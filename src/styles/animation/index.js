import { keyframes } from "@mui/system";


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


export const bounceInTop = keyframes`
0% {
    -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
            transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
`
