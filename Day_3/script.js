let CurrentUser = "X"
const arr = Array(9).fill(null);

const CheckWin = (ele) => {

    const GameWin = ele.innerHTML


    if (arr[0] == arr[1] && arr[0] == arr[2] && arr[0] != null) {
        document.write(`Game is win ${GameWin}`)
        return

    } else if (arr[3] == arr[4] && arr[3] == arr[5] && arr[3] != null) {
        document.write(`Game is win ${GameWin}`)
        return
    } else if (arr[6] == arr[7] && arr[6] == arr[8] && arr[6] != null) {
        document.write(`Game is win ${GameWin}`)
        return
    } else if (arr[0] == arr[3] && arr[0] == arr[6] && arr[0] != null) {
        document.write(`Game is win ${GameWin}`)
        return
    } else if (arr[1] == arr[4] && arr[1] == arr[7] && arr[1] != null) {
        document.write(`Game is win ${GameWin}`)
        return
    } else if (arr[2] == arr[5] && arr[2] == arr[8] && arr[2] != null) {
        document.write(`Game is win ${GameWin}`)
        return
    } else if (arr[0] == arr[4] && arr[0] == arr[8] && arr[0] != null) {
        document.write(`Game is win ${GameWin}`)
        return
    } else if (arr[2] == arr[4] && arr[2] == arr[6] && arr[2] != null) {
        document.write(`Game is win ${GameWin}`)
        return
    }

    if (!arr.some(e => e === null)) {
        document.write("Game is Draw")
        return
    }


}

const handelTicTacTo = (ele) => {
let id = Number(ele.id)
    document.getElementById(id).innerHTML = CurrentUser
    if (arr[id !== null]) return
    if (CurrentUser == "X") {
        CurrentUser = "o"
    } else if (CurrentUser == "o") {
        CurrentUser = "X"
    }
    arr[id] = CurrentUser;
    CheckWin(ele)
}