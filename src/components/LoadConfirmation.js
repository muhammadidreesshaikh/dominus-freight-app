import React from 'react';
import firebase from '../core/firebase/firebase';
import '../assets/css/loadconfirmation.css';
import { Link } from 'react-router-dom';

class LoadConfirmation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: props.location.state,
            loading: false,
            carrier: {}
        };
    } 

    componentDidMount() {
        console.log("Confirmation", this.state.data);
    }

    confirmLoad = (id) => {
        firebase.database().ref('loads/' + id).update
        ({
          confirmation: true,
        }, function(error) {
          if (error) {
            // The write failed...
          } else {
            // The write Success...
          }
        });
    
        this.props.history.push('/yourloads');
    }

    render() {
        return(
            // driver
            <section>
                <div className="load py-5">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-md-4">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <h3>Carrier Company</h3>
                                        <p>{JSON.parse(this.state.data.data.carrier).company_name}</p>
                                    </li>
                                    <li class="list-group-item">
                                        <h3>Pickup Location & Time</h3>
                                        <p>{this.state.data.data.pickup_location}</p>
                                        <small className="text-muted">{new Date(this.state.data.data.pickup_date_time).toLocaleString()}</small>
                                    </li>
                                    <li class="list-group-item">
                                        <h3>Dropoff Location & Time</h3>
                                        <p>{this.state.data.data.delivery_location}</p>
                                        <small className="text-muted">{new Date(this.state.data.data.delivery_date_time).toLocaleString()}</small>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-12 col-md-6">
                                <div class="form-check pt-3">
                                    <input type="checkbox" class="form-check-input" />
                                    <label class="form-check-label"><small>Enable GPS</small></label>
                                </div>

                                <a className="btn btn-primary w-100 mt-5 font-weight-bold" onClick={() => { this.confirmLoad(this.state.data.data.id) }}>Confirm</a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default LoadConfirmation;