import React from 'react'
import { useSelector } from 'react-redux'

function Accounts() {
    let data=useSelector((s)=>{
        return s
    })

  return (
    <div>
        <table className='table table-bordered w-50'>
            <tr className='container'>
                <th>Fullname</th>
                <th>balance</th>
                <th>mobilenumber</th>
            </tr>
            <tr>
                <td>
                    {data.fullname}
                </td>
                <td>
                    {data.balance}
                </td>
                <td>
                    {data.mobile}
                </td>
            </tr>
        </table>
    </div>
  )
}

export default Accounts