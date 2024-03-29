export default function LoginForm({ onSubmit, error }) {

    function submitHandler(event) {
        event.preventDefault();
        onSubmit({
            username: event.target.username.value,
            password: event.target.password.value
        });
        event.target.reset();
    }
    return (
        <form className="flex flex-col w-1/2 gap-4 p-8 mx-auto my-4 text-center bg-green-200 border-2 border-green-400 rounded-lg text-md" onSubmit={submitHandler}>
            <div className="flex flex-col ">
                <label className="mb-2 font-bold uppercase text-grey-darkest" htmlFor="username">User Name</label>
                <input className="px-3 py-2 border text-grey-darkest" type="text" name="username" id="username" placeholder="User Name" />
            </div>

            <div className="flex flex-col ">
                <label className="mb-2 font-bold uppercase text-grey-darkest" htmlFor="password">Password</label>
                <input className="px-3 py-2 border text-grey-darkest" type="password" name="password" id="password" placeholder="password" />
            </div>

            <button className="px-3 py-4 mt-8 uppercase bg-green-500 rounded text-green hover:bg-green-600" type="submit">Sign In</button>

            {error && <h2 className="text-xl text-red-400">Try again</h2>}

        </form>
    )
}