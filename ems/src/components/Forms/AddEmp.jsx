import React, { useContext, useState, useEffect } from 'react'
import empContext from '../../context/Empcontext'

const AddEmp = () => {

  const {emp, setEmp, editingEmp, setEditingEmp} = useContext(empContext)
    const[addEmp, setAddEmp] = useState({
      fName: '',
      lName: '',
      email: '',
      phone: '',
      dob: '',
      gender: '',
      empID: 0,
      dept: '',
      role: '',
      joinDate: '',
      salary: 0
    });

    useEffect(() => {
      if (editingEmp) {
        setAddEmp(editingEmp);
      }
    }, [editingEmp]);

    function handleInput(e){
      const name = e.target.name;
      const value = e.target.value;

      setAddEmp((prev)=>{
        return{
          ...prev,
          [name]: value
        }
      })
    }
    

  function handleSubmit(e){
    e.preventDefault()
    
    if (editingEmp) {
      // Update existing employee
      setEmp((prev)=>
        prev.map((item) => item.empID === editingEmp.empID ? addEmp : item)
      )
      setEditingEmp(null)
      setAddEmp({
        fName: '',
        lName: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        empID: 0,
        dept: '',
        role: '',
        joinDate: '',
        salary: 0
      })
      console.log("emp updated")
    } else {
      // Add new employee
      setEmp((prev)=>{
        return [
          ...prev,
          addEmp
        ]
      })
      setAddEmp({
        fName: '',
        lName: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        empID: 0,
        dept: '',
        role: '',
        joinDate: '',
        salary: 0
      })
      console.log("emp inserted")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {editingEmp ? 'Edit Employee' : 'Add New Employee'}
          </h1>
          <p className="text-gray-600">
            {editingEmp ? 'Update employee details below' : 'Fill in the employee details below'}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Personal Information Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="fName"
                    value={addEmp.fName}
                    onChange={handleInput}
                    
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter first name"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lName"
                    value={addEmp.lName}
                    onChange={handleInput}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter last name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={addEmp.email}
                    onChange={handleInput}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                    placeholder="employee@company.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={addEmp.phone}
                    onChange={handleInput}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={addEmp.dob}
                    onChange={handleInput}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={addEmp.gender}
                    onChange={handleInput}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="" >Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Address Section */}
            {/* <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Address Information
              </h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                    placeholder="123 Main Street"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                      placeholder="City"
                    />
                  </div>

                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                      State/Province
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                      placeholder="State"
                    />
                  </div>

                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                      placeholder="12345"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select country</option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="canada">Canada</option>
                    <option value="india">India</option>
                    <option value="australia">Australia</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div> */}

            {/* Employment Information Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Employment Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Employee ID */}
                <div>
                  <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700 mb-2">
                    Employee ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="employeeId"
                    name="empID"
                    value={addEmp.empID}
                    onChange={handleInput}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                    placeholder="EMP-001"
                  />
                </div>

                {/* Department */}
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                    Department <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="department"
                    name="dept"
                    value={addEmp.dept}
                    onChange={handleInput}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select department</option>
                    <option value="engineering">Engineering</option>
                    <option value="operations">Operations</option>
                    <option value="hr">Human Resources</option>
                    <option value="finance">Finance</option>
                    <option value="marketing">Marketing</option>
                    <option value="sales">Sales</option>
                    <option value="it">IT Support</option>
                  </select>
                </div>

                {/* Position/Role */}
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                    Position/Role <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="role"
                    value={addEmp.role}
                    onChange={handleInput}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                    placeholder="e.g., Software Engineer"
                  />
                </div>

                {/* Join Date */}
                <div>
                  <label htmlFor="joinDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Join Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="joinDate"
                    name="joinDate"
                    value={addEmp.joinDate}
                    onChange={handleInput}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Salary */}
                <div>
                  <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-2">
                    Salary
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      id="salary"
                      name="salary"
                      value={addEmp.salary}
                      onChange={handleInput}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                      placeholder="50000"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact Section */}
            {/* <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Emergency Contact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
                {/* Emergency Contact Name */}
                {/* <div>
                  <label htmlFor="emergencyName" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    id="emergencyName"
                    name="emergencyName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                    placeholder="Emergency contact name"
                  />
                </div> */}

                {/* Emergency Contact Phone */}
                {/* <div>
                  <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    id="emergencyPhone"
                    name="emergencyPhone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div> */}

                {/* Relationship */}
                {/* <div className="md:col-span-2">
                  <label htmlFor="emergencyRelation" className="block text-sm font-medium text-gray-700 mb-2">
                    Relationship
                  </label>
                  <select
                    id="emergencyRelation"
                    name="emergencyRelation"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select relationship</option>
                    <option value="spouse">Spouse</option>
                    <option value="parent">Parent</option>
                    <option value="sibling">Sibling</option>
                    <option value="friend">Friend</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div> */}

            {/* Form Actions */}
            <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => {
                  setEditingEmp(null)
                  setAddEmp({
                    fName: '',
                    lName: '',
                    email: '',
                    phone: '',
                    dob: '',
                    gender: '',
                    empID: 0,
                    dept: '',
                    role: '',
                    joinDate: '',
                    salary: 0
                  })
                }}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
              >
                {editingEmp ? 'Update Employee' : 'Add Employee'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddEmp