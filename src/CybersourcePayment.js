const axios = require("axios")
let FormData = require("form-data")

const accessKey = 'a6fcaf71650738088bad7a17be9d32e7';
const profileId = 'BC56D4B8-E664-43CF-9BB6-684190EE5926';
let signedFieldNames = 'access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency,payment_method,bill_to_forename,bill_to_surname,bill_to_email,bill_to_phone,bill_to_address_line1,bill_to_address_city,bill_to_address_state,bill_to_address_country,bill_to_address_postal_code,auth_trans_ref_no';

function CybersourcePayment(props) {

}