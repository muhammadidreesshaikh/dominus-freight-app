import React from 'react';
import '../assets/css/yourloads.css';
import { Link } from 'react-router-dom';

class YourLoads extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("YourLoads");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            // trucking company
            <section>
                <div className="loads py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="card-body">
                                       
                                    <div className="row">
                                        <div className="col-6">
                                            <h2>Loads Type</h2>
                                        </div>

                                        <div className="col-6">
                                            <a href="#"><span class="badge badge-pill badge-success float-right px-4 py-2">Filter</span></a>
                                        </div>
                                    </div>

                                    <div class="form-group mt-5">
                                        <select class="form-control">
                                            <option>Active</option>
                                            <option>Upcoming</option>
                                            <option>Past</option>
                                        </select>
                                    </div>

                                    <ul class="list-group">
                                        <li class="list-group-item">
                                            <h3>Load 1</h3>
                                            <p className="pt-3">Street 101, Tampa Bay, Florida</p>
                                            <p>02-Octuber-2020  (12:00 PM)</p>
                                        </li>
                                        <li class="list-group-item">
                                            <h3>Load 2</h3>
                                            <p className="pt-3">Street 201, Hacen Parecerlo, Florida</p>
                                            <p>05-August-2020  (03:00 PM)</p>
                                        </li>
                                        <li class="list-group-item">
                                            <h3>Load 3</h3>
                                            <p className="pt-3">Street 503, Encuentran Estado, Florida</p>
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
export default YourLoads;