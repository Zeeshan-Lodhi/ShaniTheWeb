import React, { useState } from 'react'
function Contact() {
    const [text, settext] = useState({
        fullname: "",
        email: "",
        phone: "",
        msg: "",

    });



    const submit = (e) => {
        e.preventDefault()
        alert(` Name=${text.fullname},  Email=${text.email},  Phone no=${text.phone},  Msg=${text.msg}`)
    }

    const InputEvent = (event) => {
        const { name, value } = event.target;
        settext((preval) => {
            return { ...preval, [name]: value, }
        })
    }

    return (
        <div>
            <h1 className=" cheading text-center mt-3 mb-5">Contact Us</h1>
            <div className="container" id="header">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">

                        <form onSubmit={submit} >

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Enter your name</label>
                                <input type="text" class="form-control" required id="exampleFormControlInput1" placeholder="Full Name"
                                    name="fullname" value={text.fullname} onChange={InputEvent}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" required id="exampleFormControlInput1" placeholder="name@example.com"
                                    name="email" value={text.email} onChange={InputEvent}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone no</label>
                                <input type="text" class="form-control" required id="exampleFormControlInput1" placeholder="Phone number"
                                    name="phone" value={text.phone} onChange={InputEvent}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Leaves a Message</label>
                                <textarea class="form-control" required id="exampleFormControlTextarea1" rows="3"
                                    name="msg" value={text.msg} onChange={InputEvent}
                                ></textarea>

                            </div>
                            <div class="col-12">
                                <button class="getStsrted " type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
