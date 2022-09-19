import React from 'react'
import {
    Button , Spinner
  } from "reactstrap";

function Spinnerjs() {
  return (
    <div>
 <Button
  color="primary"
  disabled
  class="button"
>
  <Spinner size="sm">
    Loading...
  </Spinner>
  <span>
    Loading
  </span> </Button>
    </div>
  )
}

export default Spinnerjs