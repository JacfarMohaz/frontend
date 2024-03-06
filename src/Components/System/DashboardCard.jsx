import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function DashboardCards() {

    const [totlaDonors, setTotalDonors] = useState([])
    const [totalUsers, setTotalUsers] = useState([])
    const [totalEmails, setTotalEmails] = useState([])

    const handleReadTotalDonors = () => {
        axios.get("https://backend-blood-bank-w3m1.onrender.com/total/donors").then((res) => {
            setTotalDonors(res.data.getTotalDonors)
        }).catch((error) => console.log(error))
    }
    
    const handleReadTotalEmails = () => {
        axios.get("https://backend-blood-bank-w3m1.onrender.com/total/emails").then((res) => {
            setTotalEmails(res.data.getTotalEmails)
        }).catch((error) => console.log(error))
    }

    const handleReadTotalUsers = () => {
        axios.get("https://backend-blood-bank-w3m1.onrender.com/total/users").then((res) => {
            setTotalUsers(res.data.getTotalUsers)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        handleReadTotalDonors()
        handleReadTotalUsers()
        handleReadTotalEmails()
    }, [])

    return <div className="grid grid-cols-3 ml-[22%]">
        <Link to="/donors" className="bg-seconderyColor w-60 h-36 rounded-lg shadow-2xl mt-10 text-textColor">
            <h1 className="text-md font-semibold pt-4 pl-3">Total Donors</h1>
            <p className="text-4xl font-bold pl-10 pt-6">{totlaDonors > 0 ? totlaDonors : 0} <i class="fa-solid pl-4 fa-hand-holding-droplet"></i></p>
        </Link>

        {/* second */}
        <Link to="/users" className="bg-seconderyColor w-60 h-36 rounded-lg shadow-2xl mt-10 text-textColor">
            <h1 className="text-md font-semibold pt-4 pl-3">All Users</h1>
            <p className="text-4xl font-bold pl-10 pt-6">{totalUsers > 0 ? totalUsers : 0}<i class="fa-solid pl-10 fa-users"></i></p>
        </Link>

        {/* third */}
        <Link className="bg-seconderyColor w-60 h-36 rounded-lg shadow-2xl mt-10 text-textColor">
            <h1 className="text-md font-semibold pt-4 pl-3">All Messages</h1>
            <p className="text-4xl font-bold pl-10 pt-6">{totalEmails > 0 ? totalEmails : 0} <i class="fa-solid pl-6 fa-envelope"></i></p>
        </Link>

    </div>
}

export default DashboardCards