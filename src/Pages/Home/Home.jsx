import inDevelopmentImage from "../../assets/in_development.gif"

function HomePage() {
    return(
        <div style={{display: 'flex', justifyContent:'center', alignContent:'center'}}>
            <img src={inDevelopmentImage} alt="in development" style={{textAlign: 'center', width: '600px', margin: '15px'}}/>
        </div>
    )
}
export default HomePage