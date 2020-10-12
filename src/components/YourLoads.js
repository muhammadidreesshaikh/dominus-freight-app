import React from 'react';
import '../assets/css/yourloads.css';
import firebase from '../core/firebase/firebase';
import { Link } from 'react-router-dom';
import DataHolding from '../core/services/data-holding-service';

class YourLoads extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loads: [],
            loading: false
        };
    } 

    componentDidMount() {
        this.getLoads();
    }

    getLoads = () => {
        let tempLloads = [];
        const loadRef = firebase.ref('loads');
    
        loadRef.on('value', (snapshot) => {
          const loads = snapshot.val();
    
          for (let id in loads) {
            tempLloads.push({ id, ...loads[id] });
          }

          this.setState({ loads: tempLloads });
    
        //   console.log(this.state.loads);
        });
    };
    
    setData = (data) => {
        DataHolding.getData(data);
        
        this.props.history.push('/loaddetails');
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
                                        
                                        {
                                            this.state.loads.map((item, key) => {
                                                return (
                                                    <li class="list-group-item" key={key} onClick={() => this.setData(item)}>
                                                        <h3>{item.trucking_company}</h3>
                                                        <p className="pt-3">Pickup: {item.pickup_location}</p>
                                                        <p>Delivery: {item.delivery_location}</p>
                                                    </li>
                                                
                                                )
                                            })
                                        }
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