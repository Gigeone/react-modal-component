import Proptypes from "prop-types";
import React from "react";
import "./modal.css";

const Modal = ({ className = "", isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={`${className} modal-overlay`}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  className: Proptypes.string,
  isOpen: Proptypes.bool.isRequired,
  onClose: Proptypes.func.isRequired,
  children: Proptypes.node.isRequired,
};
