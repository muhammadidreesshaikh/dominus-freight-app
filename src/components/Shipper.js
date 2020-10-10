import React from 'react';
import '../assets/css/shipper.css';
import { Link } from 'react-router-dom';

class Shipper extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Shipper");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            // Shipper
            <section>
                <div className="shipper py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="card-body">
                                    <h2>Agree On Price</h2>

                                    <div class="form-check pt-4">
                                        <input type="checkbox" class="form-check-input" />
                                        <label class="form-check-label"><small>Agree on price</small></label>
                                    </div>

                                    <button type="submit" className="btn btn-success w-100 mt-5 font-weight-bold">Pay Now</button>

                                    <button type="submit" className="btn btn-warning w-100 mt-4 font-weight-bold">Contact For Help</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Shipper;