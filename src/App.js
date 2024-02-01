import 'bootstrap/dist/css/bootstrap.min.css';
import ResponsiveForm from './ResponsiveForm';
import Galery from './Galery';
import React, { useState} from 'react';



function App() {
    const [selectedImage, setSelectedImage] = useState('');
    const handleImageSelect = (imageId) => {
        setSelectedImage(imageId);
    };

    return (
        <div className="row">
            <div className="centraliza">
                <div className="row">
                    <h3 className="App-title">The Cake Order Form</h3><br/>
                </div>
                <Galery onImageSelect={handleImageSelect} />
                <div className="row">
                    <h6 className="App-body">Order your freshly baked cakes using only the finest quality natural ingredientes.</h6><br/>
                </div>
                
                <div className="row">
                    <a className="App-body">Order Information</a>
                </div>
            
                <ResponsiveForm selectedImage={selectedImage} />
            
        </div>
        </div>
    
    );

}
export default App;
