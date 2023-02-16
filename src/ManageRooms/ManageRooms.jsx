import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
class ManageRooms extends React.Component {
    array = [];
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            onDelete: ''
        }
    }

    componentDidMount = () => {
        this.loadRooms();
    }
    onDelete = (e, roomId) => {
        console.log("calling get method");
    }
    refresh = (e) => {

    }

    loadRooms = () => {
        axios.get('http://localhost/crms/api/room/GetRooms')
            .then(response => {
                this.array = response.data;
                console.log("inside component will mount ");

                this.setState({
                    submitted: true
                })
            });
    }




    render() {
        return (
            <div>
                <div className="container">

                    <div className="row">
                        <h1>Manange Rooms</h1>
                    </div>

                    <div className="row">
                        <Link to={
                            {
                                pathname: "/"


                            }
                        }>
                            <i id='addRoom' className="fas fa-plus-circle fa-2x btn-circle"></i>
                        </Link>
                        <i className="fas fa-sync-alt fa-2x btn-circle" onClick={this.refresh}></i>
                    </div>
                    <div className="row">
                        <table className="table table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>
                                        Room Name
                </th>
                                    <th>
                                        Location
                </th>
                                    <th>
                                        Capacity
                </th>
                                    <th>
                                        Room Type
                </th>
                                    <th>
                                        Status
                    </th>
                                    <th>Action</th>

                                </tr>
                            </thead>



                            {this.array.map((item, index) => (
                                <tbody>
                                    <tr >

                                    </tr>
                                    <tr>
                                        <td id={item.name} >{item.name} </td> {/* sel id*/}
                                        <td>{item.location}</td>
                                        <td>{item.capacity}</td>
                                        <td>{item.name} {item.id}</td>
                                        <td> {item.isActive === true &&
                                            <span className="badge badge-pill badge-success">Active</span>}
                                            {item.isActive === false &&
                                                <span className="badge badge-pill badge-danger">In-Active</span>
                                            }
                                        </td>
                                        <td>
                                            <Link to={
                                                {
                                                    pathname: "/",
                                                    editButton: true,
                                                    myCustomProps: { item }
                                                }
                                            }>

                                                <i className="fas fa-edit btn-circle"></i>
                                            </Link>



                                            <i className="fas fa-trash-alt btn-circle" onClick={(e) => {
                                                this.onDelete(e, item.id)
                                            }}></i>
                                        </td>
                                    </tr>
                                </tbody >))}




                            <tfoot>
                                <tr>
                                    <td colSpan="4">
                                    </td>
                                </tr>
                            </tfoot>
                        </table >
                    </div >

                </div >
            </div >
        );
    }
}
export { ManageRooms as ManageRooms };