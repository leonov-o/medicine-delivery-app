import React from 'react';
import * as Yup from 'yup';
import {Form} from "../../../shared/";
import {useDispatch, useSelector} from "react-redux";
import {resetCart} from "../../../entities/product/";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const OrderForm = () => {
    const {cart, coupon} = useSelector(state => state.products)
    const dispatch = useDispatch();

    const fields = ['Name', 'Email', 'Phone', 'Address'];

        const initialValues = {
            name: '',
            email: '',
            phone: '',
            address: '',
        }

        const validationSchema = Yup.object({
            name: Yup.string()
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            phone: Yup.string()
                .min(10, "Phone must be at least 10 characters")
                .max(13, "Phone must be at most 13 characters")
                .required('Required'),
            address: Yup.string()
                .required('Required'),
        });

        const onSubmit = async (values) => {
            const {name, email, phone, address} = values;
            const body = {
                customer_data: {
                    name,
                    email,
                    phone,
                    address
                },
                order_details: [
                    ...cart.map((item) => ({product_id: item._id, quantity: item.quantity})),
                ],
                coupon
            };
            const response = await fetch(`${SERVER_URL}/api/order`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            if (response.ok) {
                dispatch(resetCart());
                alert('Order placed successfully');
            } else {
                alert('Something went wrong');
            }
        };

    return (
        <div className="border-r-2">
            <Form title="Order Placement" fields={fields} initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}/>
        </div>
    );
};

