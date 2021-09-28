import { useState } from 'react'

const useForm = <T>(initialForm: T) => {
    const [form, setForm] = useState(initialForm);

    const formChangeHandler = (e: any) => {
        const { name, value } = e.target;

        setForm((prevForm => {
            console.log(prevForm)
            return {
                ...prevForm,
                [name]: value
            };
        }));
    }

    return {
        form,
        formChangeHandler
    };
}

export default useForm;