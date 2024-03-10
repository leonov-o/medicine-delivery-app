import React, {useState} from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup';
import {Button, Loader} from "../../../shared/";
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux";
import {SERVER_URL} from "../../../app/config.js";
import {resetCart} from "../../../entities/product/";

export const OrderForm = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const {cart, coupon} = useSelector(state => state.products)
    const dispatch = useDispatch();

    const fields = ['Name', 'Email', 'Phone', 'Address'];
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            address: '',
        },
        validationSchema: Yup.object({
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
        }),
        onSubmit: async (values) => {
            const {name, email, phone, address} = values;
            setIsProcessing(true);
            const response = await fetch(`${SERVER_URL}/api/order`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
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
                    }
                )
            })
            if (response.ok) {
                formik.resetForm();
                dispatch(resetCart());
                alert('Order placed successfully');
            } else {
                alert('Something went wrong');
            }
            setIsProcessing(false);
        },
    });
    return (
        <div className="w-96 border-r-2 px-8">
            <div className="mb-4 text-center text-2xl">Order placement</div>
            <div className="">
                <form onSubmit={formik.handleSubmit}>
                    {
                        fields.map((field, index) => (
                            <div className="" key={index}>
                                <div className="mt-5">
                                    <label htmlFor="name">{field}</label>
                                </div>
                                <input
                                    id={field.toLowerCase()}
                                    name={field.toLowerCase()}
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values[field.toLowerCase()]}
                                    className={clsx(
                                        "w-full rounded-md border-2 p-1 outline-0",
                                        {
                                            ["border-red-600"]: formik.touched[field.toLowerCase()] && formik.errors[field.toLowerCase()],
                                        }
                                    )}
                                />
                                {formik.touched[field.toLowerCase()] && formik.errors[field.toLowerCase()] ? (
                                    <div className="text-red-600">{formik.errors[field.toLowerCase()]}</div>
                                ) : null}
                            </div>
                        ))
                    }

                    <Button className="mt-5 w-full" type="submit">
                        {
                            isProcessing
                                ? <Loader className="mx-auto border-white"/>
                                : "Submit"
                        }
                    </Button>
                </form>
            </div>
        </div>
    );
};

