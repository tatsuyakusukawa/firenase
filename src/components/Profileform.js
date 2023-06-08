    import React, { useState } from 'react';
    import {addprofile} from "../service/api.js";

    export default function ProfileForm() {
    const [name, setName] = useState('');
    const [coruse, setCoruse] = useState('');
    const [bio, setBio] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleCoruseChange = (event) => {
        setCoruse(event.target.value);
    };

    const handleBioChange = (event) => {
        setBio(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addprofile(name,coruse,bio);

    };

    return (
        <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
            Age:
            <input type="number" value={coruse} onChange={handleCoruseChange} />
        </label>
        <br />
        <label>
            Bio:
            <textarea value={bio} onChange={handleBioChange} />
        </label>
        <br />
        <button type="submit">Save</button>
        </form>
    );
    }