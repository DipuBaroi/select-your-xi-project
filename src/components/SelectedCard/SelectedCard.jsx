import React from 'react';

const SelectedCard = ({player, removePlayer}) => {

    const handleRemove =()=>{
        removePlayer(player)
    }
    return (
         <div className="flex justify-between items-center border border-gray-300 p-3 mt-3 rounded-xl">
                <div className="flex gap-5">
                    <img className='h-[60px] w-[60px] rounded-xl' src={player.player_image} alt="" />
                    <div>
                        <h3 className='text-xl font-semibold'>{player.player_name} </h3>
                        <p className='text-base'>{player.player_role}</p>
                    </div>
                </div>
                <div onClick={handleRemove}>
                    <img src="https://i.ibb.co.com/5XJQFfQd/Frame.png" alt="" />
                </div>
            </div>
    );
};

export default SelectedCard;