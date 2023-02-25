import React from 'react';

interface PropsInterface {
  setModalDeleteModalBackgroundClick: () => void;
}

export default function DeleteConfirmationModal(props: PropsInterface) {
  const { setModalDeleteModalBackgroundClick: handleModalDeleteModalBackgroundClick } = props;

  return (
    <>
      <div
        className="flex fixed z-10 top-0 left-0 h-screen w-screen justify-center items-center bg-blog-gray-5 opacity-50"
        onClick={(e) => handleModalDeleteModalBackgroundClick()}
      />
      <div className="flex fixed z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-col justify-center bg-transparent items-center">
        <div className="flex flex-col bg-white p-10">
          <p>Are You Sure You Want To Delete This?</p>
        </div>
      </div>
    </>
  );
}
