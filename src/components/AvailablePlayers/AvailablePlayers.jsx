import React, { use } from 'react';

import Player from '../Player/Player';


const AvailablePlayers = ({ playersPromise, setAvailableBalance, availableBalance }) => {
    const players = use(playersPromise)
    // console.log(players);
    return (
        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                players.map((player, index) => <Player
                    key={index}
                    player={player}
                    setAvailableBalance={setAvailableBalance}
                    availableBalance={availableBalance

                    }></Player>)
            }
        </div>
    );
};

export default AvailablePlayers;