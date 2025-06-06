import { useState } from 'react';
import './FirstComponent.css';

function FirstComponent() {
  const [isAdmin, setAdmin] = useState(false);

  const handleClick = () => {
    setAdmin(isAdmin ? false : true);
  };

  return (
    <>
      <h1>First component title</h1>
      <p>Hello world!</p>

      <br />

      <button
        onClick={handleClick}
        className={isAdmin ? 'admin-true' : 'admin-false'}
      >
        {isAdmin ? 'Disable admin' : 'Enable admin'}
      </button>

      <div>
        ¿Is admin? {' '}
        <span className={isAdmin ? 'admin-true' : 'admin-false'}>
          {isAdmin ? 'Yes' : 'No'}
        </span>
      </div>
    </>
  );
}

export default FirstComponent;
