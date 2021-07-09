import { hours } from '../data'

export default function CookieStandTable(props) {
    console.log(props)
    // return null
    return (
        <table className="w-1/2 mx-auto my-4 border-4 border-collapse border-gray-500 ">
            <thead>
                <tr className="">
                    <th className="border border-black">Location</th>
                    {hours.map(item => <th className="border border-black">{item}</th>)}
                </tr>
            </thead>
            <tbody>

                {props.stands.map(report =>
                    <tr className="border border-black odd:bg-green-100">
                        <td className="border border-black">{report.location}</td>
                        {report.cookiesEachHour.map((value, i) => <td className="border border-black" key={i}> {value}</td>)}
                    </tr>
                )}


            </tbody>
        </table>
    )
}