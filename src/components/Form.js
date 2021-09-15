import React from 'react';

export default function Form(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name,value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form onSubmit={onSubmit}>

            <label> Name 
            <input
                type="text"
                name="name"
                value={values.name}
                placeholder="Your Name"
                onChange={onChange}
            />
            </label>

            <label> Email
                <input 
                    type="email"
                    name="email"
                    value={values.email}
                    placeholder="you@email.com"
                    onChange={onChange}
                />
            </label>

            <label>Role
                <select values={values.role} name="role" onChange={onChange}>
                    <option value=''> Select </option>
                    <option value='Designer'>Designer</option>
                    <option value='Engineer'>Engineer</option>
                </select>

            </label>

            <button>submit</button>

        </form>
    );
}