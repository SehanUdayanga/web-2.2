import { useState } from 'react';

function MyForm() {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        age: '',
        city: '',
        bio: '',
        role: 'developer',
    });

    const [tableValue, setTableValue] = useState([]);


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            formData.username.trim() === '' ||
            formData.email.trim() === '' ||
            formData.age.trim() === '' ||
            formData.city.trim() === '' ||
            formData.bio.trim() === ''
        ) {
            alert("Please fill all fields");
            return;
        }

        setTableValue((prev) => [
            ...prev,
            formData
        ]);

        setFormData({
            username: '',
            email: '',
            age: '',
            city: '',
            bio: '',
            role: 'developer',
        });
    };


    return (
        <div>

            <form onSubmit={handleSubmit}>

                <input
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                />

                <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />

                <input
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Age"
                />

                <input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                />

                <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    placeholder="Bio"
                />

                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                >
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="manager">Manager</option>
                </select>

                <button type="submit">Submit</button>

            </form>


            <table border="1">

                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Bio</th>
                        <th>Role</th>
                    </tr>
                </thead>

                <tbody>

                    {tableValue.map((item, index) => (

                        <tr key={index}>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.age}</td>
                            <td>{item.city}</td>
                            <td>{item.bio}</td>
                            <td>{item.role}</td>
                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );

}

export default MyForm;