import React, { Component } from 'react';

export default class Layout extends Component {
    render() {
        return (
            <main className={'main-wrapper'}>
                <div className="mainContainer">
                    <article className="contentContainer containerWidth">
                            {this.props.children}
                    </article>
                </div>
            </main>
        );
    }
};