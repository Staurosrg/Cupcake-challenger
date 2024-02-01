import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState} from 'react';
import cake1 from './Imagens/cake1.jpg';
import cake2 from './Imagens/cake2.jpg';
import cake3 from './Imagens/cake3.jpg';
import cake4 from './Imagens/cake4.jpg';


const Galery = (props) => {
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageSelect = (event) => {
        setSelectedImage(event.target.id);
        props.onImageSelect(event.target.id)
    };
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-lg-6 md-8 col-sm-4 col-xs-6 " >
                    <input
                        type="radio"
                        className="radioButton"
                        id="cake1"
                        checked={selectedImage === 'cake1'}
                        onChange={handleImageSelect}
                    />
                    <img  src={cake1} className="img-responsive p-2"/>
                </div>

                <div className="col-lg-6 md-8 col-sm-4 col-xs-6 ">
                    <input
                        type="radio"
                        className="radioButton"
                        id="cake2"
                        checked={selectedImage === 'cake2'}
                        onChange={handleImageSelect}
                    />
                    <img src={cake2} className="img-responsive p-2"/>
                    </div>
            </div>
            <div className="row">
                <div className="col-lg-6 md-8 col-sm-4 col-xs-6 ">
                    <input
                    type="radio"
                    className="radioButton"
                    id="cake3"
                    checked={selectedImage === 'cake3'}
                    onChange={handleImageSelect}
                />
                    <img src={cake3} className="img-responsive p-2"/>
                </div>

                <div className="col-lg-6 md-8 col-sm-4 col-xs-6 ">
                    <input
                        type="radio"
                        className="radioButton"
                        id="cake4"
                        checked={selectedImage === 'cake4'}
                        onChange={handleImageSelect}
                    />
                    <img src={cake4} className="img-responsive p-2"/>
                </div>
            </div>
        </div>
    );
};

export default Galery;