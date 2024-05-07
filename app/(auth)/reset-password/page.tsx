export const metadata = {
  title: 'Reset Password - Simple',
  description: 'Page description',
}

export default function ResetPassword() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Page header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h1 className="h1 mb-4">Lets get you back up on your feet</h1>
            <p className="text-xl text-gray-600">
              Enter the email address you used when you signed up for your
              account, and well email you a link to reset your password.
            </p>
          </div>

          {/* Form */}
          <div className="mx-auto max-w-sm">
            <form>
              <div className="-mx-3 mb-4 flex flex-wrap">
                <div className="w-full px-3">
                  <label
                    className="mb-1 block text-sm font-medium text-gray-800"
                    htmlFor="email"
                  >
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
              <div className="-mx-3 mt-6 flex flex-wrap">
                <div className="w-full px-3">
                  <button className="btn w-full bg-blue-600 text-white hover:bg-blue-700">
                    Send reset link
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
