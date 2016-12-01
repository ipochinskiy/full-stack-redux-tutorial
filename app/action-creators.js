export const setState = (state) => ({
    type: 'SET_STATE',
    state,
});

export const vote = (entry) => ({
    type: 'VOTE',
    meta: { remote: true },
    entry,
});
