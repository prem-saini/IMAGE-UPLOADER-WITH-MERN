import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register() {
    const [fname, setFname] = useState("")
    const [file, setFile] = useState("")

    const navigate = useNavigate();

    const onAdd = (e) => {
        setFname(e.target.value)
    }

    const onSub = (e) => {
        setFile(e.target.files[0])
    }

    const addUserData = async (e) => {
        e.preventDefault();

        var formData = new FormData();
        formData.append("photo", file)
        formData.append("fname", fname)


        const config = {
            headers: {
                "Content-Type": "multipart/form-Data"

            }
        }

        const res = await axios.post("/register", formData, config)
        console.log(res);

        if (res.data.status === 201) {
            navigate("/")

        } else {
            console.log("error")
            // alert("prem saini")
        }
    }

    return (
        <>
            <div className="container mt-3">
                <h1 className="text-center">UPLOAD YOUR IMAGE</h1>
                <form>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">USERNAME</label>
                        <input type="text" className="form-control" name="fname" onChange={onAdd} />
                    </div>
                    <div className="mb-3">
                        <label for="formFile" className="form-label">SELECT YOUR IMAGE</label>
                        <input className="form-control" type="file" name="photo" onChange={onSub} />
                    </div>

                    <button className="btn btn-primary" type="submit" onClick={addUserData}>SUBMIT</button>
                </form>
            </div>
        </>
    )
}

export default Register