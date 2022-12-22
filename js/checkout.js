

function checkout() {
    connectMetamask();
}

function connectMetamask() {
    ethereum.request({ method: "eth_requestAccounts" })
}