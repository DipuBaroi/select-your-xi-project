import React, { useState } from 'react';
import userImg from '../../assets/user.png'
import flagImg from '../../assets/flag.png'

const Player = ({ player, setAvailableBalance, availableBalance,purchasedPlayer,setPurchasedPlayer }) => {


    const [isSelected, setIsSelected] = useState(false)

    const handleSelected = (player) => {

        const playerPrice = parseInt(player.price.split('USD').join('').split(',').join(''))
        if(availableBalance<playerPrice){
            alert('Not Enough Coins')
            return
        }
        setIsSelected(true)
        setAvailableBalance(availableBalance - playerPrice)
        setPurchasedPlayer([...purchasedPlayer, player])
        
    }
    return (
        <div className="card bg-base-100 shadow-sm p-4">
            <figure>
                <img className='w-full h-[280px] object-cover'
                    src={player.player_image}
                    alt="Shoes" />

            </figure>
            <div className="space-y-4 mt-4">
                <div className='flex gap-2 '>
                    <img src={userImg} alt="" />
                    <h2 className="card-title">{player.player_name}</h2>
                </div>
                <div className="flex justify-between border-b border-gray-400 pb-2">
                    <div className='flex items-center gap-2'>
                        <img className='w-[20px] h-[20px]' src={flagImg} alt="" />

                        <span>{player.player_country}</span>
                    </div>
                    <button className='btn'>{player.player_role}</button>
                </div>
                <div className="flex justify-between font-bold">
                    <span>Rating</span>
                    <span>{player.rating}</span>
                </div>
                <div className="flex justify-between ">
                    <span className='font-bold'>{player.batting_style}</span>
                    <span>{player.bowling_style}</span>
                </div>
                <div className="card-actions items-center justify-between">
                    <h4 className='font-bold'>Price: ${player.price} </h4>
                    <button disabled={isSelected} onClick={() => {handleSelected(player)}} className="btn">{isSelected ? 'Selected' : 'Choose Player'}</button>
                </div>
            </div>
        </div>
    );
};

export default Player;