import React from 'react';
import firebase from '../core/firebase/firebase';
import '../assets/css/setting.css';
import { Link } from 'react-router-dom';

import profile from '../assets/img/profile.jpg'
import loadingContent from '../assets/img/loading-content.gif'

class Setting extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userDetails: JSON.parse(localStorage.getItem('user')),
            customerDetails: JSON.parse(localStorage.getItem('customer')),
            name: '',
            email: '',
            contact: '',
            account_type: ''
        };
    } 

    componentDidMount() {
        this.getProfile();
    }

    getProfile = () => {
        let profileRef = firebase.database().ref('customers/' + this.state.customerDetails.id);

        profileRef.on('value', (snapshot) => {
            const profile = snapshot.val();
            console.log("profile", profile);

            this.setState({
                name: profile.company_name,
                email: profile.company_email,
                contact: profile.company_contact,
                account_type: profile.account_type,
            });
        })
    }

    onChangeInput = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state);
    }

    updateProfile = () => {
        firebase.database().ref('customers/' + this.state.customerDetails.id).set({
          company_name: this.state.name,
          company_contact: this.state.contact,
          company_email: this.state.email,
        }, function(error) {
          if (error) {
            // The write failed...
          } else {
            // The write Success...
          }
        });
    
        alert("Profile Updated.");
        this.getProfile();
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

                                    {
                                        this.state.name ? 
                                        <div>
                                             <div className="row main">
                                                <div className="col-4">
                                                    <img className="profile" src={profile} />
                                                </div>

                                                <div className="col-8">
                                                    <div className="content">
                                                        <h2 className="text-capitalize">{this.state.name}</h2>
                                                        <p className="text-capitalize">{this.state.account_type}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <form>
                                                <div class="form-group mt-4">
                                                    <label>Name</label>
                                                    <input type="text" name="name" class="form-control" placeholder="John Mychle" value={this.state.name} onChange={(e) => this.onChangeInput(e) } />
                                                </div>

                                                <div class="form-group mt-4">
                                                    <label>Email</label>
                                                    <input type="email" name="email" class="form-control" placeholder="john@email.com" value={this.state.email} onChange={(e) => this.onChangeInput(e) } />
                                                </div>

                                                <div class="form-group">
                                                    <label>Contact#</label>
                                                    <input type="text" name="contact" class="form-control" placeholder="+923314599326" value={this.state.contact} onChange={(e) => this.onChangeInput(e) } />
                                                </div>
                                                
                                                <a className="btn btn-success w-100 mt-5 font-weight-bold" onClick={() => { this.updateProfile() } }>Update Profile</a>
                                            </form>
                                        </div>
                                        :
                                        <img className="pt-5" width="100%" src={loadingContent} />
                                    }

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