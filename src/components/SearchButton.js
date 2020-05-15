import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, FormGroup } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class SearchButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      name: '',
      search: false, 
      searchString: ``
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal 
    }));
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
    }

  onSubmit = (e) => {
    e.preventDefault();

    this.setState(prevState => ({
        modal: !prevState.modal
    }));

    this.setState({
        search: true,
        searchString: `/Search/${this.state.name}`
    });
  }

  render(){
      if(this.state.search) {
        return <Redirect to={this.state.searchString} />
      }

    return (
      <div  className="mt-2" >
        <Button outline color="primary" onClick={this.toggle}>Search</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Search</ModalHeader>
          <ModalBody>
              Search for a topic 
          </ModalBody>
          <Form
                            onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Input
                                    type="text"
                                    name= "name"
                                    onChange = {this.onChange}
                                />
                                <Button color="primary" onClick={this.onSubmit}>Submit</Button>{' '}
                            </FormGroup>
            </Form>
          <ModalFooter>
            
          </ModalFooter>
        </Modal>

 
      </div>
    );
  }
}

export default SearchButton;