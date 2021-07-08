

export default function Form(props) {

    function submitHandler(event) {
        event.preventDefault();
        const standInfo = {};
        standInfo.location = event.target.location.value;
        standInfo.minCustomers = parseInt(event.target.minCustomers.value);
        standInfo.maxCustomers = parseInt(event.target.maxCustomers.value);
        standInfo.avgCookies = parseFloat(event.target.avgCookies.value);
        standInfo.hourlySales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
        props.onStandCreate(standInfo)
    }

        return (
            <>
                <form className="justify-center p-2 mx-10 my-5 bg-green-300 rounded h-168" onSubmit={submitHandler}>
                    <div>
                        <h2 className="min-w-full p-2 mx-auto my-2 text-2xl text-center fonr-semibold">
                            Create Cookie Stand
              </h2>
                        <div className="flex mx-20">
                            <label className="mx-2">Location</label>
                            <input id="location" name="location" type="text" className="flex w-3/4" />
                        </div>
                        <div className="flex items-center w-3/4 py-10 mx-20">

                            <div className="justify-items-start">
                                <label className="py-10">Minimum Customers Per Hour</label>
                                <input id="min-customers" name="minCustomers" type="number" className="mx-1" />
                            </div>
                            <div className="justify-items-start">
                                <label className="py-10">Maximum Customers Per Hour</label>
                                <input id="max-customers" name="maxCustomers" type="number" className="mx-1" />
                            </div>
                            <div className="justify-items-start">
                                <label className="py-10">Average Cookies Per Sale</label>
                                <input id="avg-cookies" name="avgCookies" type="number" step=".1" className="mx-1" />
                            </div>
                            <button type="submit" className="h-20 bg-green-500 w-60">Create</button>
                        </div>
                    </div>
                </form>
            </>
        )

    }