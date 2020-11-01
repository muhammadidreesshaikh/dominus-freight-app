import React from 'react';
import '../assets/css/realtime.css';
import { Link } from 'react-router-dom';

class RealTime extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("RealTime");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            // driver
            <section>
                <div className="time py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="card-body">
                                    <h2>Send Update</h2>

                                    <div className="form-group">
                                        <select className="form-control">
                                            <option>Accident</option>
                                            <option>Traffic</option>
                                            <option>Rest Stop</option>
                                            <option>Help</option>
                                        </select>

                                        <textarea className="form-control" rows="5" placeholder="Your Notes" disabled>the notes entered for the load</textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100 mt-4 font-weight-bold">Pickup</button>

                                    <button type="submit" className="btn btn-success w-100 mt-4 font-weight-bold">Delivered</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default RealTime;