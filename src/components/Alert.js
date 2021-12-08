import React from 'react'

export default function Alert(props) {
    return (
        <div>
           {props.alert} && <div className={`alert alert-{props.alert.type} alert-dismissible fade show`} role="alert" style= {{ textAlign: "left"}}>
  <strong>{props.alert.type}</strong>{props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert"  aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
        </div>
    )
}
