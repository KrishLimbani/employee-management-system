import React, { useContext, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import empContext from '../../context/Empcontext'
import EmpList from '../Other/EmpList'

const AdminDashboard = () => {
  const nav = useNavigate()

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Top Navbar */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Overview of employees and tasks</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center space-x-2 border rounded-lg px-3 py-1.5 bg-gray-50">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search employees..."
                    className="bg-transparent text-sm outline-none border-none placeholder:text-gray-400"
                  />
                </div>
                <button className="relative text-gray-600 hover:text-gray-900">
                  <span className="absolute -top-1 -right-0 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white"></span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
                <div className="hidden sm:flex items-center space-x-3">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">Admin User</p>
                    <p className="text-xs text-gray-500">System Administrator</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
                    AD
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* KPI Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Employees</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">128</p>
                  <p className="text-xs text-green-600 mt-1">+6 this month</p>
                </div>
                <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20h6M4 20h5v-2a4 4 0 00-3-3.87M16 7a4 4 0 11-8 0 4 4 0 018 0zM6 7a4 4 0 118 0" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Tasks</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">42</p>
                  <p className="text-xs text-yellow-600 mt-1">12 high priority</p>
                </div>
                <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completed Tasks</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">310</p>
                  <p className="text-xs text-green-600 mt-1">+18% vs last month</p>
                </div>
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">On Leave Today</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">5</p>
                  <p className="text-xs text-gray-500 mt-1">Across 3 departments</p>
                </div>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M4 11h16M5 21h14a2 2 0 002-2v-8H3v8a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Employees & Tasks */}
            <div className="lg:col-span-2 space-y-6">
              {/* Employees List */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Employee List</h2>
                </div>
                <EmpList/>
              </div>

              {/* Task Overview */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Task Overview</h2>
                  <div className="space-x-2 text-xs">
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800">Completed</span>
                    <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800">In Progress</span>
                    <span className="px-2 py-1 rounded-full bg-red-100 text-red-800">Pending</span>
                  </div>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="space-y-3">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Engineering</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Total Tasks</span>
                      <span className="font-semibold text-gray-900">54</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: '65%' }}></div>
                    </div>
                    <p className="text-xs text-gray-500">65% completed</p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Operations</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Total Tasks</span>
                      <span className="font-semibold text-gray-900">32</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                      <div className="h-full bg-yellow-500" style={{ width: '48%' }}></div>
                    </div>
                    <p className="text-xs text-gray-500">48% completed</p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">HR</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Total Tasks</span>
                      <span className="font-semibold text-gray-900">21</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                      <div className="h-full bg-red-500" style={{ width: '30%' }}></div>
                    </div>
                    <p className="text-xs text-gray-500">30% completed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-2 text-sm">
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer"
                    onClick={() => nav("/admin/addEmp")}
                  >
                    <span>Add New Employee</span>
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                    <span>Assign New Task</span>
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12h14V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </button>
                  <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                    <span>Approve Leave Requests</span>
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </button>
                  <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                    <span>View Attendance</span>
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M4 11h16M5 21h14a2 2 0 002-2v-8H3v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Activity / Notifications */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start space-x-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-green-500"></span>
                    <div>
                      <p className="text-gray-800">
                        <span className="font-medium">Rahul Kumar</span> completed task{' '}
                        <span className="font-medium">"Feature X Code Review"</span>
                      </p>
                      <p className="text-xs text-gray-500">5 mins ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-yellow-500"></span>
                    <div>
                      <p className="text-gray-800">
                        <span className="font-medium">Jane Smith</span> submitted a{' '}
                        <span className="font-medium">leave request</span>
                      </p>
                      <p className="text-xs text-gray-500">30 mins ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
                    <div>
                      <p className="text-gray-800">
                        New employee <span className="font-medium">Akash Verma</span> added to{' '}
                        <span className="font-medium">Engineering</span> department
                      </p>
                      <p className="text-xs text-gray-500">1 hour ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-rose-500"></span>
                    <div>
                      <p className="text-gray-800">
                        <span className="font-medium">2 tasks</span> are overdue in{' '}
                        <span className="font-medium">Operations</span>
                      </p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default AdminDashboard