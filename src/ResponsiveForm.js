import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';


const ResponsiveForm = (props) => {
    const [phone, setPhone] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [firstDelivery, setFirstDelivery] = useState('');
    const today = new Date().toISOString().split('T')[0];
    const selectedCake = props.selectedImage;
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event) => {
        const inputValue = event.target.value;
        setEmail(inputValue);
        setIsValidEmail(validateEmail(inputValue));
    };
    
    const handleFirstDeliveryChange = (event) => {
        setFirstDelivery(event.target.value);
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };
    const handleSubmit = async (event) => {
    event.preventDefault();
    
        if (isValidEmail) {
            const formData = {
              phone,
              firstName,
              lastName,
              email,
              selectedCake
            };
      
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(formData),
                });
        
                if (response.status === 201) {
                    alert('Pedido enviado com sucesso!!!');
                  
                } else {
                      alert('Ocorreu um erro ao enviar o pedido. Código de resposta da API: ' + response.status);
                }
              } catch (error) {
                console.error('Erro ao enviar o pedido:', error);
              }
          } else {
                console.log('E-mail inválido:', email);
          }
    };
    
    return (
    
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="row">
                    <div className="col-md-6 col-sm-10 mb-3">
                        <label htmlFor="firstName">Name*</label>
                        <input type="text" className="form-control" id="firstName" value={firstName} placeholder="First"   onChange={handleFirstNameChange}required/>
                    </div>
                    <div className="col-md-6 col-sm-10 mb-3">
                        <label htmlFor="lastName"></label>
                        <input type="text" className="form-control" id="lastName" value={lastName} placeholder="Last"  onChange={handleLastNameChange} required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-10 mb-3">
                        <label> First Delivery date</label> 
                        <input type="date" className="form-control" id="firstDelivery " value={firstDelivery} onChange={handleFirstDeliveryChange}  min={today} placeholder="MM/DD/YYYY" />  
                    </div>
                    <div className="col-md-6 col-sm-10 mb-3">
                        <label> Preferred delivery time</label> 
                        <input type="time" className="form-control" id="validationDefault04" placeholder="HH:MM AM" />  
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-10 mb-3">
                        <label> Phone*</label> 
                        <input type="tel" className="form-control" id="validationDefault05" value={phone}  onChange={handlePhoneChange} placeholder="### ### ####" required />  
                    </div>
                    <div className="col-md-6 col-sm-10 mb-3">
                    <label htmlFor="inputEmail">Email*</label>
                        <input type="email"  className={`form-control ${isValidEmail ? '' : 'is-invalid'}`} id="inputEmail" value={email}
                            onChange={handleEmailChange}/> 
                            {!isValidEmail && (
                            <div className="invalid-feedback">Please enter a valid email address.</div>
                            )}
                            <div>to receive the complete receipt</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-6 mb-3">
                        <label> Address</label> 
                        <input type="text" className="form-control" id="validationDefault06" placeholder="Street Address" />  
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-6  mb-3">
                        <input type="text" className="form-control" id="validationDefault07" placeholder="Street Address Line 2" />  
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-10 mb-3">
                        <input type="text" className="form-control" id="validationDefault08" placeholder="City" />  
                    </div>
                    <div className="col-md-6 col-sm-10 mb-3">
                        <input type="text" className="form-control" id="validationDefault09" placeholder="Region" />  
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-10 mb-3">
                        <input type="number" className="form-control" id="validationDefault11" placeholder="Postal/Zip Code" />  
                    </div>
                    <div className="col-md-6 col-sm-10 mb-3">
                    
                        <div className="form-group">
                            
                            <select id="countrySelect" className="form-control" placeholder="Country">
                                <option>Country</option>
                                <option>Brazil</option>
                                <option>Canada</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div> 
                
            <div className="text-center">
                <button className="btn btn-primary" type="submit">Order</button>
            </div>
        </form>
    );
};

export default ResponsiveForm;