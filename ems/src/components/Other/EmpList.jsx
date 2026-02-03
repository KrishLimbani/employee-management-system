import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import empContext from '../../context/Empcontext'

const EmpList = ({handleEmpCardToggle}) => {

  const {emp, setEmp, setEditingEmp} = useContext(empContext)
  const navigate = useNavigate()

  const [showAll, setShowAll] = useState(false)

  const visibleEmp = showAll ? emp : emp.slice(0, 4)

  const hasMore = emp.length > 4

  function handleDelete(id){
    setEmp((prev)=>prev.filter(emp => emp.empID !== id) )
    console.log("deleting")
  }

  function handleEditClick(empItem){
    setEditingEmp(empItem)
    navigate('/admin/addEmp')
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left font-medium text-gray-600">Name</th>
            <th className="px-6 py-3 text-left font-medium text-gray-600">Role</th>
            <th className="px-6 py-3 text-left font-medium text-gray-600">Department</th>
            <th className="px-6 py-3 text-left font-medium text-gray-600">Task</th>
            <th className="px-6 py-3 text-right font-medium text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {visibleEmp && visibleEmp.length > 0 ? (
            visibleEmp.map((empItem, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900 font-medium">
                  {empItem.fName}
                </td>
                <td className="px-6 py-4 text-gray-700">
                  {empItem.role}
                </td>
                <td className="px-6 py-4 text-gray-700">
                  {empItem.dept}
                </td>
                <td className="px-6 py-4 text-gray-700">
                  {empItem.task}
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button 
                  onClick={(()=>handleEmpCardToggle(empItem.empID))}
                  className="inline-flex items-center px-3 py-1 text-xs font-medium border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 cursor-pointer">
                    View
                  </button>
                  <button 
                  onClick={() => handleEditClick(empItem)}
                  className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer">
                    Edit
                  </button>
                  <button 
                  onClick={()=>handleDelete(empItem.empID)} 
                  className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-lg bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 cursor-pointer">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={5}
                className="px-6 py-6 text-center text-sm text-gray-500"
              >
                No employees found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* View All / Show Less toggle */}
      {hasMore && (
        <div className="px-6 py-3 border-t border-gray-100 flex justify-center">
          <button
            type="button"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700 cursor-pointer"
            onClick={() => setShowAll(prev => !prev)}
          >
            {showAll ? 'Show Less' : 'View All'}
          </button>
        </div>
      )}
    </div>
  )
}

export default EmpList