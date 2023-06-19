export default function Alert({ text }) {
  return (
    <div div className="bg-yellow-300/30 dark:bg-yellow-500/30 border-1 border-yellow-700/70 dark:border-yellow-500/70 text-yellow-600 dark:text-yellow-500 rounded-lg mb-6" >
      <span className="py-2 px-4 flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
        <span className="ml-2 font-semibold">
          {text}
        </span>
      </span>
    </div >

  )
}