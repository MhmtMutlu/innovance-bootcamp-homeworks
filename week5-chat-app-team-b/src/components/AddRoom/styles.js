import styled from "styled-components";
import { Button, Input, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export const AddRoomButton = styled(Button)`
  background-color: var(--addbtn-color);
  width: 3rem;
  height: 3rem;
  line-height: 0.5rem;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  text-align: center;
  margin-bottom: 1.5rem;

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: scale(1.2);
    background-color: var(--bg-color);
  }
`;

export const InputBox = styled(Input)`
  width: 20rem;
  padding: 0.8rem;
  border: none;
  border: 1px solid #495057;
  border-radius: 12px;

  &:focus {
    border: 1px solid var(--title-color);
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5) !important;
    outline: none !important;
  }
`;

export const DesignedModalHeader = styled(ModalHeader)`
  justify-content: center !important;
`;

export const DesignedModalBody = styled(ModalBody)`
  display: flex;
  justify-content: center !important;
`;

export const DesignedModalFooter = styled(ModalFooter)`
  justify-content: center !important;
`;
