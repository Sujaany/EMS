import React, { Component } from 'react'
import { connect } from 'react-redux';
import {NEW_ROLE,EDIT_ROLE} from '../../_constants/types'
import { Modal, Form, Col } from "react-bootstrap";
import { showModal } from '../../_actions/role-action';

class RoleModal extends Component {
  state={
    id:null,
    roleName:''
  }
  
  componentWillReceiveProps(nextProps){
    console.log(nextProps.roleObj)
    this.setState({
      id:nextProps.roleObj.id,
      roleName:nextProps.roleObj.roleName
      });
  }

  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  
  handleSubmit=()=>{
    console.log(this.props.modaldata.action)
    if(this.props.modaldata.action=='EDIT'){
      this.props.updateRole(this.state)
    }else{
      this.props.createRole(this.state)
    }
  }
  
  render() {
    console.log("call component render");
    const { show,title,buttonName} = this.props.modaldata;
  return (
      <div>
    <Modal show={show}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
            <Form.Label>Id : </Form.Label>
            <Form.Control
            value={this.state.id} 
            type="number" 
            name="id"
            onChange={this.handleChange}
            />
          </Form.Group>
        </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="exampleForm.ControlTextarea2">
              <Form.Label> Role Name : </Form.Label>
              <Form.Control
              value={this.state.roleName} 
              type="text" 
              name="roleName"
              onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="submit"
            class="btn btn-danger "
            onClick={()=>this.props.showModal(false)}
          >
            Close
          </button>
            <button
              type="submit"
              class="btn btn-info "
              // title={buttonName}
           onClick={this.handleSubmit}
           >
            {/* {buttonName} */}
            Save
          </button>
        </Modal.Footer>
      </Modal>
        </div>
        )
    }
}
const mapStateToProps = state =>({
    modaldata:state.roleStore.modaldata,
    roleObj:state.roleStore.role
  })
  const mapDispatchToProps=dispatch=>({
    updateRole: (obj)=> dispatch({type:EDIT_ROLE,payload:obj}),
    createRole: (obj)=> dispatch({type:NEW_ROLE,payload:obj}),
    showModal: status =>dispatch(showModal({action:'ADD',show:status,title:'Add Role'}))
  })
export default connect(mapStateToProps,mapDispatchToProps)(RoleModal)