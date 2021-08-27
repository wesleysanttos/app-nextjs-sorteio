import { useRouter } from 'next/router'
import { useState } from 'react'
import NavBar from '../../components/navbar'
import Banner from '../../components/banner'
import Footer from '../../components/footer'
import { Container, Grid, Typography, TextField, Checkbox, withStyles, Button} from '@material-ui/core'
import { orange } from '@material-ui/core/colors'

export async function getServerSideProps(context) {
  const promotion = context.query.promotion;

    const res = await fetch(`http://localhost:3000/api/promotion?url=${promotion}`);
    const data = await res.json();

    return { 
      props: { 
        data
      } 
    }; 

}

const Promotion = ({ data }) => {  
  const namePromotion = data.nome;
  const autorizationSefel = data.certificado_sefel;
  const linkPdf = data.regulamento;
  const linkBanner = data.banner;

  const OrangeButton = withStyles({
    root: {
      backgroundColor: orange[400],
      '&:hover' :{
        backgroundColor: orange[600],
      }
    }
  })((props) => <Button color="default" {...props} />);

  const OrangeCheckbox = withStyles({
    root: {
      color: orange[400],
      '&$checked': {
        color: orange[600],
      }
    },
    checked: {}
  })((props) => <Checkbox color="default" {...props} />);

  const [orderNumber, setOrderNumber] = useState('');

  return (
    <>
      <NavBar>
        <a href="http://www.kabum.com.br/">
          <img src="https://static.qa.kabumdev.com.br/conteudo/sorteio/img/logo_kabum.png" alt="KaBuM!"/>
        </a>
      </NavBar>

      <Banner linkImage={linkBanner}></Banner>

      <Container maxWidth='md'>
        <Grid container spacing={2}>

          <Grid item xs={12}> 
            <Typography variant='h3' align='center'>{namePromotion}</Typography>
            <Typography variant='h5' align='center'>Certificado de Autorização {autorizationSefel}</Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              value={orderNumber}
              onChange={event => {
                setOrderNumber(event.target.value)
              }}
              id='orderNumber' 
              name='orderNumber' 
              label='Insira o número do pedido' 
              type='text' 
              variant='outlined' 
              margin='normal' 
              fullWidth 
              required
            /> 
          </Grid>

          <Grid item xs={12}> 
            <OrangeCheckbox
              color="default"
              inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
            <label>Li e estou de acordo com o regulamento. </label>
            <a href="#">Clique aqui para acessar o regulamento</a>
          </Grid>
          
          <Grid item xs={12}> 
            <OrangeButton type='submit' variant="contained" color="primary">Gerar Cupons</OrangeButton>
          </Grid>

        </Grid>

       
      </Container>
      <Footer />
    </>
  )
}

export default Promotion;