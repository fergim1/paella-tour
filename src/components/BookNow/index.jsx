import { useEffect, useState } from "react";
import {
    Containter,
    GridContainer,
    //  TOP - LEFT
    GridItemLeftTop,
    WrapperLeftTop,
    WrapperTitleAndSubtitle,
    TitleBookNow,
    WrapperSubtitles,
    SubtitlePrice,
    SubtitleDescription,

    //  RIGHT - BOTTOM
    GridItemRightBottom,
    WrapperRightBottom,
    WrapperInfo,
    WrapperIcon,
    Icon,
    TextDate,
    WrapperDetail,
    TextDetail,
    Timetable,
    FormControlQuantity,
    SelectQuantity,
    MenuItemQuantity,
    TextTotal,
    WrapperButtom,
    ButtomBuyTicket,
    Spinner,
} from "../../styles/book-now"

////////////// Context //////////////////////////////////////////////////////
import { useContext } from 'react';
import { AppContext } from "../../context";
import { useLanguage } from "../../hooks/useLanguage";

////////////// DatePicker////////////////////////////////////////////////////
import {  LocalizationProvider  } from '@mui/x-date-pickers';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TextField } from "@mui/material";

////////////// Day js ///////////////////////////////////////////////////////
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/es';
import 'dayjs/locale/en';

////////////// Icons /////////////////////////////////////////////////////////
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

////////////// Constants /////////////////////////////////////////////////////
import { TIMES, QUANTITIES, DISABLED_DAYS } from '../../constants'

////////////// Text of BookNowPage ///////////////////////////////////////////
import { textBookNow } from '../../constants/index'

////////////// Axios /////////////////////////////////////////////////////////
import { axiosStripe } from "../../hooks/axiosStripe";

////////////// International Phone Number Input /////////////////////////////
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { InputPhoneWithFlags } from "../../styles/book-now"

////////////// Alert ////////////////////////////////////////////////////////
import { AlertInfo } from './Alert'

const initialTicket = {
    id: 1,
    date: dayjs().format(),
    time: false,
    quantity: 1,
    phone: '',
}


const BookNowPage = () => {
    const [ticket, setTicket] = useState(initialTicket);
    const { language } = useContext(AppContext)
    const text = useLanguage(language, textBookNow)
    const [locale, setLocale] = useState(language);
    const [dateFormated , setDateFormated] = useState(dayjs(initialTicket.date).format("dddd, D MMMM YYYY"))
    const [phoneInput, setPhoneInput ] = useState()
    const [alertOpen, setAlertOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(language==='en') {
            setLocale('en')
            setDateFormated(dayjs(ticket.date).locale('en').format("dddd, D MMMM YYYY"))
        }
        if(language==='es') {
            setLocale('es')
            setDateFormated(dayjs(ticket.date).locale('es').format("dddd, D MMMM YYYY"))
        }
    }, [language, ticket.date ])


    const disabledDays = (date) => {
        return DISABLED_DAYS.map((el) => dayjs(el).format()).includes(date.format())
    }

    const hangleChangeQuantity = (e) => {
        setTicket({ ...ticket, quantity : e.target.value })
    }

    const handleChangeTime = (time) => {
        setTicket({ ...ticket, time })
    }

    const hangleChangeDate = (newValue) => {
        setTicket({...ticket, date: newValue});
    }

    useEffect(() => {
        setTicket({ ...ticket, phone: phoneInput })
    }, [phoneInput])


    useEffect(() => {
        if (ticket.time){
            const timeSelected = TIMES.filter(el => el === ticket.time)
            const othersTime = TIMES.filter(el => el !== ticket.time)
            document.getElementById(timeSelected[0]).style.backgroundColor = "#f9c301"
            othersTime.map((el) => (
                document.getElementById(el).style.backgroundColor = "#d8d8d8"
            ))
        }
    }, [ticket.time])

    const handleBuyTicket = async (ticket) => {
        if (!ticket.phone || ticket.time === false){
            return setAlertOpen(!alertOpen)
        }
        setLoading(true)
        const ticketReady = {
                    ...ticket,
                    date: dayjs(ticket.date).format("dddd, D MMMM YYYY")
                }
        const info = {
                id: ticket.id,
                date: ticketReady.date,
                time: ticket.time,
                quantity: ticket.quantity,
                phone: ticket.phone
            }
       await axiosStripe(info)
    //    setLoading(false)
    }


    return (
        <Containter id='Book Now' sx={{mt: '20px'}}>
            <GridContainer id='Book Now' container spacing={1} >

{/*--------------------------------  GRID LEFT - TOP -------------------------------- */}
                <GridItemLeftTop item xs={12} sm={6}>
                    <WrapperLeftTop spacing={2}>
                        <WrapperTitleAndSubtitle>
                            <TitleBookNow>{text.title}</TitleBookNow>
                            <WrapperSubtitles >
                                <SubtitlePrice> {text.subtitle} </SubtitlePrice>
                                <SubtitleDescription>{text.span}</SubtitleDescription>
                            </WrapperSubtitles>
                        </WrapperTitleAndSubtitle>

                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale} >
                            <StaticDatePicker
                                dayOfWeekFormatter={(day) => `${day}.`}
                                displayStaticWrapperAs="desktop"
                                openTo='day'
                                value={ticket.date}
                                minDate={dayjs().format()}
                                name='date'
                                onChange={(newValue) => hangleChangeDate(newValue)}
                                renderInput={(params) => <TextField {...params} />}
                                shouldDisableDate={disabledDays}
                            />
                        </LocalizationProvider>
                    </WrapperLeftTop>
                </GridItemLeftTop>
{/*--------------------------------  End of GRID LEFT - TOP -------------------------------- */}

{/*--------------------------------  GRID RIGHT - BOTTOM -------------------------------- */}
                <GridItemRightBottom item xs={12} sm={6}>
                    <WrapperRightBottom spacing={{xs: 0, sm: 2}} >

                        <WrapperInfo >
                            <WrapperIcon >
                                <Icon>
                                    <InsertInvitationIcon />
                                </Icon>
                            </WrapperIcon>
                            <WrapperDetail >
                                <TextDate> { dateFormated } </TextDate>
                            </WrapperDetail>
                        </WrapperInfo>

                        <WrapperInfo>
                            <WrapperIcon >
                                <Icon>
                                    <WatchLaterIcon />
                                </Icon>
                            </WrapperIcon>
                            <WrapperDetail >
                            <TextDetail > {text.time} </TextDetail>

                                {
                                    TIMES.map((el)=> (
                                        <Timetable id={el} key={el} onClick={() => handleChangeTime(el)}>
                                            {el} hs
                                        </Timetable>
                                    ))
                                }
                            </WrapperDetail>
                        </WrapperInfo>

                        <WrapperInfo >
                            <WrapperIcon >
                                <Icon>
                                    <LocalActivityIcon/>
                                </Icon>
                            </WrapperIcon>
                            <WrapperDetail >
                                <TextDetail > {text.quantity} </TextDetail>
                                    <FormControlQuantity size='small'>
                                        <SelectQuantity
                                            variant="standard"
                                            labelId="quantity-label"
                                            id="quantity"
                                            name='quantity'
                                            value={ticket.quantity}
                                            label="Quantity"
                                            onChange={hangleChangeQuantity}
                                        >
                                            {QUANTITIES.map((el)=> (
                                                <MenuItemQuantity key={el} value={el}> {el} </MenuItemQuantity>
                                            ))}
                                        </SelectQuantity>
                                    </FormControlQuantity>
                                    <TextTotal >Total € {ticket.quantity * 80}</TextTotal>
                            </WrapperDetail>
                        </WrapperInfo>



                        <WrapperInfo>
                            <WrapperIcon >
                                <Icon>
                                    <PhoneIphoneIcon />
                                </Icon>
                            </WrapperIcon>
                            <WrapperDetail >
                            <TextDetail > {text.phone}</TextDetail>
                            <PhoneInput
                                international
                                defaultCountry="ES"
                                style={{
                                    backgroundColor: '#d8d8d8',
                                    borderRadius: '20px',
                                    padding: '0 0 0 18px',
                                }}
                                // limitMaxLength={true}
                                inputComponent={InputPhoneWithFlags}
                                value={phoneInput}
                                onChange={setPhoneInput}
                            />
                            </WrapperDetail>
                        </WrapperInfo>



                        <WrapperButtom >
                            <ButtomBuyTicket
                                endIcon={!loading ? <ShoppingCartIcon/> : ''}
                                onClick={ () => handleBuyTicket(ticket) }
                            >
                                {!loading ? text.buttonText : <Spinner size='24px'/>}
                            </ButtomBuyTicket>
                        </WrapperButtom>

                    </WrapperRightBottom>
                </GridItemRightBottom>
{/*--------------------------------  End of GRID RIGHT - BOTTOM -------------------------------- */}
            {
                alertOpen
                &&
                <AlertInfo 
                    open={alertOpen}
                    setOpen={setAlertOpen}
                    ticket={ticket}
                    language={language}
                />
            }
            </GridContainer>
        </Containter>
    )
}

export { BookNowPage }