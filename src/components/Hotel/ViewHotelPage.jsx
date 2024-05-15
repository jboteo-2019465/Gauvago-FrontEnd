

export const ViewHotelPage = () => {
    
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

