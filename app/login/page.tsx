export default function Login() {
  return (
    <div>
      <form className="mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
        <div className="flex flex-col space-y-4">
          <label htmlFor="email">
            E-mail
            <input type="email" placeholder="E-mail" className="input" />
          </label>
          <label htmlFor="password">
            Password
            <input type="password" placeholder="Password" className="input" />
          </label>
        </div>
      </form>
    </div>
  );
}
