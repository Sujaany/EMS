import React, { Component } from "react";
import { connect } from "react-redux";
import { showModal } from "../../_actions/role-action";
import RoleModal from "./role-modal";
import RoleList from "./role-List";

class Role extends Component {
  render() {
    return (
      <section>
        <div class="card">
          <div class="d-flex justify-content-between card-header">
            <h3 class="h6 text-uppercase mb-0">User Role</h3>

            <button
              type="submit"
              class="btn btn-info btn"
              data-toggle="tooltip"
              data-placement="bottom"
              title="add role"
              btn-align="right"
              onClick={() => this.props.showModal(true)}
            >
              + Role
            </button>
            <RoleModal />
          </div>
          <div class="card-body">
            <RoleList />
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => ({
  // tests:state.testStore.tests
});
const mapDispatchToProps = dispatch => ({
  showModal: status =>
    dispatch(showModal({ action: "ADD", show: status, title: "Add Role" }))
});
export default connect(mapStateToProps, mapDispatchToProps)(Role);
