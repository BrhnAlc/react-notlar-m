import  {Box, Button, Container, Typography} from "@mui/material"

const Typo = () => {
  return (
    <Container>
      <Box sx={{backgroundColor:"blue", padding:"1rem", display:"flex", border:"1px solid tomato"}}>
      
      <Typography variant="h6" component="h1" color="red" mt={4}>
        MUI Typo
      </Typography>
      <Typography variant="button">

      alaca
      </Typography>
    </Box>
    <Button variant="contained" sx={{color:"primary", backgroundColor:"red"}}>
      Click
    </Button>
    <Button variant="contained">
      can
    </Button>
    </Container>
  )
}

export default Typo;