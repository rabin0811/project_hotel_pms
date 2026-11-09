const calculatePrice = (roomRate, nights) => {
    return roomRate * nights;
};

module.exports = { calculatePrice };
