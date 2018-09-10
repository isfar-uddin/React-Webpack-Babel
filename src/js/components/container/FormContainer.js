import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Input from './../presentational/Input';

export default class FormContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seo_title: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    };

    render() {
        return (
            <form id="article-form">
                <Input label="seo_title" text="SEO title" type='text' id='sec_title' value={seo_title}
                       handleChange={this.handleChange}/>
            </form>
        )
    }
}
