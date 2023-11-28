import Header from '../Components/Header'

const What = () => (
    <>    <Header/>
    <h1 style={{
            display: 'flex',        // Utilisez flexbox
            justifyContent: 'center', // Centre horizontalement
            alignItems: 'center',     // Centre verticalement
            height: '100vh',          // Prend toute la hauteur de la vue
            margin: '0'               // Enlève les marges par défaut
        }}>La Platforme de l'université</h1>
    </>

)

export default What;