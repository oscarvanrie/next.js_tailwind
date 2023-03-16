import { Fragmentn, useState, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import fetchCategories from '@/pages/api/fetchCategories'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Dropdown() {
    const [categories, setCategories] = useState([]);



    useEffect(() => {
      const fetchData = async () => {      
        const response = await fetchCategories();
        setCategories(response.data);
        return response.data;
      };
      
      fetchData();
    }, []);


  return (
    <Menu as="div" className="relative inline-block text-left">

        <Menu.Button className="m-5 flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          <span className='align-middle	'>Categories</span>
        </Menu.Button>


      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
          {categories.map((category) => (
            <Menu.Item key={category.order_position}>
                {({ active }) => (
                <a
                    href="#"
                    className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                    )}
                >
                    {category.description}
                </a>
                )}
            </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
