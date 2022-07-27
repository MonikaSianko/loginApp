import React from 'react';

interface Props {}

export const FormLogin: React.FC<Props> = () => {
  return (
    <>
      <form>
        <div>
          <div>First Step!</div>
          <input type='text' placeholder='Email' />
        </div>
        <div>Second Step!</div>
        <div>
          <input type='text' placeholder='Username' />
        </div>
        <div>
          <input type='password' placeholder='Password' />
        </div>
        <div>
          <button type='submit'>Sign in</button>
        </div>
      </form>
    </>
  );
};
