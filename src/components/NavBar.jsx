import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="flex justify-around p-4 mb-4 rounded shadow-sm bg-stone-600">
      <NavLink to={''} className={({isActive})=>`font-medium duration-200 hover:text-purple-400 ${isActive?` border-b-2 border-orange-600  text-sky-400`:``}`} >Home</NavLink>
      <NavLink to={'/form'} className={({isActive})=>`font-medium duration-200 hover:text-purple-400 ${isActive?`border-b-2 border-orange-600 text-sky-400`:``}`}>Form</NavLink>
      <NavLink to={'/show'} className={({isActive})=>`font-medium duration-200 hover:text-purple-400 ${isActive?`border-b-2 border-orange-600 text-sky-400`:``}`}>Show</NavLink>
    </div>
  )
}

export default NavBar