import { hours } from '../data'

export default function ReportTable(props) {
    return (
        <table className="w-1/2 mx-auto border-4 border-collapse border-gray-500">
            <thead>
                <tr>
                    <th className="border border-black">Location</th>
                    {hours.map(item => <th className="border border-black">{item}</th>)}
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    )
}