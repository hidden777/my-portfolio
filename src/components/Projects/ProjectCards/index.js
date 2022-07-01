import React from "react";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import './index.scss'

function ProjectCards (props) {
    return (
      <div className="card">
        <div className="card__body">
          <a href={props.isBlog} rel="noreferrer" target="_blank">
            <img src={props.img} alt="img" class="card__image" />
          </a>
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
        </div>
        <div className="github_page">
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> GitHub
        </Button>
        </div>
      </div>
    );
}

export default ProjectCards;