import React, { Component } from "react";
import { showModal, fetchRoles,deleteRole } from "../../_actions/role-action";
import { connect } from "react-redux";
import swal from 'sweetalert';

class RoleList extends Component {
  componentWillMount() {
    this.props.getRoles();
  }

  handeleDelete =(id)=>{
    swal({
      title: "Are you sure?",
      text: "Do you want to Delete Role!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.props.onDelete(id)
          swal("Role has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Role is safe!");
        }
      });
  }

  render() {
    return (
      <table className="table table-striped table-hover card-text">
        <thead>
          <tr>
            <th>Id</th>
            <th>Role Name</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.props.roles.map(role => (
            <tr key={role.id}>
              <td>{role.id}</td>
              <td>{role.roleName}</td>
              <button
                type="submit"
                class="btn btn-success btn-circle"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Edit"
                onClick={() => this.props.showModal(role)}
              >
                <i class="fas fa-pen-fancy" />
              </button>
              &nbsp; &nbsp; &nbsp;
              <button
                type="submit"
                class="btn btn-danger btn-circle"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Delete"
                onClick={()=>this.handeleDelete(role.id)}
                              >
                <i class="far fa-trash-alt" />
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = state => ({
  roles: state.roleStore.roles
});
const mapDispatchToProps = dispatch => ({
  onDelete:(id)=>dispatch(deleteRole(id)),
  getRoles: () => dispatch(fetchRoles()),
  showModal:(id)=>dispatch(showModal({ action: "EDIT", show: true, title: "Edit User Role",buttonName:'Update' },id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(RoleList);
