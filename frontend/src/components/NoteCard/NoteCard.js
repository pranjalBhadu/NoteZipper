import React from "react";
import { Accordion, Badge, Button, useAccordionButton } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import './NoteCard.css';

const onDeleteHandler = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {

    }
}

function CardHeader(props) {
    const collapseOnClick = useAccordionButton(props.eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
        <Card.Header className="card-header" onClick={collapseOnClick}>
        <span className="note-title">{props.title}</span>
        <div>
            <Button href={`/note/${props.id}`}>
                Edit
            </Button>
            <Button variant="danger"
                className="mx-2"
                onClick={() => onDeleteHandler(props.id)}>
                Delete
            </Button>
        </div>
    </Card.Header>
    );
  }

const NoteCard = ({ id, title, content, createdOn, category }) => {

    return (
        <Accordion>
            <Card className="note-card">
                <CardHeader title={title} id={id} eventKey="0"/>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="card-body">
                        <h4>
                            <Badge>{category}</Badge>
                        </h4>
                        <blockquote className="blockquote mb-0">
                            <p>{content}</p>
                            <footer className="blockquote-footer created-on">
                                Created on: {createdOn}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
};

export default NoteCard;
