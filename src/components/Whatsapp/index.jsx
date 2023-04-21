import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {
  LinkWhatsapp
} from '../../styles/whatsapp';


const WhatsappButton = () => {
  return (
    <>
      <LinkWhatsapp
        href='https://wa.me/34687489741'
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppIcon sx={{ fontSize: { xs: '30px', sm: '36px' }, color: 'white' }} />
      </LinkWhatsapp>
    </>
  );
};

export { WhatsappButton }