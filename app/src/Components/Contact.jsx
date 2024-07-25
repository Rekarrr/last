import React, { useState } from 'react';

const Contact = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        FirstName,
        LastName,
        subject,
        email,
        message,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.status === 'ok') {
      alert('Message sent!');
      setFirstName('');
      setLastName('');
      setSubject('');
      setEmail('');
      setMessage('');
    } else {
      alert(data.error);
    }
  }

  return (
    <div className="dark:bg-gray-800 px-6 py-24 pb-44 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className=" text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
          Contact <span className="text-indigo-500">Me</span>
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-black dark:text-white"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                value={FirstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm  ring-1 valid:ring-black ring-gray-300 placeholder:text-black sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-black dark:text-white"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                value={LastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black  shadow-sm ring-1 ring-inset ring-gray-300 valid:ring-black placeholder:text-black  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="subject"
              className="block text-sm font-semibold leading-6 text-black dark:text-white"
            >
              Subject
            </label>
            <div className="mt-2.5">
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                type="text"
                name="subject"
                id="subject"
                autoComplete="subject"
                className=" block w-full rounded-md border-0 px-3.5 py-2 text-black  shadow-sm ring-1 ring-inset ring-gray-300 valid:ring-black placeholder:text-black focus:ring-2  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-black dark:text-white"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black  shadow-sm ring-1 ring-inset ring-gray-300 valid:ring-black placeholder:text-black  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-black dark:text-white"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 valid:ring-black placeholder:text-black sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
