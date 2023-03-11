import axios from 'axios'

///////////////////// Hook  used in Form Component /////////////////////
const useForm = (props) => {
    const {name, email, mobile, message, url} = props
    console.log(props)
    axios.post(
        url,
        {name, email, mobile, message}
        )
        .then((res) => {
            return res.data
        })
        .then((data) => {
            console.log(data)
        })
}

export { useForm }