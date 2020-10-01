import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from 'react-router-dom';
const MenuItem = (props) => {
  return (
    <div className="menu-item"
      onClick={() => props.history.push(`/${props.section.title}`)}
    >
      <div
        className="containerForMenuItem"
        style={{
          backgroundImage: `url(${props.section.imageUrl})`
        }}
      >
        <div className="content">
          <h1 className="title">{props.section.title}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>

  );
}

export default withRouter(MenuItem)