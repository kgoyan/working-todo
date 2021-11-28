import Image from 'next/image'

import {ProviderButton} from "components/ui/buttons" 

import facebook from './facebook.png'
 
 function FacebookProvider({label, ...props}) {
    return (
        <ProviderButton>
             <div>
            <Image
              src={facebook}
              layout="fixed"
              width={24}
              height={24}
              quality={3}
              />

             </div>
              {label}
        </ProviderButton>
    )
}

export default FacebookProvider