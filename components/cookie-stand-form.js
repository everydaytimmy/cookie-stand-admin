export default function CookieStand(props) {

    function submitHandler(event) {
        event.preventDefault();
        const standInfo = {};
        standInfo.location = event.target.location.value;
        standInfo.minCustomers = parseInt(event.target.min.value);
        standInfo.maxCustomers = parseInt(event.target.max.value);
        standInfo.avgCookies = parseFloat(event.target.avg.value);
        props.onStandCreate(standInfo)
    }

    return (
        <div className="px-3 py-3 mx-auto my-8 bg-green-300 rounded-lg w-max">
            <legend className="p-2 text-2xl text-center">Create Cookie Stand</legend>
            <form className="p-2 mx-auto border-gray-200" onSubmit={submitHandler}>
                <div className="flex items-center">
                    <p className="pr-2">Location</p>
                    <input name="location" id="location" type="text" className="w-full h-4 pl-2 placeholder-black bg-blue-50" />
                </div>
                <div className="flex justify-center p-3 my-5">
                    <div className="mx-2 bg-green-50">
                        <p className="text-xs text-center">Minimum Customers per Hour</p>
                        <input id="min" name="min" type="number" className="h-5 mx-3 placeholder-black w-95"></input>
                    </div>
                    <div className="mx-2 bg-green-50">
                        <p className="text-xs text-center">Maximum Customers per Hour</p>
                        <input id="max" name="max" type="number" className="h-5 mx-3 placeholder-black"></input>
                    </div>
                    <div className="mx-2 bg-green-50">
                        <p className="text-xs text-center">Average Cookies Per Sale</p>
                        <input id="avg" type="number" step=".1" name="avg" className="h-5 mx-3 placeholder-black"></input>
                    </div>
                    <button className="px-20 py-3 bg-green-500 rounded w-max">Create</button>
                </div>
            </form>
        </div>
    )

}