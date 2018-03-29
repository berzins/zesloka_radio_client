

export const ACTION_MODAL_OPEN = "ACTION_MODAL_OPEN"
export const ACTION_MODAL_CLOSE = "ACTION_MODAL_CLOSE"

export const openActionModal = () => {
    return { type: ACTION_MODAL_OPEN }
}

export const closeActionModal = () => {
    return { type: ACTION_MODAL_CLOSE }
}