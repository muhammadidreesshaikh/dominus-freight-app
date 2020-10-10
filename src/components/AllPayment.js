import React from 'react';
import '../assets/css/allpayment.css';
import { Link } from 'react-router-dom';

class AllPayment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("AllPayment");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            // paymentlisting
            <section>
                <div className="payment py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="card-body">
                                    <h2>All Payments</h2>

                                    <ul class="list-group pt-4">
                                        <li class="list-group-item">
                                            <h3>ID# 754915357</h3>
                                            <p className="pt-2">ABC Truckers</p>
                                            <p>02-Octuber-2020  (12:00 PM)</p>
                                        </li>
                                        <li class="list-group-item">
                                            <h3>ID# 549823591</h3>
                                            <p className="pt-2">DSZ Truckers</p>
                                            <p>05-August-2020  (03:00 PM)</p>
                                        </li>
                                        <li class="list-group-item">
                                            <h3>ID# 105068751</h3>
                                            <p className="pt-2">PRB Truckers</p>
                                            <p>10-March-2020  (05:00 AM)</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default AllPayment;