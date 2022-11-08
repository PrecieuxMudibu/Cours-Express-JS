exports.success = (message, data) => {
    return {
        message,
        data,
    };
};

exports.getUniqueId = (pockemons) => {
    const pockemonsId = pockemons.map((pockemon) => pockemon.id);
    const maxId = pockemonsId.reduce((a, b) => Math.max(a, b));
    const uniqueId = maxId + 1;
    return uniqueId;
};
