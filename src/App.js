import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

const axios = require("axios")
let FormData = require("form-data")
let request = require("request")

const accessKey = 'a6fcaf71650738088bad7a17be9d32e7';
const profileId = 'BC56D4B8-E664-43CF-9BB6-684190EE5926';
let signedFieldNames = 'access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency,payment_method,bill_to_forename,bill_to_surname,bill_to_email,bill_to_phone,bill_to_address_line1,bill_to_address_city,bill_to_address_state,bill_to_address_country,bill_to_address_postal_code,auth_trans_ref_no';


function App() {
    const [pull, setPull] = useState(1);
    const fetchData = () => {
        setPull(pull + 1);
    };
    useEffect(() => {
        let payment = {
            "access_key": accessKey,
            "profile_id": profileId,
            "signed_field_names": signedFieldNames,
            "unsigned_field_names": "card_type,card_number,card_expiry_date",
            "locale": "en-us",
            "transaction_uuid": "d7731b79-7058-4eeb-8509-d92afd18e369",
            "signed_date_time": "2020-10-20T11:03:09Z",
            "transaction_type": "sale",
            "reference_number": "1061",
            "amount": "1.00",
            "currency": "USD",
            "payment_method": "card",
            "bill_to_forename": "N/A",
            "bill_to_surname": "N/A",
            "bill_to_email": "ali.rajim12@gmail.com",
            "bill_to_phone": "9849428177",
            "bill_to_address_line1": "N/A",
            "bill_to_address_city": "N/A",
            "bill_to_address_state": "N/A",
            "bill_to_address_country": "N/A",
            "bill_to_address_postal_code": "N/A",
            "card_type": "001",
            "card_number": "",
            "card_expiry_date": "",
            "signature": "A1OplD33n3Nm8PgT1NkqwYuzaS+c3XwlTHLQ2aKGpEM=",
            "auth_trans_ref_no": "42655034128349112421"
        };

        request.post('https://testsecureacceptance.cybersource.com/pay', {
            form: {
                'access_key': accessKey,
                'profile_id': profileId,
                'signed_field_names': signedFieldNames,
                'unsigned_field_names': "card_type,card_number,card_expiry_date",
                'locale': 'en-us',
                'transaction_uuid': '350ee923-5321-0307-38f4-50149ff930ae',
                'signed_date_time': '2020-10-19T10:52:06Z',
                'transaction_type': 'sale',
                'reference_number': '2093',
                'amount': '1.00',
                'currency': 'USD',
                'payment_method': 'card',
                'bill_to_forename': 'N/A',
                'bill_to_surname': 'N/A',
                'bill_to_email': 'ali.rajim12@gmail.com',
                'bill_to_phone': '9849428177',
                'bill_to_address_line1': 'N/A',
                'bill_to_address_city': 'N/A',
                'bill_to_address_state': 'N/A',
                'bill_to_address_country': 'NP',
                'bill_to_address_postal_code': 'N/A',
                'card_type': "001",
                'card_number': '',
                'card_expiry_date': '',
                'signature': 'OPI0XKmgU4rYmjx/TMVTOq6cYpJsFaqeq4zGDKEqs7c=',
                'auth_trans_ref_no': '44075680692190977766'
            }
        }, function (err, httpResponse, body) {
            console.log(err);
            console.log(httpResponse);
            console.log(body);
        });
    }, [pull]);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={fetchData}>Pay</button>
            </header>
        </div>
    );
}

export default App;
