import React from 'react'

const EmpCard = ({id, handleEmpCardToggle}) => {

    const emp = JSON.parse(localStorage.getItem('emp'))
    const selectedEmp = emp.find((emp)=>emp.empID === id);
    console.log(selectedEmp)

    const name = selectedEmp.fName
    const firstLetterOfName = name.slice(0,1)

  return (
    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4">
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900">Employee Details</h3>
      
    </div>

    <div className="px-6 py-4 space-y-4">
      {/* Header row */}
      <div className="flex items-center space-x-3">
        <div className="h-12 w-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-lg font-semibold">
          {firstLetterOfName}
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-900">
            {selectedEmp.fName} {selectedEmp.lName}
          </p>
          <p className="text-sm text-gray-500">
            {selectedEmp.role || 'Role not set'} • {selectedEmp.dept || 'Dept not set'}
          </p>
        </div>
      </div>

      {/* Info grid */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-xs text-gray-500 uppercase">Employee ID</p>
          <p className="font-medium text-gray-900">{selectedEmp.empID || '-'}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase">Join Date</p>
          <p className="font-medium text-gray-900">{selectedEmp.joinDate || '-'}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase">Email</p>
          <p className="font-medium text-gray-900 break-all">{selectedEmp.email || '-'}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase">Phone</p>
          <p className="font-medium text-gray-900">{selectedEmp.phone || '-'}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase">Salary</p>
          <p className="font-medium text-gray-900">
            {selectedEmp.salary ? `₹ ${selectedEmp.salary}` : '-'}
          </p>
        </div>
      </div>
    </div>

    <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
      <button
        type="button"
        className="px-4 py-2 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
        onClick={handleEmpCardToggle}
      >
        Close
      </button>
      {/* Optional: Edit button (no logic yet) */}
      <button
        type="button"
        className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      >
        Edit
      </button>
    </div>
  </div>
  )
}

export default EmpCard