import React from 'react'

const HotelImg = ({ url }) => {
    return (
        <div className="channels-avatar-container">
            <img
                src={url || imageUrl}
                width='100%'
                height='100%'
                alt="Channel Avatar"
            />
        </div>
    )
}

export const ViewHotelPage = ({
    //modelo de hotel


}) => {
    //handleNavigateToChannel
    return (
        <div className="channels-card" >
            <ChannelAvatar url={avatarUrl} />
            <div>
                <span className="channels-card-title">{nameHotel}</span>
                <span className="channels-card-subtitle">{stars}</span>
                <span className="channels-card-title">{address}</span>
                <span className="channels-card-title">{descripcion}</span>
                
            </div>
        </div>
    )
}

