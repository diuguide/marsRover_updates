import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const PostModal = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  const [post, setPost] = useState({
    title: "",
    text: "",
    source: "",
    img: "",
    alt: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/post/addPost", post).then((res) => {
      handleClose();
      console.log(res);
    });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Post Updater</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Enter title"
                id="title"
                name="title"
                value={post.title}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                Enter a title for the post
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Enter the text"
                id="text"
                name="text"
                value={post.text}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                Enter the text for the post
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="url"
                placeholder="Enter the source url"
                id="source"
                name="source"
                value={post.source}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                Enter the source url for the post
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="url"
                placeholder="Enter the image url"
                id="img"
                name="img"
                value={post.img}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                Enter the image url for the post
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Enter the alt tag for the image"
                id="alt"
                name="alt"
                value={post.alt}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                Enter the alt tag for the image
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PostModal;
