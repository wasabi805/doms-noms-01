import React from 'react';

const MenuColumn = (props) => {

  let unpack = (menu_item) => {
    menu_item = props.food_menu_content;

    return menu_item.map( (x , index ) => {

      return <React.Fragment>
        <h1 key={`${x.title}${index}`} className='title'>{x.title}</h1>



        {x.courses.map(z => {
          return <React.Fragment>
            <p key={`${z.name}${index}`} className='name'>{z.name}</p>;
            <p key={`${z.descrip}${index}`} className='text'>{z.descrip}<span className='price'> | ${z.price} |</span></p>
          </React.Fragment>;
        })}

      </React.Fragment>;
    });
  };

  return unpack();
};

export default MenuColumn;


