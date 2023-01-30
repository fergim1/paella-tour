import { useEffect, useState } from "react";
import {  BookNowTitle, BookNowWrapperTimeQty, BookNowGridContainer, BookNowGridItemCalendar, BookNowGridItemDetails, BookNowContainter, BookNowButtonTime, BookNowStackTimes, BookNowTitleDate, BokNowSubtitle, BookNowTextQuantity, BookNowTextTotal, BookNowButton, BookNowSpan } from "../../styles/book-now"

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import moment from 'moment';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';


import { FormControl, MenuItem, Select, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";

import { TIMES, QUANTITIES, DISABLED_DAYS } from '../../constants'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const initialTicket = {
    date: moment().format(),
    time: false,
    quantity: 1
}

const BookNow = () => {
    const [ticket, setTicket] = useState(initialTicket);

    const disabledDays = (date) => {
        return DISABLED_DAYS.map((el) => moment(el).format()).includes(date.format())
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

    const dateFormated = moment(ticket.date).format("dddd, Do MMMM YYYY")

    useEffect(() => {
        if (ticket.time){
            const timeFiltered = TIMES.filter(el => el === ticket.time)
            const othersTime = TIMES.filter(el => el !== ticket.time)
            document.getElementById(timeFiltered[0]).style.backgroundColor = "#f9c301"
            othersTime.map((el) => (
                document.getElementById(el).style.backgroundColor = "#f8f8f8"
            ))
        }
    }, [ticket.time])

    const handleBuyTicket = () => {
        console.log(ticket)

    }

    return (
        <BookNowContainter id='Book Now' sx={{mt: '20px'}}>
            <BookNowGridContainer id='Book Now' container spacing={1} >

{/*--------------------------------  GRID 1: LEFT - TOP -------------------------------- */}
                <BookNowGridItemCalendar item xs={12} sm={6}>
                    <Stack spacing={2} direction='column' sx={{width: '100%',justifyContent: 'center', alignItems: 'center'}} >
                        <Stack spacing={{xs: 0, md: 4}} direction={{xs: 'column', md: 'row'}} sx={{alignItems: 'center'}}>
                            <BookNowTitle>Book Now</BookNowTitle>
                            <Stack spacing={0} direction='column' sx={{alignItems: {xs: 'center', md: 'end'}}}>
                                <BokNowSubtitle> 80 € per guest </BokNowSubtitle>
                                <BookNowSpan> Include all food and drink </BookNowSpan>
                            </Stack>
                        </Stack>

                        <LocalizationProvider dateAdapter={AdapterMoment} >
                            <StaticDatePicker
                                displayStaticWrapperAs="desktop"
                                openTo='day'
                                value={ticket.date}
                                minDate={moment().format()}
                                name='date'
                                onChange={(newValue) => hangleChangeDate(newValue)}
                                renderInput={(params) => <TextField {...params} />}
                                shouldDisableDate={disabledDays}
                            />
                        </LocalizationProvider>
                    </Stack>
                </BookNowGridItemCalendar>
{/*--------------------------------  End of GRID 1: LEFT - TOP -------------------------------- */}

{/*--------------------------------  GRID 2: RIGHT - BOTTOM -------------------------------- */}
                <BookNowGridItemDetails item xs={12} sm={6}>
                    <BookNowWrapperTimeQty direction='column' spacing={4} >
                        <BookNowTitleDate> { dateFormated } </BookNowTitleDate>
                            <BookNowStackTimes direction='row' spacing={1} >
                                {
                                    TIMES.map((el)=> (
                                        <BookNowButtonTime id={el} component="button" key={el} onClick={() => handleChangeTime(el)}>
                                            {el} hs
                                        </BookNowButtonTime>
                                    ))
                                }
                            </BookNowStackTimes>

                        <Stack direction='row' spacing={5} sx={{marginTop: '16px', justifyContent: 'center', alignItems: 'center'}}>
                            <Box sx={{display: 'flex'}}>
                                <BookNowTextQuantity > Quantity: </BookNowTextQuantity>

                                <FormControl size='small'>
                                    <Select
                                        sx={{  
                                            width: '40px',
                                            height: '20px',
                                            borderBottom: 'none',
                                            '& .MuiInput-input': {
                                                padding: '6px'
                                            }
                                        }}
                                        variant="standard"
                                        labelId="quantity-label"
                                        id="quantity"
                                        name='quantity'
                                        value={ticket.quantity}
                                        label="Quantity"
                                        onChange={hangleChangeQuantity}
                                    >
                                        {QUANTITIES.map((el)=> (
                                            <MenuItem key={el} value={el}> {el} </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl> 

                            </Box>
                            <Box sx={{display: 'flex'}}>
                                <BookNowTextTotal > Total:  € {ticket.quantity * 80}  </BookNowTextTotal>
                            </Box>
                        </Stack>

                        <BookNowButton
                            endIcon={<ShoppingCartIcon/>}
                            onClick={handleBuyTicket}
                        >
                            Buy TICKETS
                        </BookNowButton>

                    </BookNowWrapperTimeQty>
                </BookNowGridItemDetails>
{/*--------------------------------  End of GRID 2: RIGHT - BOTTOM -------------------------------- */}

            </BookNowGridContainer>
        </BookNowContainter>
    )
}

export { BookNow }