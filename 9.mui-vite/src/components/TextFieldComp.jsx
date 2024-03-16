import { Container, TextField, Typography } from "@mui/material";




const TextFieldComp = () => {
  return (
    <Container>
     <Typography variant="h4" color={"secondary.dark"}>
        TextField
    </Typography>   
<TextField id="email" label="email" variant="outlined" placeholder="Enter your email" />
<TextField id="filled-basic" label="password" variant="filled" placeholder="Enter your  password"/>
<TextField id="standard-basic" label="name" variant="standard" placeholder="Enter your  name" />
    </Container>
  )
}

export default TextFieldComp;