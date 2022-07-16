import { useState } from 'react'
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import Button from '@mui/material/Button'

function FileUpload() {
    const [formErrors, setFormErrors] = useState(false)
    const [picture, setPicture] = useState('')

    const handleFormErrorAlert = () => {
        setFormErrors(false)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const extension = picture.name.split('.')[1]
        if (extension !== ".pdf") {
            setFormErrors(true)
        } else {
            const data = new FormData()
            data.append("picture", picture)
            await axios.post(`${process.env.REACT_APP_SERVER}/upload`, data)
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
                        <input type="file" id="picture" name="picture" onChange={(e) => setPicture(e.target.files[0])}/>
                        <div className="form-group">
                            <Button sx={{ marginTop: 1 }} size="small" variant="contained" type="submit">Upload</Button>
                        </div>
                    </form>
                </div>
            </div>

            <Snackbar
                open={formErrors}
                autoHideDuration={4000}
                message="Only .pdf are acceptable"
                onClose={handleFormErrorAlert}
            />
        </>

    )
}

export default FileUpload