import React from 'react';
import '../assets/css/loadconfirmation.css';
import { Link } from 'react-router-dom';

class LoadConfirmation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Signup");

        this.setState({
            loading: true
        });
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
                                        <h3>Trucking Company</h3>
                                        <p>Al contrario del pensamiento popular texto de Lorem Ipsum no es simplemente texto aleatorio.</p>
                                    </li>
                                    <li class="list-group-item">
                                        <h3>Pickup Location & Time</h3>
                                        <p>Tiene sus raices en una pieza cl´sica de la literatura del Latin.</p>
                                    </li>
                                    <li class="list-group-item">
                                        <h3>Dropoff Location & Time</h3>
                                        <p>Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro que hay nada.</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-12 col-md-6">
                                <div class="form-check pt-3">
                                    <input type="checkbox" class="form-check-input" />
                                    <label class="form-check-label"><small>Enable GPS</small></label>
                                </div>

                                <button type="submit" className="btn btn-primary w-100 mt-5 font-weight-bold">Confirm</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default LoadConfirmation;