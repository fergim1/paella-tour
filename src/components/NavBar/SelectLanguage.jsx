import { MenuItem, FormControl, Select } from "@mui/material"
import { Box } from "@mui/system"
import { useContext } from "react"
import EnglishFlag from "../../assets/flags/EnglishFlag"
import SpanishFlag from "../../assets/flags/SpanishFlag"
import { AppContext } from "../../context"




const SelectLanguage = ({theme}) => {
  const { language, setLanguage}  = useContext(AppContext)

  const handleLanguage = (e) => {
    setLanguage(e.target.value)
  }

  return(
    <Box ml='10px'>
        <FormControl  variant="standard" >
            <Select
              labelId="language"
              id="select"
              label={` aaaaaaaaaaaaaaaaaa ${<EnglishFlag/> }`}
              value={language}
              displayEmpty
              onChange={handleLanguage}
            >
                <MenuItem value='ENG'> <EnglishFlag/> </MenuItem>
                <MenuItem value='ESP'> <SpanishFlag/> </MenuItem>

            </Select>
        </FormControl>
  </Box>
  )
}

export { SelectLanguage }