import React from 'react'
import wedding from '../assets/WeddingLower1.jpg'
import birthday from '../assets/birthdayLower1.jpg'
import dinner from '../assets/DinnerLower1.jpeg'
import ring from '../assets/RingLower1.jpg'
import Cock from '../assets/CockLower1.jpg'


const LowerMain = () => {
  return (
   <>

<section className="text-gray-600 body-font mt-6">
  <div className="container px-16 py-24 mx-auto LowerMainSec">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-5xl text-2xl font-bold title-font mb-4 text-gray-900">One Platform, All Template</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={wedding}/>
          <div className="px-8 py-10  z-10 w-full border-4 transition-all duration-700 border-orange-200 bg-white opacity-0 hover:opacity-100">
          <img
                src='https://silvuple.modeltheme.com/wp-content/uploads/2023/07/invitation.svg'
                className="w-12 h-12 p-2"
              />
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Weeding Invitations</h1>
            <p className="leading-relaxed">Is your go-to solution for effortlessly managing invitations and tracking guest responses.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={dinner}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 transition-all duration-700 border-orange-200 bg-white opacity-0 hover:opacity-100">
          <img
                src='https://silvuple.modeltheme.com/wp-content/uploads/2023/07/banquet.svg'
                className="w-12 h-12 p-2"
              />
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Dinner Invitation</h1>
            <p className="leading-relaxed">Is your go-to solution for effortlessly managing invitations and tracking guest responses.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={birthday}/>
          <div className="px-8 py-10  z-10 w-full border-4 transition-all duration-700 border-orange-200 bg-white opacity-0 hover:opacity-100">
          <img
                src='https://silvuple.modeltheme.com/wp-content/uploads/2023/07/party.svg'
                className="w-12 h-12 p-2"
              />
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Birthday Invitation</h1>
            <p className="leading-relaxed">Is your go-to solution for effortlessly managing invitations and tracking guest responses.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={ring}/>
          <div className="px-8 py-10  z-10 w-full border-4 transition-all duration-700 border-orange-200 bg-white opacity-0 hover:opacity-100">
          <img
                src='https://silvuple.modeltheme.com/wp-content/uploads/2023/07/baby.svg'
                className="w-12 h-12 p-2"
              />
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Ring Ceremony</h1>
            <p className="leading-relaxed">Is your go-to solution for effortlessly managing invitations and tracking guest responses.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={Cock}/>
          <div className="px-8 py-10  z-10 w-full border-4 transition-all duration-700 border-orange-200 bg-white opacity-0 hover:opacity-100">
          <img
                src='https://silvuple.modeltheme.com/wp-content/uploads/2023/07/cocktail-1.svg'
                className="w-12 h-12 p-2"
              />
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Cocktail Invitations</h1>
            <p className="leading-relaxed">Is your go-to solution for effortlessly managing invitations and tracking guest responses.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/606x366"/>
          <div className="px-8 py-10  z-10 w-full border-4 transition-all duration-700 border-orange-200 bg-white opacity-0 hover:opacity-100">
          <img
                src='https://silvuple.modeltheme.com/wp-content/uploads/2023/07/invitation.svg'
                className="w-12 h-12 p-2"
              />
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Others</h1>
            <p className="leading-relaxed">Is your go-to solution for effortlessly managing invitations and tracking guest responses.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
<div className="FootMain">
  <div className="FootContent">
    <h1>ENVIRONMENTALLY-FRIENDLY INVITATIONS</h1>
    <p>Share your love with the planet.</p>
    <p>
      With a tree planted in your honor for every print order, your invitations are planet positive. 
      And with online invitations and your connected guest list, you're saving more than time and money.
    </p>
  </div>
</div>


   </>
  )
}

export default LowerMain