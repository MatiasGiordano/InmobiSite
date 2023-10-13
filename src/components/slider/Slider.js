import { Carousel } from 'react-bootstrap';
import './Slider.css';

function Slider(imagenes) {
    const imgList = imagenes.imagenes;
    const gruposDeImagenes = [];
    for (let i = 0; i < imgList.length; i += 6) {
        gruposDeImagenes.push(imgList.slice(i, i + 6));
    }

    return (
        <Carousel>
            {gruposDeImagenes.map((grupo, idx) => (
                <Carousel.Item key={idx}>
                    <div className="d-flex justify-content-between">
                        {grupo.map((imagen, index) => (
                            <div className="d-inline-block w-16 card" key={index}>
                                <img src={imagen.imageUrl} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{imagen.title}</h5>
                                    <p className="card-text">{imagen.description}</p>
                                    <a href="#" className="btn btn-primary">Info</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>

    );
}
export default Slider;