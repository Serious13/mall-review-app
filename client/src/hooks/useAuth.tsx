export default function Authorize() {
    return (
        <>
            <form className="login-form">
                <label htmlFor="email">
                    E-Mail : <input type="text" name="email"/>
                </label>
                <label htmlFor="password">
                    Password : <input type="text" name="password"/>     
                </label>                  
            </form>
            <button>Create Account</button>
            <button>Login</button>
        </>           
    )
}
