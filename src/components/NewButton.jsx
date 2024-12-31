import React from 'react'

const NewButton = ({title, id, containerClass, leftIcon}) => {
  return (
    <>
    <button id={id} className={`${containerClass} group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black`}>{leftIcon}

        <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
            <div>
                {title}
            </div>
        </span>
    </button>
    </>
  )
}

export default NewButton