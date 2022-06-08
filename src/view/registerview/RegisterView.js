export const RegisterView = () => {
    return (
        <div className="login">
    <h1>Register</h1>
    <form>
      <label>
        <p>Username</p>
        <input type="Text" /*onChange={(event) => setUsername(event.target.value)}*//>
      </label>
      <label>
        <p>Password</p>
        <input type="password" /*onChange={(event) => setPassword(event.target.value)}*/ />
      </label>
      <div>
        <button>register</button>
      </div>
    </form>
  </div>
  )
}