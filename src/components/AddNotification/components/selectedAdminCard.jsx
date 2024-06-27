import React from 'react';
import { Icon } from '@iconify/react';
import AdminProfile from '../../../assets/adminProfile.png';

const SelectedAdminCard = ({ data, toggleChecked, handleRemoveAdmin }) => {
  console.log('🚀 ~ SelectedAdminCard ~ data:', data);
  return (
    <>
      {/* Render all cards if no search query is entered or filteredCards is null */}
      {!data || data.length === 0 ? (
        <p className='text-white'>No cards found.</p>
      ) : (
        data.map(
          (card, index) =>
            // Check if card is checked (isChecked === true)
            card.isChecked ? (
              <div key={index} className=''>
                <div className='bg-secondary__fill mt-2 h-36 w-[400px]  border border-gray-700 p-3 mr-2 rounded-md'>
                  <div className='flex text-white justify-between'>
                    <div className='flex mx-2'>
                      <img
                        className='h-12 mt-1 w-12 rounded-full'
                        src={card.image || AdminProfile}
                        alt=''
                      />
                      <div className='text-xs text-left mx-2 mt-1'>
                        <h2>{card.name}</h2>
                        <h3>{card.email}</h3>
                        <h3>{card.user_details?.phone_number}</h3>
                      </div>
                    </div>
                    <Icon
                      icon='material-symbols-light:close'
                      width={24}
                      height={24}
                      className='cursor-pointer my-auto'
                      onClick={() => handleRemoveAdmin(index)}
                    ></Icon>
                  </div>
                  <div className='flex mt-4 pt-2 px-2 justify-between'>
                    <div>
                      <h3 className='text-grey__primary__light text-sm'>
                        Active Org
                      </h3>
                      <div className='mt-1 bg-tealGreen bg-opacity-20 w-12 rounded-full'>
                        <h3 className='text-tealGreen text-sm truncate'>
                          {card?.active_org || 'N/A'}
                        </h3>
                      </div>
                    </div>
                    <div>
                      <h3 className='text-grey__primary__light float-right text-sm'>
                        Website
                      </h3>
                      <div className='mt-5 bg-success bg-opacity-20 w-32 h-6 pl-2 rounded-full'>
                        <h3 className='text-success mr-2 text-sm truncate'>
                          {card?.user_details?.website || 'N/A'}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null, // Render nothing if isChecked is false
        )
      )}
    </>
  );
};

export default SelectedAdminCard;
