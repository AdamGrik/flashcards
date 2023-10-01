import React from "react";
import "./toolbar.scss";
import Button from "../../atoms/Button/Button";

const Toolbar = () => {
  return (
    <div className="fc-toolbar">
      <div className="fc-toolbar-left">Maturitne testy</div>
      <div className="fc-toolbar-right">
        <Button title="Settings"></Button>
        <Button title="User"></Button>
      </div>
    </div>
  );
};

export default Toolbar;
