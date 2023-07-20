function LoginView ({ handledLoginSubmit }) {
  return (
    <>
    <div className="flex w-screen h-[50vh] justify-center flex-col items-center">
      <h1 className="text-5xl">Bienvendio</h1>
      <div>
        <form className="flex flex-col gap-3" onSubmit={handledLoginSubmit}>
          <input
            name="username"
            className="input w-[300px] p-2 rounded-sm"
            placeholder="User" />
          <input
            name="password"
            className="input w-[300px] p-2 rounded-sm"
            placeholder="Password" />
          <button type="submit" className="bg-blue-700 text-gray-50 rounded-md h-[32px] ">Login</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default LoginView
