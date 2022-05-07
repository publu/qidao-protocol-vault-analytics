import React, {ChangeEvent, useState} from 'react';

const AddTokenForm: React.FC = () => {
   
    const [tokenName, setTokenName] = useState('')
    const [limit, setLimit] = useState(0)

    const onClick = () => {
        //Call addAsset(tokenName) and setLimit(limit) here
        console.log(tokenName)
        console.log(limit)
        setTokenName('');
        setLimit(0);
    };

    const handleTokenChange = (e: ChangeEvent<HTMLInputElement>) => setTokenName(e.target.value)
    const handleLimitChange = (e: ChangeEvent<HTMLInputElement>) => setLimit(parseFloat(e.target.value))

    return (
      <form className="w-full max-w-sm">
          <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                         htmlFor="inline-token-name">
                      Token Name
                  </label>
              </div>
              <div className="md:w-2/3">
                  <input
                      type="text"
                      name="tokenName"
                      id="inline-token-name"
                      value={tokenName}
                      onChange={handleTokenChange}
                  />
              </div>
          </div>
          <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                         htmlFor="inline-hub-limit">
                      Limit
                  </label>
              </div>
              <div className="md:w-2/3">
                  <input
                      type="text"
                      name="limit"
                      id="inline-hub-limit"
                      value={limit}
                      onChange={handleLimitChange}
                  />
              </div>
          </div>

          <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                  <button
                      className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-gray-500 font-bold py-2 px-4 rounded"
                      type="button" onClick={onClick}>
                      Submit
                  </button>
              </div>
          </div>
      </form>
    );
  }

  export default AddTokenForm