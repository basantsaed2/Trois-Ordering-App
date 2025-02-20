import React from 'react'
import { PulseLoader } from 'react-spinners'
import RedLogo from '../../assets/Images/RedLogo'
import mainLogo from '../../assets/Images/mainLogo.jpeg'
import TriosLogo from '../../assets/Images/TriosLogo.jpg'

const LoaderLogin = () => {
       return (
              <>
              <div>
                     <div className={`w-full h-full flex flex-col justify-center items-center`}>
                            <img src={TriosLogo} width={250} height={250} alt="Logo" />
                            <PulseLoader color='#d1751f' size={20} />
                     </div>

                      <div className="flex items-center justify-center mt-10 gap-2 py-4 border-t border-gray-300">
                            <h1 className="text-gray-600">Powered by</h1>
                            <img src={mainLogo} className="w-24 h-24" alt="Main Logo" />
                     </div>

              </div>
              </>
       )
}

export default LoaderLogin