import CardButton from '../CartButton'
import { useGlobalContext } from '../../context/ContextGlobal'

function Layout () {
  const { productos } = useGlobalContext()
  return (
    <>
     <nav className="bg-blue-600 flex justify-between items-center flex-col md:flex-row p-5">
      <h1 className="flex flex-basis-1/3 text-5xl mx-10 text-gray-100">Devf &lt;Market&gt;</h1>
        <ol className="flex flex-basis-1/3 gap-2 text-2xl">
          <li className="mx-4 text-gray-50 hover:text-gray-600 hover:bg-blue-200 p-2 rounded-sm px-4 hover:cursor-pointer">Collection</li>
          <li className="mx-4 text-gray-50 hover:text-gray-600 hover:bg-blue-200 p-2 rounded-sm px-4 hover:cursor-pointer">Men</li>
          <li className="mx-4 text-gray-50 hover:text-gray-600 hover:bg-blue-200 p-2 rounded-sm px-4 hover:cursor-pointer">Women</li>
          <li className="mx-4 text-gray-50 hover:text-gray-600 hover:bg-blue-200 p-2 rounded-sm px-4 hover:cursor-pointer">About</li>
          <li className="mx-4 text-gray-50 hover:text-gray-600 hover:bg-blue-200 p-2 rounded-sm px-4 hover:cursor-pointer">Contact</li>
        </ol>
        <div className="flex flex-basis-1/3 mx-5">
          <ul className="flex items-center">
            <li className="text-gray-50">
              <CardButton productos={productos} />
            </li>
            <li className="mx-5">
              <img src="images/image-avatar.png" alt="avatar" className="w-10 h-10 rounded-full" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Layout
