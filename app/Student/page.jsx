import Header from '../Components/Header'
import Search from '../Components/Search'

const SignIn = () => (
    <>    <Header/>
    <h1 style={{
            display: 'flex',        // Utilisez flexbox
            justifyContent: 'center', // Centre horizontalement
            alignItems: 'center',     // Centre verticalement         // Prend toute la hauteur de la vue
            margin: '10px'               // Enlève les marges par défaut
        }}>Plateforme étudiant</h1>
            <p style={{margin: "100px"}}>Rechercher une formation</p>
        <Search/>
    </>

)

export default SignIn;