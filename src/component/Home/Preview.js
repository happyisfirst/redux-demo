import React from 'react';

class Preview extends React.Component {
    static propTypes = {
        title: React.PropTypes.string,
        link: React.PropTypes.string,
        push: React.PropTypes.func,
    };

    render() {
        return (
            <article className="article-preview-item">
                <h1 className="title">
                    <a href={`/detail/${this.props.id}`} onClick={this.handleNavigate.bind(this, this.props.id)}>
                        {this.props.title}
                    </a>
                </h1>

                <span>{this.props.date}</span>
                <span>{this.props.description}</span>
            </article>
        )
    }
}