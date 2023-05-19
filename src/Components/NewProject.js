import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function NewProject() {
    const [newProject, setNewProject] = useState({
        title: "",
        description: "",
        tech: "",
        image: "",
        github_link: "",
        demo_link: "",
        is_favorite: "",
        created_on: ""
    });

    const navigate = useNavigate();

    const handleTextChange = (event) => {
        setNewProject({ ...newProject, [event.target.id]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${API}/dishes`, newProject)
            .then(() => {
                navigate('/dishes');
            })
            .catch((error) => {
                console.log(error);
            })
    };

    return (
        <div></div>
    )
}