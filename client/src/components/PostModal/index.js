import { Modal, Form, Button } from "react-bootstrap";
import { loadPosts } from "../../utilities/util";
import axios from "axios";



const PostModal = ({ show, setShow }) => {
    const handleClose = () => setShow(false);
    
    
    
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Post Updater</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter title" />
              <Form.Text className="text-muted">
                Enter a title for the post
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Enter the text" />
              <Form.Text className="text-muted">
                Enter the text for the post
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="url" placeholder="Enter the source url" />
              <Form.Text className="text-muted">
                Enter the source url for the post
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="url" placeholder="Enter the image url" />
              <Form.Text className="text-muted">
                Enter the image url for the post
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Enter the alt tag for the image"
              />
              <Form.Text className="text-muted">
                Enter the alt tag for the image
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PostModal;
