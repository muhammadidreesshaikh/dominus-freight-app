import React from 'react';
import '../assets/css/loaddetails.css';

import map from '../assets/img/map.png'

import DataHolding from '../core/services/data-holding-service';

class LoadDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: '',
            loading: false
        };
    } 

    componentDidMount() {
        console.log("LoadDetails");
        this.getDetails();    
    }

    async getDetails() {
        var details = DataHolding.setData();
        await console.log(details);
        this.setState({ data: details });

        // console.log("getDetails > ", this.state.data);
    }

    render() {
        return(
            // trucking company
            <section>
                <div className="detail py-5">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">

                                        <h2>Load Details</h2>

                                        <div class="form-check pt-4">
                                            <input type="checkbox" class="form-check-input" />
                                            <label class="form-check-label"><small>Notify me on all activities</small></label>
                                        </div>

                                        <h4>Pickup Time</h4>
                                        <p>{new Date(this.state.data.pickup_date_time).toLocaleString()} </p>

                                        <h4>Estimated Delivery (Google Maps)</h4>
                                        <p>{new Date(this.state.data.delivery_date_time).toLocaleString()}</p>

                                        <h4>Live Tracking</h4>
                                        <img src={map} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default LoadDetails;