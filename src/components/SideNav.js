import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react';
import fetchSubCategories from '@/pages/api/fetchSubCategories';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SideNav(catSlug) {
    catSlug = catSlug.catSlug;




    const [subCategories, setsubCategories] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState();
    var filteredCategories = [];
  
    useEffect(() => {
        const fetchData = async () => {    
          try {
            const response = await fetchSubCategories();
            setsubCategories(response.data)
            if (subcategories) {
              
              setsubCategories('');


              setsubCategories(subcategories);


            } else {
              console.log(`Invalid categorieID: ${categorieID}`);
            }
            return response.data;
          } catch (error) {
            console.log(error);
          }
        };
          
        fetchData();
    }, []);


    let element = [];
    subCategories.forEach(item => {
      let i = 0;
      item.subcategories.forEach(subcat => {

        if (subcat.slug === catSlug) {
          element.push(item);
          console.log(element);
          filteredCategories = element;
          setSelectedIndex(i);

          
        }
        i++;
      });
    });


    function test() {
        console.log(subCategories);
        
    }

    test();


  return (
    <form className="mt-4">
    {filteredCategories.map((section) => (
      <Disclosure as="div" key={section.name} className="border-t border-gray-200 pt-4 pb-4">
        {({ open }) => (
          <fieldset>
            <legend className="w-full px-2">
              <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                <span className="text-sm font-medium text-gray-900">{section.description}</span>
                <span className="ml-6 flex h-7 items-center">
                  <ChevronDownIcon
                    className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform')}
                    aria-hidden="true"
                  />
                </span>
              </Disclosure.Button>
            </legend>
            <Disclosure.Panel className="px-4 pt-4 pb-2">
              <div className="space-y-6">
                {section.subcategories.map((option, optionIdx) => (
                  
                  <div key={option.slug} className="flex items-center">
                    <Link
                    href={"/products/" + option.slug}
                    >
                        {
                          optionIdx == selectedIndex
                            ? <input id={`${section.id}-${optionIdx}-mobile`} name={`${section.id}[]`} defaultValue={option.slug} type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                            : <input id={`${section.id}-${optionIdx}-mobile`} name={`${section.id}[]`} defaultValue={option.slug} type="checkbox"  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        }
                          


                    <label
                      className="ml-3 text-sm text-gray-500"
                    >
                      {option.description}
                    </label>
                  </Link>
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </fieldset>
        )}
      </Disclosure>
    ))}
  </form>
  )
}


{/*
<div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 pb-4">
      <div className="flex flex-shrink-0 items-center px-4">
      </div>
      <div className="mt-5 flex flex-grow flex-col">
        <nav className="flex-1 space-y-1 bg-white px-2" aria-label="Sidebar">
          {subCategories.map((item) =>
            !item.subcategories ? (
              <div key={item.description}>
                <a
                  href="#"
                  className={classNames('bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group flex w-full items-center rounded-md py-2 pl-2 text-sm font-medium'
                  )}
                >

                  {item.description}
                </a>
              </div>
            ) : (
              <Disclosure as="div" key={item.name} className="space-y-1">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={classNames(
                        item.current
                          ? 'bg-gray-100 text-gray-900'
                          : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group flex w-full items-center rounded-md py-2 pl-2 pr-1 text-left text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500'
                      )}
                    >

                      <span className="flex-1">{item.description}</span>
                      <svg
                        className={classNames(
                          open ? 'rotate-90 text-gray-400' : 'text-gray-300',
                          'ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400'
                        )}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="space-y-1">
                      {item.subcategories.map((subItem) => (
                        <Link href={"/products/" + subItem.slug}>
                        <Disclosure.Button
                        key={subItem.description}
                        as="a"
                        
                        className="group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        >
                        
                            {subItem.description}
                        
                        
                        </Disclosure.Button>
                        </Link>     

                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )
          )}
        </nav>
      </div>
    </div>

*/}