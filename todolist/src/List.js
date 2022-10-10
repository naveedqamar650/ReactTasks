import React from 'react';

const List = props => (
      props.items.map((item, index) => <p key={index}>{item}</p>)
);

export default List;