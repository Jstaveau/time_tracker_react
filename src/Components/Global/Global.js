import './Global.css'
import Utilisateur from '../Utilisateur/Utilisateur'
import Cards from '../Cards/Cards'

export default function Global() {
    return (
        <section className="height-section d-flex justify-content-center align-items-center col-8 m-auto bg-danger">
            <Utilisateur />
            <div className='col-10 h-100 d-flex flex-column justify-content-between'>
                <div className='height-cards d-flex justify-content-center'>
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
                <div className='height-cards d-flex justify-content-center'>
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
            </div>
        </section>
    )
}
