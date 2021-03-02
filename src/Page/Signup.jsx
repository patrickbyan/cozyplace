/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

const ModalSignup = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="warning text-light font-weight-bold" onClick={toggle}>{buttonLabel}Sign Up</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader className="bg-warning text-light" toggle={toggle}>Sign Up Page</ModalHeader>
            <ModalBody>
                <div>
                <InputGroup>
                    <Input placeholder="Username" />
                    <InputGroupAddon addonType="append">
                    {/* <InputGroupText></InputGroupText> */}
                    </InputGroupAddon>
                </InputGroup>
                </div>
                <div className="mt-3 mb-3">
                <InputGroup>
                    <Input placeholder="Password" />
                    <InputGroupAddon addonType="append">
                    {/* <InputGroupText></InputGroupText> */}
                    </InputGroupAddon>
                </InputGroup>
                </div>
                <div>
                <InputGroup>
                    <Input placeholder="Confirm Password" />
                    <InputGroupAddon addonType="append">
                    {/* <InputGroupText></InputGroupText> */}
                    </InputGroupAddon>
                </InputGroup>
                </div>
            </ModalBody>
        <ModalFooter className="bg-warning">
          <Button color="success" onClick={toggle}>Register</Button>{' '}
          <Button color="danger" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalSignup;