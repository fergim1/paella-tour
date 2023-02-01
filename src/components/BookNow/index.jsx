import { useContext, useEffect, useState } from "react";
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
    Timetable,
    FormControlQuantity,
    SelectQuantity,
    MenuItemQuantity,
    TextQuantity,
    TextTotal,
    WrapperButtom,
    ButtomBuyTicket,
} from "../../styles/book-now"

////////////// Context /////////////////////////////////////////////
import { AppContext } from "../../context";
import { useLanguage } from "../../hooks/useLanguage";

////////////// DatePicker///////////////////////////////////////////
import {  LocalizationProvider  } from '@mui/x-date-pickers';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TextField } from "@mui/material";

////////////// Day js /////////////////////////////////////////////
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/es';
import 'dayjs/locale/en';

////////////// Icons ///////////////////////////////////////////////
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

////////////// Constants ///////////////////////////////////////////
import { TIMES, QUANTITIES, DISABLED_DAYS } from '../../constants'

////////////// Text of BookNowPage ///////////////////////////////////////////
const textSection = {
    english: {
        title: 'Book Now',
        subtitle: '80 € per guest',
        span: ' Include all food and drink ',
        guest: 'Guest :',
        total: 'Total:  € ',
        buttonText: 'Buy TICKETS',

    },
    spanish: {
        title: 'Reservar',
        subtitle: '80 € por persona',
        span: ' Incluye bebida y comida ',
        guest: 'Cantidad :',
        total: 'Total:  € ',
        buttonText: 'Comprar TICKETS',
    }
}


const initialTicket = {
    date: dayjs().format(),
    time: false,
    quantity: 1
}

const BookNowPage = () => {
    const [ticket, setTicket] = useState(initialTicket);
    const { language } = useContext(AppContext)
    const text = useLanguage(language, textSection)
    const [locale, setLocale] = useState(language);
    const [dateFormated , setDateFormated] = useState(dayjs(initialTicket.date).format("dddd, D MMMM YYYY"))

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
        if (ticket.time){
            const timeSelected = TIMES.filter(el => el === ticket.time)
            const othersTime = TIMES.filter(el => el !== ticket.time)
            document.getElementById(timeSelected[0]).style.backgroundColor = "#f9c301"
            othersTime.map((el) => (
                document.getElementById(el).style.backgroundColor = "#d8d8d8"
            ))
        }
    }, [ticket.time])

    const handleBuyTicket = () => {
        const ticketReady = {
                    ...ticket,
                    date: dayjs(ticket.date).format("dddd, D MMMM YYYY")
                }
        console.log(ticketReady)

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
                                    <AccessTimeIcon />
                                </Icon>
                            </WrapperIcon>
                            <WrapperDetail >
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
                                <TextQuantity > {text.guest} </TextQuantity>
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
                                    <TextTotal >{ text.total} {ticket.quantity * 80}  </TextTotal>
                            </WrapperDetail>
                        </WrapperInfo>

                        <WrapperButtom >
                            <ButtomBuyTicket
                                endIcon={<ShoppingCartIcon/>}
                                onClick={handleBuyTicket}
                            >
                                {text.buttonText}
                            </ButtomBuyTicket>
                        </WrapperButtom>

                    </WrapperRightBottom>
                </GridItemRightBottom>
{/*--------------------------------  End of GRID RIGHT - BOTTOM -------------------------------- */}

            </GridContainer>
        </Containter>
    )
}

export { BookNowPage }