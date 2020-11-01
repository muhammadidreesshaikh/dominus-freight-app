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
            loading: false,
            customerData: JSON.parse(localStorage.getItem('customer'))
        };
    } 

    componentDidMount() {
        this.getLoads();
    }

    getLoads = () => {
        let account = '';
        let tempLloads = [];
        let filteredLoads = [];
        
        const loadRef = firebase.database().ref('loads');
    
        loadRef.on('value', (snapshot) => {
          const loads = snapshot.val();
    
          for (let id in loads) {
            tempLloads.push({ id, ...loads[id] });
          }

            //   this.setState({ loads: tempLloads });

            tempLloads.map((item, i) => {
                if (this.state.customerData.account_type == 'driver') {
                    account = JSON.parse(item.driver).company_email;
                }
                if (this.state.customerData.account_type == 'shipper') {
                    account = JSON.parse(item.shipper).company_email;
                }
                if (this.state.customerData.account_type == 'carrier') {
                    account = JSON.parse(item.carrier).company_email;
                }

                if (account == this.state.customerData.company_email) {
                    filteredLoads.push(item);
                    console.log(item);
                }
            })

            this.setState({ loads: filteredLoads, loading: true });
        });
    };

    setData = (data) => {
        if (data.load_type == 'active') {
            DataHolding.getData(data);
            this.props.history.push('/loaddetails');
        }
        else {
            alert('Load Type is not active.');
        }
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

                                    {
                                        this.state.loading && this.state.loads.length > 0 ?
                                        <ul class="list-group">
                                            {
                                                this.state.loads.map((item, key) => {
                                                    return (
                                                        <li class="list-group-item" key={key} onClick={() => this.setData(item)}>
                                                            <h6>Load ID: {item.id}</h6>
                                                            <p className="pt-3">Pickup: {item.pickup_location}</p>
                                                            <p>Delivery: {item.delivery_location}</p>
                                                        </li>
                                                    
                                                    )
                                                })
                                            }
                                        </ul>
                                        :
                                        <div>
                                            { !this.state.loading ? <p className="py-4 text-center">Loading ...</p> : null}
                                            { this.state.loading ? <p className="py-4 text-center">No Loads Found</p> : null}
                                        </div>
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
export default YourLoads;