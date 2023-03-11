import axios from 'axios'

const url = import.meta.env.VITE_URL_CREATE_CHECKOUT_SESSION


const axiosStripe = (props) => {

    const { id, date, time, adults, children, phone } = props
        axios
            .post(
                url,
                { id, date, time, adults, children, phone },
                )
            .then((response) => {
                return response.data
            })
            .then(({ url }) => {
                window.location = url
              })
            .catch((err) => {
                console.log(err)
            })
}


export {axiosStripe}