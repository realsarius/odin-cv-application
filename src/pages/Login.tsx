import { useRef } from 'react';

export default function Login() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  function loginHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('hello');
  }
  return (
    <div className='w-screen h-screen'>
      <div className='container mx-auto h-full'>
        <div className=' mt-8 flex justify-center items-center'>
          <div className='bg-gray-50 py-4 px-6 rounded-lg outline outline-2 outline-solid outline-slate-200 shadow-xl w-[400px]'>
            <h1 className='text-center text-2xl font-bold'>Welcome</h1>
            <form className='flex flex-col gap-4' onSubmit={loginHandler}>
              <div className='flex flex-col gap-2'>
                <label>email</label>
                <input
                  type='text'
                  id='email'
                  name='email'
                  className='bg-[#F3F4F6] py-2 px-4 rounded'
                  ref={emailRef}
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label>password</label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  className='bg-[#F3F4F6] py-2 px-4 rounded'
                  ref={passwordRef}
                />
              </div>
              <div className='w-full flex justify-center'>
                <button className='w-auto px-4 py-2 outline outline-2 outline-solid outline-slate-200 rounded hover:bg-slate-200'>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
