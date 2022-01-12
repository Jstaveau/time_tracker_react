import './Cards.css'

export default function Cards(props) {
    return (
        <div className={'divCards arrondi w-100 ms-3 d-flex flex-column justify-content-end' + props.bg}>
            {props.img}
            <div className={'text-light height-cards-front w-100 bg-bleu-fonce arrondi'}>
                <div className='d-flex justify-content-between align-items-center mx-4 my-2'>
                    <p className='m-0 fs-5 fw-bold'>{props.sujet}</p>
                    <p className='curseur-pointeur dot text-desat m-0 fw-bold fs-4'>...</p>
                </div>
                <h1 className='titre-cards mx-4 mt-4 fw-light'>{props.tempsActu}hrs</h1>
                <p className='text-desat mx-4'>Last {props.periode} - {props.tempsAv}hrs</p>
            </div>
        </div>
    )
}
