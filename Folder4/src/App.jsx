function App(){
  return(
  <div>
    <button
  className="px-6 py-2 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
>
  Click Me
</button>

<div className="w-64 mx-auto">
  <img
    src="https://via.placeholder.com/300"
    alt="Sample"
    className="rounded shadow-lg hover:scale-105 transition-transform duration-300"
  />
</div>


  <h2 className="text-xl md:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
  Responsive Gradient Heading
</h2>
<ul className="list-disc list-inside pl-5 space-y-2">
  <li className="hover:text-blue-600">Item One</li>
  <li className="hover:text-blue-600">Item Two</li>
  <li className="hover:text-blue-600">Item Three</li>
</ul>
<div className="bg-white rounded-lg shadow-lg p-5 w-72">
  <img
    src="https://via.placeholder.com/300"
    alt="Card"
    className="rounded mb-3"
  />
  <h3 className="text-lg font-semibold">Card Title</h3>
  <p className="text-gray-600 my-2">
    This is a simple card description using Tailwind CSS.
  </p>
  <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    Learn More
  </button>
</div>
<table className="w-full border border-gray-300">
  <thead className="bg-gray-200">
    <tr>
      <th className="border p-2">Name</th>
      <th className="border p-2">Age</th>
      <th className="border p-2">Role</th>
    </tr>
  </thead>
  <tbody>
    {[1, 2, 3].map((_, i) => (
      <tr
        key={i}
        className="odd:bg-gray-100 even:bg-white hover:bg-gray-200"
      >
        <td className="border p-2">User {i + 1}</td>
        <td className="border p-2">22</td>
        <td className="border p-2">Developer</td>
      </tr>
    ))}
  </tbody>
</table>
<form className="space-y-4 max-w-md">
  <input
    type="text"
    placeholder="Name"
    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  <input
    type="email"
    placeholder="Email"
    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  <input
    type="password"
    placeholder="Password"
    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
    Submit
  </button>
</form>
<nav className="bg-gray-800 text-white p-4 flex flex-col md:flex-row gap-4 md:gap-8">
  <a className="hover:text-blue-400" href="#">Home</a>
  <a className="hover:text-blue-400" href="#">About</a>
  <a className="hover:text-blue-400" href="#">Contact</a>
</nav>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {[1, 2, 3, 4, 5, 6].map((item) => (
    <div key={item} className="bg-white p-4 rounded shadow">
      Card {item}
    </div>
  ))}
</div>
<div className="space-y-10">

  {/* Navbar */}
  <nav className="bg-blue-600 text-white p-4 flex flex-col md:flex-row gap-4">
    <span>Home</span>
    <span>Features</span>
    <span>Contact</span>
  </nav>

  {/* Hero Section */}
  <section className="text-center space-y-4">
    <h1 className="text-3xl md:text-5xl font-bold">
      Welcome to Tailwind UI
    </h1>
    <img
      src="https://via.placeholder.com/400"
      className="mx-auto rounded shadow-lg"
    />
  </section>

  {/* Features */}
  <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[1, 2, 3].map((f) => (
      <div key={f} className="bg-white p-5 rounded shadow">
        Feature {f}
      </div>
    ))}
  </section>

  {/* Table */}
  <section>
    <table className="w-full border">
      <tr className="bg-gray-200">
        <th className="border p-2">Feature</th>
        <th className="border p-2">Status</th>
      </tr>
      <tr className="hover:bg-gray-100">
        <td className="border p-2">Tailwind</td>
        <td className="border p-2">Active</td>
      </tr>
    </table>
  </section>

  {/* Contact Form */}
  <section>
    <form className="max-w-md mx-auto space-y-4">
      <input className="w-full p-2 border rounded" placeholder="Name" />
      <input className="w-full p-2 border rounded" placeholder="Email" />
      <button className="w-full bg-blue-500 text-white py-2 rounded">
        Send
      </button>
    </form>
  </section>

</div>


</div>
  )

}
export default App;