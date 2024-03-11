import React, {useState} from 'react';
import {useFormik} from "formik";
import clsx from "clsx";
import {Button} from "./Button";
import {Loader} from "./Loader";

export const Form = ({title, fields, initialValues, validationSchema, onSubmit }) => {
    const [isProcessing, setIsProcessing] = useState(false);

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            setIsProcessing(true);
            await onSubmit(values);
            formik.resetForm();
            setIsProcessing(false);
        },
    });
    return (
        <div className="w-96 px-8">
            <div className="mb-4 text-center text-2xl">{title}</div>
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
