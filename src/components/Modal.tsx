import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'
import AddTokenForm, {ButtonType} from "./AddTokenForm";
import {CrossChainHub} from "../contracts";


interface ModalProps {
  buttonTitle: string;
  hubContract: CrossChainHub | undefined
  contractFunction: ButtonType
}

const TokenModal: React.FC<ModalProps> = ({ buttonTitle, hubContract, contractFunction}) => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <button
          type="button"
          title="Add New Token"
          onClick={openModal}
          className="focus:outline-none rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white
          hover:bg-opacity-30 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          {buttonTitle}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2">
                    <AddTokenForm buttonTitle={buttonTitle} hubContract={hubContract} buttonType={contractFunction}/>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default TokenModal