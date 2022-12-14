import React, { useState } from 'react';


const Home = () => {

  const genID = () => {
    const _id = 'item_'+(list.length+1);
    return _id
  };

  const [item, setItem] = useState('');

  const [list, setList] = useState([
    {
      id: 'item_'+1,
      message: 'First Message',
      done: false
    }
  ]);

  const handleAdd = () => {
    if (item) {
      setList([
        ... list,
        {
          id: genID(),
          message: item,
          done: false
        }
      ]);
      setItem('');
    };
  };

  const handleDone = (id: any) => {
    const _list = list.map(item => {
      if ( item.id === id ) {
        return {
          ...item,
          done: !item.done
        };
      };
      return item;
    });
    setList(_list);
  };

  const handleEnter = ( keyDown: any ) => {
    console.log()
    if ( keyDown.key === 'Enter' ) {
      handleAdd();
    }
  }

  return (    
    <div className='mx-auto w-3/4 justify-center center-content'>
      <h1 className='text-center py-5 font-thin text-6xl leading-[7rem]'> Todo App </h1>

      <div 
        className='
          flex mx-auto w-full lg:w-1/2
          bg-gray-100
          hover:ring focus:border-blue-500
          active:ring focus:border-blue-500
          rounded-full
        '
      >
        <input 
          className='            
            text-black 
            w-3/4
            bg-transparent 
            text-center 
            p-3 
            focus-visible:outline-none 
            focus:outline-none'
          type='text' 
          value={item} 
          onKeyDown={handleEnter}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type='button' onClick={() => handleAdd()}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-8 h-8 stroke-blue-500 hover:w-10 hover:h-10 ease-in duration-300"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" 
            />
          </svg> 
        </button>
      </div>      
      <div className='p-10 text-center justify-center'>
        <ul>
          {list.filter(( {done} ) => !done).map(({ id, message }) => (
            <li 
              key={id} 
              onClick={() => handleDone(id)}
              className='
                rounded-full 
                border-4 border-purple-500 border-x-indigo-500
                p-1 
                w-3/4
                flex flex-row
                m-2
                justify-center
              '
            >
              <span className='w-1/2 pt-1'>
                {message}
              </span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className=" 
                  h-9
                  p-1 ml-6
                  relative
                  content-start
                  bg-cyan-500
                  rounded-full                
                "
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M4.5 12.75l6 6 9-13.5" 
                />
              </svg>
            </li>
          ))}
        </ul>
        <h1 className='mt-16'> Completed Tasks </h1>
        <ul className=''>
          {list.filter(( {done} ) => done).map(({ id, message }) => (
            <li 
              key={id} 
              onClick={() => handleDone(id)} 
              className='
                rounded-full 
                border-4 border-purple-200 border-x-gray-700
                p-1 
                w-3/4
                flex flex-row
                m-2
                justify-center
                text-gray-700
                hover:text-blue-500
                ease-in duration-300
              '
            >
              <span className='w-1/2'>
                <s>{message}</s>
              </span>              
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="
                  w-6 h-6
                "
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" 
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>  
    </div>
  )
};

export default Home;