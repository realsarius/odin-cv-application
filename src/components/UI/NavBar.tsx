import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='w-6/12 mx-auto'>
      <nav className='flex justify-between items-center w-full py-2 sm:px-4 bg-[#ffffff] mt-4 rounded shadow-lg'>
        <Link to={'/'}>
          <h1>Resume Builder</h1>
        </Link>
        <ul>
          <li className='outline outline-2 outline-solid outline-slate-300 hover:bg-slate-200 rounded'>
            <Link to={'/login'}>
              <p className='py-2 px-4'>Login</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
