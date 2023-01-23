import axios from "axios";
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import moment from "moment"


function Home() {
    const [data, setData] = useState([]);



    const getUserData = async () => {
        const res = await axios.get("/getdata", {
            headers: {
                "Content-Type": "application/json"
            }


        });
        // console.log(res)
        if (res.data.status === 201) {
            // console.log("data get");
            setData(res.data.getUser)

        } else {
            console.log("error")
        }
    }


    const dltUser = async (id) => {
        const res = await axios.delete(`/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (res.data.status === 401 || !res.data) {
            console.log("errror")
        } else {
            console.log("user delete");
            // setShow(true)
        }
    }


    useEffect(() => {
        getUserData()
    }, [dltUser])



    return (
        <>


            <div className="container mt-2">

                <h1 className="text-center mt-2">IMAGE UPLOAD PAGE WITH MYSQL DATABASE</h1>
                <div className="text-end">
                    <button className="btn btn-primary "><Link className="text-decoration-none text-light" to="/register">ADD USER</Link></button>
                </div>
                <div className=" d-flex justify-content-between align-items-center mt-5">

                    {
                        data.length > 0 ? data.map((el, i) => {
                            // console.log(data)
                            return (
                                <>
                                    <div className="card mb-3" style={{ width: "22rem", height: '14rem' }}>
                                        <img src={`/uploads${el.imgpath}`} className="card-img-top mt-2 mx-5" alt="..." style={{ width: "200px", height: '100px', textAlign: 'center', margin: 'auto' }} />
                                        <div className="card-body mx-5">
                                            <h5 className="card-title">Name : {el.fname}</h5>
                                            <p className="card-text">Date : {moment(el.date).format("L")}</p>
                                            <button className="btn btn-danger col-lg-6 text-center" onClick={() => dltUser(el._id)}>Delete</button>
                                        </div>
                                    </div>
                                </>
                            )
                        }) : ""
                    }

                </div>
            </div>
        </>
    )
}

export default Home