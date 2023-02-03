/* eslint-disable */
'use client';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  email: string;
  password: string;
};
export default function Form() {
  const [login, setLogin] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      // await signIn(email, password);
    } else {
      // await signUp(email, password);
    }
  };

  const signInButtonHandler = () => {
    setLogin(true);
  };

  const signUpButtonHandler = () => {
    setLogin(false);
  };

  return (
    <div>
      <form className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full" htmlFor="email">
            E-mail
            <input
              type="email"
              placeholder="E-mail"
              className="input"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-sm font-light text-orange-500">
                Please enter a valid e-mail.
              </p>
            )}
          </label>
          <label htmlFor="password" className="inline-block w-full">
            Password
            <input
              type="password"
              placeholder="Password"
              className="input"
              {...register('password', { required: true })}
            />
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded bg-[#e50914] py-3 font-semibold"
          onClick={signInButtonHandler}
        >
          Sign In
        </button>

        <div className="text-gray-400">
          New to Netflix?{' '}
          <button
            type="button"
            className="text-white hover:underline"
            onClick={signUpButtonHandler}
          >
            Sign up now
          </button>
        </div>
      </form>
    </div>
  );
}
