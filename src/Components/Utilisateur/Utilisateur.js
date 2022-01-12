import './Utilisateur.css'
import imgJeremy from '../../images/image-jeremy.png'

export default function Utilisateur() {

    const changeActive = (e) => {
        let boutons = Array.from(e.parentElement.children)
        boutons.forEach(e => {
            e.classList.remove('boutonsClick')
        });
        e.classList.add('boutonsClick')
    }

    return (
        <div className='bg-bleu-fonce arrondi col-3 h-100 mx-1'>
            <div className="bg-bleu-clair arrondi w-100 heith-66">
                <img src={imgJeremy} alt="pp de Jeremy" className='col-4 m-4 rounded-circle border border-light border-3'/>
                <p className='ms-4 text-desat mb-0'>Report for</p>
                <h2 className='ms-4 text-light fs-1 fw-light mt-0'>Jeremy <br /> Robson</h2>
            </div>
            <div onClick={(e) => changeActive(e.target)} className='height-33 d-flex flex-column justify-content-center w-100'>
                <p className='boutons curseur-pointeur ms-4 text-desat'>Daily</p>
                <p className='boutons curseur-pointeur ms-4 text-desat'>Weekly</p>
                <p className='boutons curseur-pointeur ms-4 text-desat'>Monthly</p>
            </div>
        </div>
    )
}
