import React from 'react';
import * as Yup from "yup";
import {Form} from "../../../shared/";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;


const EmailPhoneForm = ({onResult}) => {
    const fields = ['Email', 'Phone'];
    const initialValues = {
        email: '',
        phone: ''
    }
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        phone: Yup.string()
            .min(10, "Phone must be at least 10 characters")
            .max(13, "Phone must be at most 13 characters")
            .required('Required')
    });

    const onSubmit = async (values) => {
        const {email, phone} = values;
        const response = await fetch(`${SERVER_URL}/api/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                phone
            })
        })

        const data = await response.json();
        onResult(data)
    };

    return <Form title="Order History" fields={fields} initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} />
};

const OrderIdForm = ({onResult}) => {
    const fields = ['Order'];
    const initialValues = {
        order: ''
    }
    const validationSchema = Yup.object({
        order: Yup.number()
            .positive()
            .required('Required'),
    });

    const onSubmit = async (values) => {
        const response = await fetch(`${SERVER_URL}/api/orders/${values.order}`)
        const data = await response.json();
        onResult(data)
    };

    return <Form title="Order History" fields={fields} initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} />
};

export const HistoryForm = ({onResult}) => {
    const [activeForm, setActiveForm] = React.useState('EmailPhoneForm');

    return (
        <div>
            {
                activeForm === 'EmailPhoneForm' && (
                    <div>
                        <EmailPhoneForm onResult={onResult}/>
                        <div className="text-center underline cursor-pointer mt-5 font-medium text-blue-400"
                             onClick={() => setActiveForm('OrderIdForm')}>Search by order number
                        </div>
                    </div>
                )
            }
            {
                activeForm === 'OrderIdForm' && (
                    <div>
                        <OrderIdForm onResult={onResult}/>
                        <div className="text-center underline cursor-pointer mt-5 font-medium text-blue-400"
                             onClick={() => setActiveForm('EmailPhoneForm')}>Search by email and phone
                        </div>
                    </div>
                )
            }
        </div>
    )
};
