import React from 'react';
import '../assets/css/setting.css';
import { Link } from 'react-router-dom';

import profile from '../assets/img/profile.jpg'

class Setting extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Setting");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            // setting
            <section>
                <div className="setting py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="card-body">

                                    <h2>Settings</h2>
                                       
                                    <div className="row main">
                                        <div className="col-4">
                                            <img src={profile} />
                                        </div>

                                        <div className="col-8">
                                            <div className="content">
                                                <h2>John Mychle</h2>
                                                <p>Driver/Shipper/Trucking Co.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <form>
                                        <div class="form-group mt-4">
                                            <label>Email</label>
                                            <input type="email" class="form-control" placeholder="john@email.com" />
                                        </div>

                                        <div class="form-group">
                                            <label>Contact#</label>
                                            <input type="password" class="form-control" placeholder="+923314599326" />
                                        </div>

                                        <div class="form-group">
                                            <label>Password</label>
                                            <input type="password" class="form-control" placeholder="********" />
                                        </div>
                                        
                                        <button type="submit" className="btn btn-success w-100 mt-5 font-weight-bold">Update Profile</button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Setting;