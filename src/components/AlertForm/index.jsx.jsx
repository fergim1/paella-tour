/////////////////////  Material UI Components  ///////////////////////////////////
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material'

///////////////////// Components Styles ///////////////////////////////////
import { IconAlert, WrapperAlertText } from '../../styles/alert';

////////////// Context //////////////////////////////////////////////////////////
import { useContext } from 'react';
import { AppContext } from '../../context';
import { useLanguage } from '../../hooks/useLanguage';

////////////// Icons /////////////////////////////////////////////////////////
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import TextsmsIcon from '@mui/icons-material/Textsms';

////////////// Text of PrivatePage ///////////////////////////////////////////
import { textAlertForm as textSection } from '../../constants/index'

const AlertForm = ({ open, setOpen, form }) => {
    const { language } = useContext(AppContext)
    const text = useLanguage(language, textSection)

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
                  form.name === ''
                    &&
                  <WrapperAlertText>
                        <IconAlert>
                            <PersonIcon />
                        </IconAlert>
                        {text.alertName}
                  </WrapperAlertText>
                }
                <br></br>
                {
                  form.email === ''
                      &&
                  <WrapperAlertText>
                          <IconAlert>
                              <EmailIcon />
                          </IconAlert>
                          {text.alertEmail}
                  </WrapperAlertText>
                }
                <br></br>
                {
                  form.message === ''
                      &&
                  <WrapperAlertText>
                        <IconAlert>
                            <TextsmsIcon />
                        </IconAlert>
                        {text.alertMessage}
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

export { AlertForm }