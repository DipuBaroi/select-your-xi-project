import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({ purchasedPlayer }) => {
    console.log(purchasedPlayer);
    return (
        <div className='w-11/12 mx-auto'>
           {
            purchasedPlayer.map(player=><SelectedCard player={player}></SelectedCard>)
           }
        </div>
    );
};

export default SelectedPlayers;