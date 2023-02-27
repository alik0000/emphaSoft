export default {
    CHANGE_LOADING(state, flag = false) {
        state.loading = flag
    },
    TOGGLE_MODAL_VISIBLE(state, visible) {
        state.modalVisible = visible
    }
}