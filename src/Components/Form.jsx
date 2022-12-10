import React, { useEffect, useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [user, setUser] = useState({
    userName: '',
    email: '',
})

const [errors, setErrors] = useState(false)
const [message, setMessage] = useState(false)

const validations = () => {
    const emailTest = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if(user.userName.length === 0 || user.userName.length <= 5 || !emailTest.test(user.email)){
        setErrors(true)
    } else {
        setMessage(true)
    }
}

const handleSubmit = (e) => {
    e.preventDefault()
    validations()
}

return (
<div>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Acá escribí tu nombre' onChange={(e) => setUser({...user, userName: e.target.value})}/>
        <input type="email" placeholder='Acá escribí tu email @' onChange={(e) => setUser({...user, email: e.target.value})} />
        <button>Submit</button>
        {errors && 'Por favor verifique su información nuevamente'}
        {message && `Gracias ${user.userName}, te contactaremos cuanto antes vía mail`}
    </form>
</div>
);
};

export default Form;
