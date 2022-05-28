import React from 'react';

function AnswersDiagram({ answers }) {
  return (
    <div>
      {/* {answers.map((item, i) => {
        return (
          <div
            key={i}
            style={{
              width: item.percentage,
              backgroundColor: item.color,
            }}
          >
            {item.percentage}
          </div>
        );
      })} */}
    </div>
  );
}

export default AnswersDiagram;
