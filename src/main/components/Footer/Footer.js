import React from 'react';

const Link = ({ name, href }) => {
  return (
    <a href={href} className="item" target="_blank" rel="noopener noreferrer">
      {name}
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
              {data[0]['links'].map(link => {
                return (
                  <Link key={link.name} name={link.name} href={link.href} />
                );
              })}
            </div>
          </div>

          <div className="three wide column">
            <h4 className="ui inverted header">Cheatsheets</h4>
            <div className="ui inverted link list">
              {data[1]['links'].map(link => {
                return (
                  <Link key={link.name} name={link.name} href={link.href} />
                );
              })}
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

const data = [
  {
    title: 'Stack',
    links: [
      { name: 'React', href: 'https://reactjs.org' },
      { name: 'Redux', href: 'https://redux.js.org/' },
      { name: 'Redux-Form', href: 'https://redux-form.com' },
      { name: 'Redux-Thunk', href: 'https://github.com/reduxjs/redux-thunk' },
      { name: 'Reselect', href: 'https://github.com/reduxjs/reselect' },
      { name: 'Axios', href: 'https://github.com/axios/axios' }
    ]
  },
  {
    title: 'Cheatsheets',
    links: [
      {
        name: 'React and Redux',
        href: 'https://github.com/sudheerj/reactjs-interview-questions'
      },
      {
        name: 'Writing Redux tests',
        href: 'https://redux.js.org/recipes/writing-tests'
      },
      { name: 'Jest', href: 'https://github.com/sapegin/jest-cheat-sheet' },
      { name: 'Enzyme', href: 'https://devhints.io/enzyme' },
      {
        name: 'Sinon',
        href: 'https://github.com/maurocarrero/sinon-jest-cheatsheet'
      },
      {
        name: 'Semantic UI',
        href: 'https://semantic-ui.com/introduction/getting-started.html'
      }
    ]
  }
];

export default Footer;
