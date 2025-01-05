import React, { useState } from "react";
import {data} from "./Data";

function Accordion() {
  const [selected, setSelected] = useState(null);

  function handlesingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  console.log("Selected ID:", selected);

  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={() => handlesingleSelection(dataItem.id)} // Fixed
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>{selected === dataItem.id ? "-" : "+"}</span>
              </div>
              {selected === dataItem.id && (
                <div className="content">{dataItem.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div>
            <h3>No data found</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
