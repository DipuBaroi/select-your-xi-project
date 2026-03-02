import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({ purchasedPlayer, removePlayer }) => {
    console.log(purchasedPlayer);
    return (
        <div className='w-11/12 mx-auto'>
           {
            purchasedPlayer.map(player=><SelectedCard 
                key={player.player_name}
                player={player}
                removePlayer={removePlayer}
                ></SelectedCard>)
           }
        </div>
    );
};

export default SelectedPlayers;