import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

////////////// Context /////////////////////////////////////////////
import { useContext } from 'react';
import { AppContext } from '../../context';
import { useLanguage } from '../../hooks/useLanguage';

////////////// Text of BookNowPage ///////////////////////////////////////////
import { textBookNow } from '../../constants/index'

////////////// Icons /////////////////////////////////////////////////////////
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';


import { IconAlert, WrapperAlertText } from '../../styles/alert';



const AlertInfo = ({ open, setOpen, ticket }) => {
  const { language } = useContext(AppContext)
  const text = useLanguage(language, textBookNow)

  const handleClose = () => { setOpen(false) };


  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          {text.alertTitle}
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {
              ticket.time === false
              &&
              <WrapperAlertText>
                <IconAlert>
                  <WatchLaterIcon />
                </IconAlert>
                {text.alertTime}
              </WrapperAlertText>
            }
            <br></br>
            {
              !ticket.phone
              &&
              <WrapperAlertText>
                <IconAlert>
                  <PhoneIphoneIcon />
                </IconAlert>
                {text.alertPhone}
              </WrapperAlertText>
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus> OK </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export { AlertInfo }