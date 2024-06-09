import Logo from './logo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-10xl m-0 mx-auto">
        {/* Top area: Blocks */}
        <div className="grid gap-40 border-t border-gray-200 px-10 py-8 sm:grid-cols-12 md:py-12">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo />
            </div>
            <div className="text-sm text-gray-400">
              <a
                href="#0"
                className="text-gray-300 transition duration-150 ease-in-out hover:text-gray-900 hover:underline"
              >
                Terms
              </a>{' '}
              ·{' '}
              <a
                href="#0"
                className="text-gray-300 transition duration-150 ease-in-out hover:text-gray-900 hover:underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="mb-2 font-medium text-gray-200">Produtos</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Oracle
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Elixir
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Smart [W]
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="mb-2 font-medium text-gray-200">Águas</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="#Jasmine"
                  className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Jasmine
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#Namiko"
                  className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Namiko
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#Salomé"
                  className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Salomé
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#Crystal"
                  className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Crystal
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#Zafira"
                  className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Zafira
                </a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="mb-2 font-medium text-gray-200">Você é [W]</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="#Business"
                  className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Business
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#Sport"
                  className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Sport
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#Senior"
                  className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Senior
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#Glamour"
                  className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Glamour
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#Gen [W]"
                  className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Gen [W]
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#Crianças"
                  className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Crianças
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="mb-2 font-medium text-gray-200">Subscribe</h6>
            <p className="mb-4 text-sm text-gray-400">
              Get the latest news and articles to your inbox every month.
            </p>
            <form>
              <div className="mb-4 flex flex-wrap">
                <div className="w-full">
                  <label className="sr-only block text-sm" htmlFor="newsletter">
                    Email
                  </label>
                  <div className="relative flex max-w-xs items-center">
                    <input
                      id="newsletter"
                      type="email"
                      className="form-input w-full px-3 py-2 pr-12 text-sm text-gray-200"
                      placeholder="Your email"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute inset-0 left-auto"
                      aria-label="Subscribe"
                    >
                      <span
                        className="absolute inset-0 right-auto my-2 -ml-px w-px bg-gray-300"
                        aria-hidden="true"
                      ></span>
                      <svg
                        className="mx-3 h-3 w-3 shrink-0 fill-current text-blue-600"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </div>
                  
                </div>
              </div>
            </form>
          </div> */}
          {/* Success message */}
          {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
        </div>

        {/* Bottom area */}
        <div className="border-t border-gray-200 py-4 md:flex md:items-center md:justify-between md:py-8">
          {/* Social as */}
          <ul className="mb-4 flex px-10 md:order-1 md:mb-0 md:ml-4">
            <li>
              <a
                href="#0"
                className="hover:bg-white-100 flex items-center justify-center rounded-full bg-white text-gray-600 shadow transition duration-150 ease-in-out hover:text-gray-900"
                aria-label="Twitter"
              >
                <svg
                  className="h-8 w-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a
                href="#"
                target="_blank"
                className="hover:bg-white-100 flex items-center justify-center rounded-full bg-white text-gray-600 shadow transition duration-150 ease-in-out hover:text-gray-900"
                aria-label="Instagram"
              >
                <svg
                  className="h-8 w-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.145" cy="11.892" r="1" />
                  <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                  <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="mr-4 px-10 text-sm text-gray-300">
            &copy; Cruip.com. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
