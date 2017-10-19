import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'
import 'react-quill/dist/quill.core.css'


class RichText extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            text: '',
            modules: {
                toolbar: [
                    [{ 'header': [1, 2, false] }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                    ['link', 'image'],
                    ['clean']
                ]
            },

            formats: [
                'header',
                'bold', 'italic', 'underline', 'strike', 'blockquote',
                'list', 'bullet', 'indent',
                'link', 'image'
            ]
        } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (value) {
        this.setState({ text: value })
        console.log(value)
    }

    render () {
        return (
            <ReactQuill theme="snow" value={this.state.text}
                modules={this.state.modules}
                formats={this.state.formats}
                onChange={this.handleChange}
            />
        )
    }
}

export default RichText
