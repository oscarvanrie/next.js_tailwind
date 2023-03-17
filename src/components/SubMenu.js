export default function SubMenu({subCategorieArray, categorieName}) {

    return (
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{categorieName}</h2>

            </div>
            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
              {subCategorieArray.map((subCategorie, index) => (
                <li key={subCategorie.order_position}>
                  <div className="flex items-center gap-x-6">
                    <div>
                      <p>{index}</p>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{subCategorie.description}</h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">{subCategorie.slug}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      )
}