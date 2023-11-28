import { UilSearch } from '@iconscout/react-unicons';

const Search = () => {
    return(
        <div style={styles.container}>
            <h1 style={styles.title}>
                Rechercher une formation
            </h1>
            <p style={styles.text}>De nouvelles formations en apprentissage sont intégrées progressivement.</p>
            <div style={styles.searchSection}>
                <label htmlFor="searchInput" style={styles.label}>Rechercher une <strong>formation</strong>, un <strong>domaine d’étude</strong>, un lieu <strong>géographique…</strong></label>
               <div style={styles.wrapper}><input id="searchInput"  placeholder='Ex: BTS droit Lyon'  style={styles.input} />
                <button style={styles.button}>        <UilSearch size="14" color="white" style={{ position: 'relative', top: '3px' }} /> Rechercher</button>
               </div> 
            </div>
        </div>
    )
}

export default Search

const styles = {
    container: {
      backgroundColor: '#F5F5FE',
      border: '1px solid #F5F5FE',
      margin: "40px 100px"
    },
    title: {
        margin: "50px 0px",
        textAlign: 'center' 
    },
    text: {
        textAlign: 'center',
        fontWeight: '100'
    },
    searchSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Centre les éléments horizontalement
        margin: '20px 0'
    },
    label: {
        marginTop:"40px",
    },
    wrapper: {
        margin:"10px",
        flexDirection:"row"
    },
    input: {
        backgroundColor: '#EEEEEE',
        border: 'none',
        borderBottom: '2px solid #1212FF',
        padding: '10px',
        width:"400px",
    },
    button: {
        backgroundColor: '#1212FF',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
          borderBottom: '2px solid #1212FF',
    }
}
