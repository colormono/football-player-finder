import React from 'react';

const Link = ({ children, href }) => {
  return (
    <a href={href} className="item" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

const Footer = () => {
  return (
    <footer
      className="ui inverted vertical segment Footer"
      style={{
        marginTop: '3em',
        paddingTop: '3em',
        paddingBottom: '3em'
      }}
    >
      <div className="ui container">
        <div className="ui stackable inverted divided equal height stackable grid">
          <div className="three wide column">
            <h4 className="ui inverted header">Stack</h4>
            <div className="ui inverted link list">
              <Link href="https://reactjs.org">React</Link>
              <Link href="https://redux.js.org/">Redux</Link>
              <Link href="https://redux-form.com">Redux-Form</Link>
              <Link href="https://github.com/reduxjs/redux-thunk">
                Redux-Thunk
              </Link>
              <Link href="https://github.com/reduxjs/reselect">Reselect</Link>
              <Link href="https://github.com/axios/axios">Axios</Link>
            </div>
          </div>

          <div className="three wide column">
            <h4 className="ui inverted header">Cheatsheets</h4>
            <div className="ui inverted link list">
              <Link href="https://github.com/sudheerj/reactjs-interview-questions">
                React and Redux
              </Link>
              <Link href="https://redux.js.org/recipes/writing-tests#async-action-creators">
                Writing Redux tests
              </Link>
              <Link href="https://github.com/sapegin/jest-cheat-sheet">
                Jest
              </Link>
              <Link href="https://devhints.io/enzyme">Enzyme</Link>
              <Link href="https://github.com/maurocarrero/sinon-jest-cheatsheet">
                Sinon
              </Link>
              <Link href="https://semantic-ui.com/introduction/getting-started.html">
                UI classNames
              </Link>
            </div>
          </div>

          <div className="seven wide column">
            <h4 className="ui inverted header">About</h4>
            <p>
              Hi, my name is Mariano Rivas and I'm a Front-End Dev. This
              exercise was made to familiarize with the technology stack listed
              here. As always, was hard and I learned a lot. Hope you like this
              project.
            </p>
            <strong>
              <Link href="mailto:colormono@gmail.com">Colormono</Link>
            </strong>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
